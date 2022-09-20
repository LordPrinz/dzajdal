import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
	const token = await getToken({ req, secret: process.env.JWT_SECRET });

	const { pathname } = req.nextUrl;

	// if (pathname.startsWith("/login")) {
	// 	if (token) {
	// 		return NextResponse.redirect(new URL("/", req.url));
	// 	}
	// }

	// if (!pathname.startsWith("/login") && !token) {
	// 	return NextResponse.rewrite(new URL("/login", req.url));
	// }
}
