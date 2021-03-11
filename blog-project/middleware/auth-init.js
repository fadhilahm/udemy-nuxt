export default function(ctx) {
    console.log(`[Middleware] Running auth-init.js on the ${process.client ? 'client': 'server'}`);
    ctx.store.dispatch('initAuth', ctx.req);
};
