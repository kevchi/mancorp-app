import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'

export async function middleware(req: NextRequest) {
  const res = NextResponse.next()
  const supabase = createMiddlewareClient({ req, res })

  // Enhanced security headers
  const nonce = Buffer.from(crypto.randomUUID()).toString('base64')

  const cspHeader = `
    default-src 'self';
    script-src 'self' 'nonce-${nonce}' 'strict-dynamic';
    style-src 'self' 'unsafe-inline';
    img-src 'self' data: https:;
    font-src 'self';
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    block-all-mixed-content;
    upgrade-insecure-requests;
  `.replace(/\s{2,}/g, ' ').trim()

  res.headers.set('Content-Security-Policy', cspHeader)
  res.headers.set('X-Content-Type-Options', 'nosniff')
  res.headers.set('X-Frame-Options', 'DENY')
  res.headers.set('X-XSS-Protection', '1; mode=block')
  res.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')
  res.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=(), interest-cohort=()')
  res.headers.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains')

  // Refresh session if expired
  const { data: { session } } = await supabase.auth.getSession()

  // Protected routes pattern
  const protectedRoutes = [
    '/dashboard/customer',
    '/dashboard/employee',
    '/dashboard/supervisor'
  ]

  // Check if the route is protected
  const isProtectedRoute = protectedRoutes.some(route => 
    req.nextUrl.pathname.startsWith(route)
  )

  if (isProtectedRoute && !session) {
    return NextResponse.redirect(new URL('/', req.url))
  }

  // Role-based authorization
  if (session) {
    const userRole = session.user.user_metadata.role

    if (req.nextUrl.pathname.startsWith('/dashboard/customer') && userRole !== 'customer') {
      return NextResponse.redirect(new URL('/', req.url))
    }

    if (req.nextUrl.pathname.startsWith('/dashboard/employee') && userRole !== 'employee') {
      return NextResponse.redirect(new URL('/', req.url))
    }

    if (req.nextUrl.pathname.startsWith('/dashboard/supervisor') && userRole !== 'supervisor') {
      return NextResponse.redirect(new URL('/', req.url))
    }
  }

  return res
}

export const config = {
  matcher: [
    '/dashboard/:path*',
    '/api/:path*'
  ]
}