import { Prisma, PrismaClient } from "@/app/generated/prisma";
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

const client = new PrismaClient();
type  Details = {
    email: string,
    password: string
}

const handler = NextAuth({  
providers: [
  CredentialsProvider({
    name: "Signin",
    credentials: {
      email: { label: "Email", type: "text", placeholder: "m@gmail.com" },
      password: { label: "Password", type: "password" }
    },
    async authorize(credentials) {

        if(!credentials?.email || !credentials?.password){
            return null;
        }
    
        const  findUser = await client.user.findUnique({
            where: {email: credentials?.email}
        })

        if(!findUser) {
            return null
        }

        const isVaild = bcrypt.compare(
            credentials?.password,
            findUser.password
        )

        if(!isVaild){
            return null;
        }

        return {
            id: findUser.id.toString(),
            email: findUser.email,
            username: findUser.username
        }

    }
  })
],

secret: process.env.NEXTAUTH_SECRET,

pages: {
    signIn: "/auth/signin"
}

})

export { handler as POST, handler as GET}
