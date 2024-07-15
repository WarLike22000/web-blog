import { auth } from "@/auth";
import { NextRequest, NextResponse } from "next/server";

export default auth((req: NextRequest | any) => {

    if(!req.auth && req.nextUrl.pathname.startsWith('/api')) {
        return NextResponse.json({
            message: "Unauthorized"
        });
    };
    // if(!req.auth && req.nextUrl.pathname !== "/login" && req.nextUrl.pathname !== "/register") {
    //     const newUrl = new URL("/login", req.nextUrl.origin);
    //     return Response.redirect(newUrl);
    // };

    return NextResponse.next();
    
});

export const config = {
    matcher: [
        "/((?!api|_next/static|_next/image|favicon.ico).*)",
        // '/api/:path*',
        // "/blogs",
        // "/api",
        // "/api/blog",
        // "/api/blog/:path*",

        // "/",
        // "/((?!.+.[w]+$|_next).*)",
        // "/(api|trpc)(.*)",
        // "/(en|es)/:path*",
        // "/((?!_next/static|_next/image|favicon.ico).*)",
    ],
}