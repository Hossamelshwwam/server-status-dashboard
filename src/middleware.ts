import { NextResponse, type NextRequest } from "next/server";
import { withAuth } from "next-auth/middleware";
import { getToken } from "next-auth/jwt";
import { JWT } from "next-auth";

export default withAuth(
  async function middleware(request: NextRequest) {
    const isAuth = (await getToken({ req: request })) as JWT | null;

    const pathname = request.nextUrl.pathname;

    // Protected Routes
    const ProtectedRoutes = ["/dashboard"];
    const IsProtectedRoutes = ProtectedRoutes.some((route) =>
      pathname.startsWith(route)
    );

    // Dashboard Routes
    const dashboardRoute = "/dashboard";
    const isDashboardRoute = pathname === dashboardRoute;

    // Authenticated Routes
    const AuthRoute = "/auth";
    const isAuthenticated = pathname.startsWith(AuthRoute);

    // Defaul Route
    const DefaultRoute = "/";
    const isDefaulRoute = pathname === DefaultRoute;

    if (isDefaulRoute) {
      return NextResponse.redirect(new URL("/auth/sign-in", request.url));
    }

    if (IsProtectedRoutes && !isAuth) {
      // Work Well Protected
      return NextResponse.redirect(new URL("/auth/sign-in", request.url));
    }

    // Work Well Authenticated
    if (isAuthenticated && isAuth) {
      return NextResponse.redirect(
        new URL("/dashboard/servers-status", request.url)
      );
    }

    // Work Well Dashboard
    if (isDashboardRoute && isAuth) {
      return NextResponse.redirect(
        new URL("/dashboard/servers-status", request.url)
      );
    }
  },
  {
    callbacks: {
      authorized(params) {
        return true;
      },
    },
  }
);

export const config = {
  matcher: ["/", "/dashboard/:path*", "/dashboard", "/auth/:path*"],
};
