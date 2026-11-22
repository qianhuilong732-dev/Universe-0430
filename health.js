export async function onRequestGet() {
  return Response.json({ ok: true, app: 'yu-universe', message: '禹宙星海寄願所 API scaffold is online' });
}
