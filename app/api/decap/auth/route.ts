import { NextResponse } from 'next/server';

export const runtime = 'nodejs';

export async function GET(request: Request) {
  const url = new URL(request.url);
  const state = crypto.randomUUID();
  const redirectUri = `${url.origin}/api/decap/callback`;

  const auth = new URL('https://github.com/login/oauth/authorize');
  auth.searchParams.set('client_id', process.env.GITHUB_CLIENT_ID || '');
  auth.searchParams.set('redirect_uri', redirectUri);
  auth.searchParams.set('scope', 'repo,user');
  auth.searchParams.set('state', state);

  const res = NextResponse.redirect(auth.toString(), 302);
  res.cookies.set('oauth_state', state, {
    httpOnly: true,
    sameSite: 'lax',
    path: '/',
    secure: true,
    maxAge: 300,
  });
  return res;
}
