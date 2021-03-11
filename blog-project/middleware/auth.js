export default function(ctx) {
    console.log('[Middleware] Running auth.js...');
    if (!ctx.store.getters.isAuthenticated) {
        ctx.redirect('/admin/auth');
    }
};
