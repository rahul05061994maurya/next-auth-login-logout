import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
export const authOption: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),

    CredentialsProvider({
      name: "your-provider",
      id: "first-provider",
      // @ts-ignore
      async authorize(credentials) {
        console.log("credentials", credentials);
        // in this block you will get your value
        //  and here you make api call
        const user = { email: "demo", name: "rahul" };
        // return user;
        if (user) return user;
        // if (user) throw new Error("this is error");
      },
    }),
  ],
};
