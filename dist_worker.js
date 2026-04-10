export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const path = url.pathname;

    // Routes affiliate /go/slug
    if (path === '/go/gambiva' || path === '/go/gambiva/') return Response.redirect('https://m-traff.net/swXXMkfT?sub_id_1=gambiva', 302);
    if (path === '/go/wildzy' || path === '/go/wildzy/') return Response.redirect('https://m-traff.net/swXXMkfT?sub_id_1=wildzy', 302);
    if (path === '/go/upsin-me' || path === '/go/upsin-me/') return Response.redirect('https://m-traff.net/swXXMkfT?sub_id_1=upsinme', 302);
    if (path === '/go/lizaro' || path === '/go/lizaro/') return Response.redirect('https://m-traff.net/swXXMkfT?sub_id_1=lizaro', 302);
    if (path === '/go/spinfin' || path === '/go/spinfin/') return Response.redirect('https://m-traff.net/swXXMkfT?sub_id_1=spinfin', 302);
    if (path === '/go/amonbet' || path === '/go/amonbet/') return Response.redirect('https://m-traff.net/swXXMkfT?sub_id_1=amonbet', 302);
    if (path === '/go/spinbara' || path === '/go/spinbara/') return Response.redirect('https://m-traff.net/swXXMkfT?sub_id_1=spinbara', 302);
    if (path === '/go/winning-io' || path === '/go/winning-io/') return Response.redirect('https://m-traff.net/swXXMkfT?sub_id_1=winningio', 302);
    if (path === '/go/betsio' || path === '/go/betsio/') return Response.redirect('https://m-traff.net/swXXMkfT?sub_id_1=betsio', 302);
    if (path === '/go/aphrodite' || path === '/go/aphrodite/') return Response.redirect('https://m-traff.net/swXXMkfT?sub_id_1=aphrodite', 302);
    if (path === '/go/volerbet' || path === '/go/volerbet/') return Response.redirect('https://m-traff.net/swXXMkfT?sub_id_1=volerbet', 302);
    if (path === '/go/spingranny' || path === '/go/spingranny/') return Response.redirect('https://m-traff.net/swXXMkfT?sub_id_1=spingranny', 302);
    if (path === '/go/winocasino' || path === '/go/winocasino/') return Response.redirect('https://m-traff.net/swXXMkfT?sub_id_1=winocasino', 302);

    return env.ASSETS.fetch(request);
  }
}
