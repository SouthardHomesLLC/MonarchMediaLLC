// src/middleware.ts
import { defineMiddleware } from 'astro:middleware';

export const onRequest = defineMiddleware(async (context, next) => {
    const currentPath = context.url.pathname;

    const isAdminPage = currentPath === '/admin' || currentPath.startsWith('/admin/');
    const isAdminApi = currentPath === '/api/admin' || currentPath.startsWith('/api/admin/');
    const isLoginPage = currentPath === '/admin/login';

    //Public pages do not require authentication.
    if (!isAdminPage && !isAdminApi) {
        context.locals.isLoggedIn = false;

        return next();
    }

    const hasToken = context.cookies.has('admin_token');

    context.locals.isLoggedIn = hasToken;

    // Prevent authenticated users from reopening login.
    if (isLoginPage && hasToken) {
        return context.redirect('/admin/dashboard');
    }

    //Allow unauthenticated users to access login.
    if (isLoginPage) {
        return next();
    }

    //API clients should receive JSON, not a redirect.
    if (isAdminApi && !hasToken) {
        return new Response(
            JSON.stringify({
                error: 'Unauthorized'
            }),
            {
                status: 401,
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        );
    }

    //Browser page requests should go to login.
    if (isAdminPage && !hasToken) {
        return context.redirect('/admin/login');
    }

    return next();
});
