import { cookies } from 'next/headers';

export const runtime = 'nodejs';

function html(body: string) {
  return new Response(body, {
    headers: { 'Content-Type': 'text/html; charset=utf-8' },
  });
}

export async function GET(request: Request) {
  const url = new URL(request.url);
  const code = url.searchParams.get('code') || '';
  const state = url.searchParams.get('state') || '';
  const jar = await cookies();
  const saved = jar.get('oauth_state')?.value || '';

  if (!code || !state || state !== saved) {
    return html('<!doctype html><script>window.close()</script>');
  }

  const r = await fetch('https://github.com/login/oauth/access_token', {
    method: 'POST',
    headers: { Accept: 'application/json' },
    body: new URLSearchParams({
      client_id: process.env.GITHUB_CLIENT_ID || '',
      client_secret: process.env.GITHUB_CLIENT_SECRET || '',
      code,
      redirect_uri: `${url.origin}/api/decap/callback`,
      state,
    }),
  });

  const data = await r.json();
  const token = data?.access_token || '';
  const msg = token
    ? `authorization:github:success:${JSON.stringify({ token })}`
    : `authorization:github:error:${JSON.stringify({
        message: 'no_token',
        data,
      })}`;

  return html(
    `<script>try{window.opener&&window.opener.postMessage(${JSON.stringify(
      msg
    )}, '*')}finally{window.close()}</script>`
  );
}
