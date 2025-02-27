
export default function handler(r, s) {
  const q = r.query, u = r.url;
  const a = ["https://cdn-1-mod-ugf.zh-cn.eu.org", "https://cdn-r1-mod-ugf.zh-cn.eu.org", "https://cdn-r2-mod-ugf.zh-cn.eu.org"];
  const b = ["https://gfork.dahi.icu/en", "https://gfork.dahi.icu/ja"];
  const c = u === '/' || u === '';
  const d = u.startsWith('/scripts/');
  let t = c || !d ? b[Math.floor(Math.random() * b.length)] : a[Math.floor(Math.random() * a.length)] + u;
  if (Object.keys(q).length > 0) t += '?' + new URLSearchParams(q).toString();
  s.redirect(302, t);
}
