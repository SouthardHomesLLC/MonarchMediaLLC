import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware((context, next) => {
    //Read the ultra-secure HttpOnly cookie safely on the server
    const hasToken = context.cookies.has("admin_token");

    //Assign the boolean to Astro locals so ANY page or component can read it
    context.locals.isLoggedIn = hasToken;

    //Automated Guard Rail: Prevent logged-in users from seeing the login page again
    if (context.url.pathname === '/admin/login' && hasToken) {
        return context.redirect('/admin/dashboard');
    }

    //Automated Guard Rail: Protect administrative pages from unauthenticated eyes
    if (context.url.pathname.startsWith('/admin') && context.url.pathname !== '/admin/login' && !hasToken) {
        return context.redirect('/admin/login');
    }

    //Continue to the requested page smoothly
    return next();
});