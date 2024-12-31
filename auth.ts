import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { authConfig } from "./auth.config";
import { getUser } from "./lib/queries";
import { Role } from "./lib/definitions";
import { signInValidation } from "./lib/zod";
declare module "next-auth" {
  interface User {
    id?: string;
    email?: string | null;
    name?: string | null;
    role: Role;
    token: string;
  }

  interface Session {
    user?: {
      id?: string;
      email: string;
      name?: string;
      role: Role;
    };
  }
}
export const { handlers, auth, signIn, signOut } = NextAuth({
  ...authConfig,
  debug: true,
  pages: { signIn: "/login" },
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        const parsedCredentials = signInValidation.safeParse(credentials);
        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data;
          const user = await getUser({ email, password });

          if (!user) return null;

          console.log(user);
          return {
            id: user.id,
            name: user.userName,
            email: user.email,
            role: user.role,
            token: user.token,
          };
        }

        return null;
      },
    }),
  ],
  callbacks: {
    jwt: async ({ account, token, user }) => {
      if (user && account?.provider === "credentials") {
        token.role = user.role;
        token.accessToken = user.token;
        console.log(token);
      }
      return token;
    },
    session: ({ session, token }) => {
      if (token.role && token.sub) {
        session.sessionToken = token.accessToken as string;
        session.user.id = token.sub;
        session.user.role = token.role as Role;
      }
      return session;
    },
  },
});
