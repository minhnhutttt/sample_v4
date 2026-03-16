import { NextRequest, NextResponse } from 'next/server'

export const config = {
  matcher: ['/', '/:path*'],
}

const normalizeDomain = (domain: string) => {
  return (
    domain
      .trim()
      .toLowerCase()
      .replace(/^https?:\/\//, '')
      .replace(/^www\./, '')
      .split('/')[0]
      .split(':')[0] || ''
  )
}

export const proxy = (req: NextRequest) => {
  const host = req.headers.get('host') || ''
  const envDomain =
    process.env.CUSTOM_DOMAIN || process.env.NEXT_PUBLIC_SITE_URL || ''
  const targetDomain = normalizeDomain(envDomain)
  const requestDomain = normalizeDomain(host)

  if (targetDomain && requestDomain !== targetDomain) {
    return new NextResponse(
      JSON.stringify({ success: false, message: 'Forbidden' }),
      { status: 403, headers: { 'content-type': 'application/json' } }
    )
  }

  if (process.env.BASIC_AUTH_ENABLED === 'true') {
    const url = req.nextUrl
    const basicAuth = req.headers.get('authorization')

    const username = process.env.BASIC_AUTH_NAME
    const password = process.env.BASIC_AUTH_PASSWORD

    if (basicAuth) {
      const authValue = basicAuth.split(' ')[1] ?? ''
      const [user, pwd] = atob(authValue).split(':')

      if (user == username && pwd == password) {
        return NextResponse.next()
      }
    }

    url.pathname = '/api/basicAuth'
    return NextResponse.rewrite(url)
  }

  return NextResponse.next()
}
