import { NextResponse } from "next/server";

export default function middleware(request){
   console.log(request);
   return NextResponse.redirect(new URL("/news", request.url));
}

export const config={
    matcher: ["/news/:path*"]
}