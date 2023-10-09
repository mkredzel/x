import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: ["/api/trpc/posts.getAll", "/api/trpc/posts.getPostByUserId,profile.getUserByUsername", "/post/(.*)", "/@(.*)"],
});

export const config = {
  matcher: "/((?!_next/image|_next/static|favicon.ico).*)",
};
