import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Basic-auth curtain for the unlinked Trust Center staging area.
// Credentials are intentionally simple (staging gate, not a security control).
// Remove this file (or the /trust matcher) at Trust Center launch.
const USER = 'Trust'
const PASS = 'Trust'

export function middleware(req: NextRequest) {
  const auth = req.headers.get('authorization')
  if (auth) {
    const [scheme, encoded] = auth.split(' ')
    if (scheme === 'Basic' && encoded) {
      try {
        const [u, p] = atob(encoded).split(':')
        if (u === USER && p === PASS) return NextResponse.next()
      } catch {
        // fall through to 401
      }
    }
  }
  return new NextResponse('Authentication required', {
    status: 401,
    headers: { 'WWW-Authenticate': 'Basic realm="Audomate Trust Center"' },
  })
}

export const config = {
  matcher: ['/trust', '/trust/:path*'],
}

