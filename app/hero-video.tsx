"use client";

import { useEffect, useRef } from "react";

/**
 * Mobile autoplay is unreliable unless every known requirement is satisfied
 * at once: `muted` set as a real DOM property (not just the JSX attribute —
 * React doesn't always reflect it before first paint), `playsinline` (plus
 * the legacy `webkit-playsinline` / Tencent `x5-*` variants some in-app
 * browsers still check), and an explicit `.play()` call with a retry loop —
 * iOS can silently reject the initial attempt (low-power mode, a slow
 * connection still fetching the source, or a tab that wasn't foregrounded
 * yet) without firing any error event to react to.
 */
export function HeroVideo() {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;

    let cancelled = false;

    const attemptPlay = () => {
      if (cancelled) return;
      const p = video.play();
      if (p !== undefined) p.catch(() => {});
    };

    attemptPlay();

    // Retry on the events that most often precede a successful play on mobile.
    video.addEventListener("loadedmetadata", attemptPlay);
    video.addEventListener("canplay", attemptPlay);
    video.addEventListener("canplaythrough", attemptPlay);

    const onVisible = () => {
      if (document.visibilityState === "visible") attemptPlay();
    };
    document.addEventListener("visibilitychange", onVisible);
    // Safari's back-forward cache restores the page without re-running effects;
    // and returning from the app switcher fires a window focus, not visibilitychange.
    window.addEventListener("pageshow", attemptPlay);
    window.addEventListener("focus", attemptPlay);

    // Last-resort fallback: some mobile browsers (data-saver mode, certain
    // in-app webviews) refuse programmatic autoplay entirely and only allow
    // playback triggered by a genuine user gesture. Bind once, play, unbind.
    const onFirstInteraction = () => {
      attemptPlay();
      window.removeEventListener("touchstart", onFirstInteraction);
      window.removeEventListener("click", onFirstInteraction);
      window.removeEventListener("scroll", onFirstInteraction);
    };
    window.addEventListener("touchstart", onFirstInteraction, { passive: true, once: true });
    window.addEventListener("click", onFirstInteraction, { once: true });
    window.addEventListener("scroll", onFirstInteraction, { passive: true, once: true });

    return () => {
      cancelled = true;
      video.removeEventListener("loadedmetadata", attemptPlay);
      video.removeEventListener("canplay", attemptPlay);
      video.removeEventListener("canplaythrough", attemptPlay);
      document.removeEventListener("visibilitychange", onVisible);
      window.removeEventListener("pageshow", attemptPlay);
      window.removeEventListener("focus", attemptPlay);
      window.removeEventListener("touchstart", onFirstInteraction);
      window.removeEventListener("click", onFirstInteraction);
      window.removeEventListener("scroll", onFirstInteraction);
    };
  }, []);

  return (
    <video
      ref={ref}
      className="hero-video"
      autoPlay
      muted
      loop
      playsInline
      poster="/bg-poster.jpg"
      preload="auto"
      disablePictureInPicture
      aria-hidden
      // legacy / in-app-browser attributes with no React prop equivalent
      {...{
        "webkit-playsinline": "true",
        "x5-playsinline": "true",
        "x5-video-player-type": "h5",
        "x5-video-player-fullscreen": "false",
      }}
    >
      <source src="/bg.webm" type="video/webm" />
      <source src="/bg.mp4" type="video/mp4" />
    </video>
  );
}
