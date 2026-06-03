import { NextRequest, NextResponse } from 'next/server'

  export function middleware(request: NextRequest) {
    const hostname = request.headers.get('host') || ''
    const isBlogs = hostname.startsWith('blogs.')

    if (isBlogs) {
      const url = request.nextUrl.clone()
      const path = url.pathname === '/' ? '/blogs' : `/blogs${url.pathname}`
      url.pathname = path
      return NextResponse.rewrite(url)
    }
  }

  export const config = {
    matcher: ['/((?!_next|api|favicon).*)'],
  }