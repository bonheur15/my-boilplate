import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"
import prisma from "@/lib/prisma";


export const NextAuthConfig = {
    adapter: PrismaAdapter(prisma),
    providers: [GitHub],
    pages: {
        signIn: "/auth",
    },
}

export const { signIn, signOut, auth, handlers } = NextAuth(NextAuthConfig)