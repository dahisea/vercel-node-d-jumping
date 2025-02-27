
export default function handler(r, s) {
  if (r.method !== 'GET') {
    return s.status(405).send('Method Not Allowed');
  }
  
  const u = r.url;
  const x = ["https://cdn-1-mod-ugf.zh-cn.eu.org", "https://cdn-r1-mod-ugf.zh-cn.eu.org", "https://cdn-r2-mod-ugf.zh-cn.eu.org"];
  const y = ["https://gfork.dahi.icu/en", "https://gfork.dahi.icu/ja"];
  const p = u === '/' || u === '';
  const q = u.startsWith('/scripts/');
  const t = p || !q ? y[Math.floor(Math.random() * y.length)] : x[Math.floor(Math.random() * x.length)] + u;
  s.redirect(302, t);
}
