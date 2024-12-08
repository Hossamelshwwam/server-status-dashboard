// types/next-auth.d.ts
import NextAuth, { DefaultSession } from "next-auth";
declare module "next-auth" {
  interface User {
    username: string;

    email: string;
  }

  interface Session {
    user: {
      username: string;
      email: string;
    } & DefaultSession["user"];
  }

  interface JWT {
    email: string;
    username: string;
  }
}
