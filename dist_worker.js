export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const path = url.pathname;

    // Routes affiliate /go/slug
    if (path === '/go/gambiva' || path === '/go/gambiva/') return Response.redirect('https://m-traff.net/HYcs2BV5?sub_id_1=gambiva', 302);
    if (path === '/go/wildzy' || path === '/go/wildzy/') return Response.redirect('https://m-traff.net/HYcs2BV5?sub_id_1=wildzy', 302);
    if (path === '/go/upsin-me' || path === '/go/upsin-me/') return Response.redirect('https://m-traff.net/HYcs2BV5?sub_id_3=upsin', 302);
    if (path === '/go/lizaro' || path === '/go/lizaro/') return Response.redirect('https://m-traff.net/HYcs2BV5?sub_id_1=lizaro', 302);
    if (path === '/go/spinfin' || path === '/go/spinfin/') return Response.redirect('https://m-traff.net/HYcs2BV5?sub_id_1=spinfin', 302);
    if (path === '/go/amonbet' || path === '/go/amonbet/') return Response.redirect('https://m-traff.net/HYcs2BV5?sub_id_1=amonbet', 302);
    if (path === '/go/spinbara' || path === '/go/spinbara/') return Response.redirect('https://m-traff.net/HYcs2BV5?sub_id_1=spinbara', 302);
    if (path === '/go/winning-io' || path === '/go/winning-io/') return Response.redirect('https://m-traff.net/HYcs2BV5?sub_id_1=winning-io', 302);
    if (path === '/go/betsio' || path === '/go/betsio/') return Response.redirect('https://m-traff.net/HYcs2BV5?sub_id_1=betsio', 302);
    if (path === '/go/aphrodite' || path === '/go/aphrodite/') return Response.redirect('https://m-traff.net/HYcs2BV5?sub_id_1=aphrodite', 302);
    if (path === '/go/volerbet' || path === '/go/volerbet/') return Response.redirect('https://m-traff.net/HYcs2BV5?sub_id_1=volerbet', 302);
    if (path === '/go/spingranny' || path === '/go/spingranny/') return Response.redirect('https://m-traff.net/HYcs2BV5?sub_id_1=spingranny', 302);
    if (path === '/go/winocasino' || path === '/go/winocasino/') return Response.redirect('https://m-traff.net/HYcs2BV5?sub_id_1=winocasino', 302);
    if (path === '/go/crownslots' || path === '/go/crownslots/') return Response.redirect('https://m-traff.net/HYcs2BV5?sub_id_1=crownslots', 302);
    if (path === '/go/slotrush' || path === '/go/slotrush/') return Response.redirect('https://m-traff.net/HYcs2BV5?sub_id_1=slotrush', 302);
    if (path === '/go/slott' || path === '/go/slott/') return Response.redirect('https://m-traff.net/HYcs2BV5?sub_id_1=Slott', 302);
    if (path === '/go/madcasino' || path === '/go/madcasino/') return Response.redirect('https://m-traff.net/HYcs2BV5?sub_id_2=madcasino', 302);
    if (path === '/go/kingdom' || path === '/go/kingdom/') return Response.redirect('https://m-traff.net/HYcs2BV5?sub_id_1=kingdom', 302);

    return env.ASSETS.fetch(request);
  }
}
