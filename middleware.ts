import { authMiddleware } from "@clerk/nextjs";

 
// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/references/nextjs/auth-middleware for more information about configuring your Middleware
export default authMiddleware({
  publicRoutes: ["/","/about","/blog","/contact","/crochet","/knitting","/payment","/product","/product/(.*)","/sewing", "/api/products", "/api/products/(.*)", "/api/blogpost", "/api/contact"],
  apiRoutes: ["/api/products", "/api/products/(.*)", "/api/blogpost", "/api/contact"]
});
 
export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
 