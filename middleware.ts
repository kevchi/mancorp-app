import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs';

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req, res });

  // Enhanced security headers
  const nonce = Buffer.from(crypto.randomUUID()).toString('base64');

  const cspHeader = `
    default-src 'self';
    script-src 'self' 'unsafe-eval' 'unsafe-inline' https: http:;
    style-src 'self' 'unsafe-inline';
    img-src 'self' data: blob: https:;
    font-src 'self' data:;
    connect-src 'self' https: wss:;
    frame-src 'self';
    media-src 'self';
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    block-all-mixed-content;
    upgrade-insecure-requests;
  `
    .replace(/\s{2,}/g, ' ')
    .trim();

  res.headers.set('Content-Security-Policy', cspHeader);
  res.headers.set('X-Content-Type-Options', 'nosniff');
  res.headers.set('X-Frame-Options', 'DENY');
  res.headers.set('X-XSS-Protection', '1; mode=block');
  res.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  res.headers.set(
    'Permissions-Policy',
    'camera=(), microphone=(), geolocation=(), interest-cohort=()'
  );
  res.headers.set(
    'Strict-Transport-Security',
    'max-age=31536000; includeSubDomains'
  );

  // Refresh session if expired
  const {
    data: { session },
  } = await supabase.auth.getSession();

  // If logged in and accessing root, redirect to appropriate dashboard
  if (session && req.nextUrl.pathname === '/') {
    const userRole = session.user.user_metadata.role;
    return NextResponse.redirect(new URL(`/dashboard/${userRole}`, req.url));
  }

  // Protected routes check
  if (req.nextUrl.pathname.startsWith('/dashboard')) {
    // No session, redirect to login
    if (!session) {
      return NextResponse.redirect(new URL('/', req.url));
    }

    // Get the requested role from the URL
    const requestedRole = req.nextUrl.pathname.split('/')[2]; // e.g., 'customer', 'employee', 'supervisor'
    const userRole = session.user.user_metadata.role;

    // If trying to access wrong role's dashboard, redirect to correct one
    if (requestedRole !== userRole) {
      return NextResponse.redirect(new URL(`/dashboard/${userRole}`, req.url));
    }
  }

  // API route protection
  if (req.nextUrl.pathname.startsWith('/api')) {
    if (!session) {
      return new NextResponse(JSON.stringify({ error: 'Unauthorized' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' },
      });
    }
  }

  return res;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    '/((?!_next/static|_next/image|favicon.ico|public/).*)',
  ],
};
