import { NextResponse } from "next/server";

export const runtime = "nodejs";

type LeadPayload = {
  name?: string;
  email?: string;
  company?: string;
  message?: string;
  frameworks?: string[];
};

function isEmail(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

function esc(s: string) {
  return s.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c] as string));
}

async function sendEmail(lead: {
  name: string; email: string; company: string; message: string; frameworks: string[];
}) {
  const key = process.env.RESEND_API_KEY;
  if (!key) return { sent: false, reason: "no_resend_key" };

  const to = process.env.LEAD_NOTIFY_TO || "marek@deeptech.pl";
  const from = process.env.LEAD_NOTIFY_FROM || "Audomate Website <audomate@veryniceworks.com>";

  const rows: [string, string][] = [
    ["Name", lead.name],
    ["Email", lead.email],
    ["Company", lead.company || "—"],
    ["Frameworks", lead.frameworks.length ? lead.frameworks.join(", ") : "—"],
    ["Message", lead.message || "—"],
  ];

  const html = `
    <div style="font-family:Inter,Arial,sans-serif;max-width:560px;margin:auto;color:#08130f">
      <div style="border-left:4px solid #00d878;padding:4px 0 4px 16px;margin-bottom:20px">
        <div style="font-size:12px;letter-spacing:.12em;text-transform:uppercase;color:#05633f;font-weight:700">Audomate · New pilot request</div>
        <div style="font-size:20px;font-weight:700;margin-top:4px">${esc(lead.name)}${lead.company ? " — " + esc(lead.company) : ""}</div>
      </div>
      <table style="width:100%;border-collapse:collapse;font-size:14px">
        ${rows.map(([k, v]) => `
          <tr>
            <td style="padding:10px 12px;background:#f3f7f4;font-weight:600;width:120px;vertical-align:top;border-bottom:1px solid #fff">${k}</td>
            <td style="padding:10px 12px;border-bottom:1px solid #f3f7f4">${esc(v).replace(/\n/g, "<br>")}</td>
          </tr>`).join("")}
      </table>
      <p style="font-size:12px;color:#6b7973;margin-top:20px">
        Reply to this email to respond directly to ${esc(lead.email)}. Sent from audomate.eu.
      </p>
    </div>`;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${key}` },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: lead.email,
      subject: `New Audomate pilot request — ${lead.name}${lead.company ? " (" + lead.company + ")" : ""}`,
      html,
    }),
  });

  if (!res.ok) {
    const detail = await res.text();
    console.error("[audomate lead] resend failed", res.status, detail);
    return { sent: false, reason: `resend_${res.status}` };
  }
  return { sent: true };
}

async function storeSupabase(lead: {
  name: string; email: string; company: string; message: string; frameworks: string[];
}) {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return { stored: false };
  try {
    const res = await fetch(`${url}/rest/v1/audomate_leads`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: key,
        Authorization: `Bearer ${key}`,
        Prefer: "return=minimal",
      },
      body: JSON.stringify({
        name: lead.name, email: lead.email, company: lead.company || null,
        message: lead.message || null, frameworks: lead.frameworks, source: "audomate.eu",
      }),
    });
    return { stored: res.ok };
  } catch (err) {
    console.error("[audomate lead] supabase error", err);
    return { stored: false };
  }
}

export async function POST(req: Request) {
  let body: LeadPayload;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "invalid json" }, { status: 400 });
  }

  const lead = {
    name: (body.name || "").trim().slice(0, 200),
    email: (body.email || "").trim().slice(0, 200),
    company: (body.company || "").trim().slice(0, 200),
    message: (body.message || "").trim().slice(0, 4000),
    frameworks: Array.isArray(body.frameworks) ? body.frameworks.slice(0, 20).map(String) : [],
  };

  if (!lead.name || !isEmail(lead.email)) {
    return NextResponse.json({ error: "name and a valid email are required" }, { status: 400 });
  }

  // Email notification is the primary delivery; Supabase is an optional record.
  const [email, store] = await Promise.all([sendEmail(lead), storeSupabase(lead)]);

  if (!email.sent && !store.stored) {
    // Nothing was delivered anywhere — log so the lead isn't silently lost.
    console.log("[audomate lead] (undelivered)", { ...lead, reason: email.reason });
  }

  return NextResponse.json({ ok: true, emailed: email.sent, stored: store.stored });
}
