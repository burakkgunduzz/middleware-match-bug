export default function middleware (){
    console.log("hello from middleware")
}
// below line should match but it does not
export const config = {matcher: ["/product/:path"]}

// below line works
// export const config = {matcher: ["/product/:path*"]}