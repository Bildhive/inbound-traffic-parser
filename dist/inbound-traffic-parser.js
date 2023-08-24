function o(t, e) {
  if (e.host && e.href && e.host.indexOf("google") !== -1) {
    const n = { type: "search", engine: "google" }, r = e.searchParams.get("q");
    return r && (n.query = r), n;
  }
  return !1;
}
const s = [
  o
];
function a(t, e) {
  for (const n of s) {
    const r = n(t, e);
    if (r)
      return r;
  }
  return {
    type: "unknown"
  };
}
const c = {
  parse: a
};
function u(t, e) {
  const n = new URL(t), r = new URL(e);
  return {
    referrer: c.parse(n, r),
    campaign: null
  };
}
export {
  u as parse
};
