import { cookies } from 'next/headers';

export const runtime = 'nodejs';

const html = (s: string) =>
  new Response(s, { headers: { 'Content-Type': 'text/html; charset=utf-8' } });

export async function GET(request: Request) {
  const url = new URL(request.url);
  const code = url.searchParams.get('code') || '';
  const state = url.searchParams.get('state') || '';
  const saved = (await cookies()).get('oauth_state')?.value || '';
  if (!code || !state || state !== saved) {
    const msg = `authorization:github:error:${JSON.stringify({
      message: 'invalid_state',
    })}`;
    return html(
      `<script>window.opener&&window.opener.postMessage(${JSON.stringify(
        msg
      )}, '*');window.close();</script>`
    );
  }

  const tokenRes = await fetch('https://github.com/login/oauth/access_token', {
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
  const data = await tokenRes.json();
  if (!data?.access_token) {
    const msg = `authorization:github:error:${JSON.stringify({
      message: 'no_token',
      data,
    })}`;
    return html(
      `<script>window.opener&&window.opener.postMessage(${JSON.stringify(
        msg
      )}, '*');window.close();</script>`
    );
  }

  const ok = `authorization:github:success:${JSON.stringify({
    token: data.access_token,
  })}`;
  return html(
    `<script>window.opener&&window.opener.postMessage(${JSON.stringify(
      ok
    )}, '*');window.close();</script>`
  );
}
