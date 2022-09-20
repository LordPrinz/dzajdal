import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
	const token = await getToken({ req, secret: process.env.JWT_SECRET });
}
