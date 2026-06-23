import { NextRequest, NextResponse } from 'next/server'

  export function middleware(request: NextRequest) {
    const hostname = request.headers.get('host') || ''
    const isBlogs = hostname.startsWith('blogs.')

    if (isBlogs && !request.nextUrl.pathname.startsWith('/blogs')) {
      const url = request.nextUrl.clone()
      url.pathname = url.pathname === '/' ? '/blogs' : `/blogs${url.pathname}`
      return NextResponse.rewrite(url)
    }
  }

  export const config = {
    matcher: ['/((?!_next|api|favicon|.*\\..*).*)',],
  }
