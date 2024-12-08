import { DefaultSession, DefaultUser } from "next-auth";

export interface Session {
  data: CustomSession;
  status: "authenticated" | "unauthenticated" | "loading";
}


export interface User extends DefaultUser {
  username: string;
  password: string;
}

// Extend the JWT interface to include the custom user.
declare module "next-auth/jwt" {
  interface JWT {
    user?: User;
  }
}

export interface CustomSession extends DefaultSession {
  user?: User;
}
