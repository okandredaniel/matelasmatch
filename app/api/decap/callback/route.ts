import { cookies } from 'next/headers';

export const runtime = 'nodejs';

export async function GET(request: Request) {
  const url = new URL(request.url);
  const code = url.searchParams.get('code') || '';
  const state = url.searchParams.get('state') || '';
  const jar = await cookies();
  const saved = jar.get('oauth_state')?.value || '';
  if (!code || !state || state !== saved) {
    const info = { ok: false, reason: 'invalid_state', code, state, saved };
    const body = `<!DOCTYPE html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Decap OAuth Debug</title><style>body{font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Inter,Arial,sans-serif;padding:24px;max-width:880px;margin:0 auto;background:#0b1020;color:#e7ecf3}h1{font-size:18px;margin:0 0 12px}pre{background:#0f172a;padding:16px;border-radius:12px;overflow:auto}button,a{display:inline-flex;align-items:center;gap:8px;margin-right:12px;margin-top:12px;padding:10px 14px;border-radius:10px;border:1px solid #334155;background:#0b1224;color:#e7ecf3;text-decoration:none}button:hover,a:hover{background:#101935}</style></head><body><h1>Decap OAuth Debug</h1><pre>${JSON.stringify(
      info,
      null,
      2
    )}</pre><a href="/admin">Voltar ao Admin</a></body></html>`;
    return new Response(body, {
      headers: { 'Content-Type': 'text/html; charset=utf-8' },
    });
  }

  const redirectUri = `${url.origin}/api/decap/callback`;
  const r = await fetch('https://github.com/login/oauth/access_token', {
    method: 'POST',
    headers: { Accept: 'application/json' },
    body: new URLSearchParams({
      client_id: process.env.GITHUB_CLIENT_ID || '',
      client_secret: process.env.GITHUB_CLIENT_SECRET || '',
      code,
      redirect_uri: redirectUri,
      state,
    }),
  });
  const data = await r.json();
  const token = data?.access_token || '';
  const info = {
    ok: Boolean(token),
    codePresent: Boolean(code),
    stateMatches: state === saved,
    tokenPreview: token ? token.slice(0, 6) + '…' : null,
    raw: data,
  };
  const msgOk = `authorization:github:success:${JSON.stringify({ token })}`;
  const msgErr = `authorization:github:error:${JSON.stringify({
    message: 'no_token',
    data,
  })}`;
  const body = `<!DOCTYPE html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Decap OAuth Debug</title><style>body{font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Inter,Arial,sans-serif;padding:24px;max-width:880px;margin:0 auto;background:#0b1020;color:#e7ecf3}h1{font-size:18px;margin:0 0 12px}pre{background:#0f172a;padding:16px;border-radius:12px;overflow:auto}button,a{display:inline-flex;align-items:center;gap:8px;margin-right:12px;margin-top:12px;padding:10px 14px;border-radius:10px;border:1px solid #334155;background:#0b1224;color:#e7ecf3;text-decoration:none}button:hover,a:hover{background:#101935}small{opacity:.7}</style></head><body><h1>Decap OAuth Debug</h1><pre>${JSON.stringify(
    info,
    null,
    2
  )}</pre><div><button id="post">Enviar token ao CMS</button><button id="copy">Copiar token</button><a href="/admin">Abrir Admin</a></div><pre id="out"></pre><script>const out=document.getElementById('out');function log(){out.textContent=[...arguments].map(x=>typeof x==='string'?x:JSON.stringify(x)).join(' ')+"\\n"+out.textContent}const ok=${JSON.stringify(
    msgOk
  )};const err=${JSON.stringify(msgErr)};const token=${JSON.stringify(
    token
  )};document.getElementById('post').onclick=()=>{const m=token?ok:err;log('postMessage -> opener',m.slice(0,120)+'…');try{window.opener&&window.opener.postMessage(m,'*')}catch(e){log('postMessage error',String(e))}};document.getElementById('copy').onclick=async()=>{try{await navigator.clipboard.writeText(token||'');log('copied')}catch(e){log('copy-error',String(e))}}</script></body></html>`;
  return new Response(body, {
    headers: { 'Content-Type': 'text/html; charset=utf-8' },
  });
}
