import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import prisma from "./libs/db";
import { PrismaAdapter } from "@auth/prisma-adapter";

export const {
    handlers,
    signIn,
    signOut,
    auth
} = NextAuth({
    adapter: PrismaAdapter(prisma),
    providers: [
        Credentials({
            name: "credentials",
            credentials: {
                email: { label: "email", type: "email" },
                password: { label: "password", type: "password" },
            },
            authorize: async (credentials): Promise<any> => {

                if(!credentials.email || !credentials.password) {
                    throw new Error("Invalid Credentials");
                }
                
                const user = await prisma.user.findUnique({
                    where: {
                        email: credentials.email as string
                    }
                });

                if(!user || !user.password) {
                    throw new Error("Invalid Credentials");
                };

                const isCorrectPassword = await bcrypt.compare(credentials?.password as string, user.password);

                if(!isCorrectPassword) {
                    throw new Error("Invalid Credentials");
                };
                
                return user;

            }
        })
    ],
    debug: process.env.NODE_ENV === "development",
    session: {
        strategy: "jwt"
    },
    secret: process.env.AUTH_SECRET,
    pages: {
        signIn: `${process.env.NEXT_PUBLIC_URL}/login`
    },
});