import { NextResponse } from 'next/server'
import { auth } from './lib/auth'
import { headers } from 'next/headers'
 
// This function can be marked `async` if using `await` inside
export async function proxy(request) {
//   return NextResponse.redirect(new URL('/home', request.url))
// console.log("massege from proxy")
    const session = await auth.api.getSession({
        headers: await headers(),
    })
    if (!session) {
        return NextResponse.redirect(new URL('/signin', request.url))
    }
}
 
export const config = {
  matcher: ["/profile", "/all-products/:path"],
}