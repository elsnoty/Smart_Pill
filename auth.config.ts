import { NextAuthConfig } from "next-auth";

export const authConfig: NextAuthConfig = {
  pages: {
    signIn: "/login",
  },
  providers: [],
  callbacks: {
    authorized: ({ auth, request: { nextUrl } }) => {
      const isLoggedIn = !!auth?.user;
      const isOnLogin = nextUrl.pathname.startsWith("/login");
      const isOnRegister = nextUrl.pathname.startsWith("/register");
      const isOnDashboard = nextUrl.pathname.startsWith("/dashboard");
      const isOnForgotPassowrd =
        nextUrl.pathname.startsWith("/forgot-password");

      if (isLoggedIn && (isOnLogin || isOnRegister)) {
        return Response.redirect(new URL("/dashboard", nextUrl));
      }

      if (isOnRegister || isOnLogin || isOnForgotPassowrd) {
        return true;
      }

      if (isOnDashboard) {
        if (isLoggedIn) return true;
        return false;
      }

      if (isLoggedIn) {
        return Response.redirect(new URL("/dashboard", nextUrl));
      }
    },
  },
};
