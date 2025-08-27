import { PrismaClient } from "@/app/generated/prisma";
import { hashPassword, verifyPassword } from "@/app/lib/auth";
import { createToken } from "@/app/lib/jwt";
import { NextRequest, NextResponse } from "next/server";
import z, { safeParse } from "zod";

const SigninSchema = z.object({
    email: z.string().email(),
    password: z.string()
}) 

const client = new PrismaClient();

export async function POST( req: NextRequest) {
    const body = await req.json();

    const { email, password } = body;
    const bodyParse = SigninSchema.safeParse(body);

    if(!bodyParse.success)
        return NextResponse.json({
    message: "Invaild inputs"
    }, { status: 400 })

    try {
        
        const findUser = await client.user.findUnique({
            where: { email: email },
        })
        
        if(!findUser) return NextResponse.json({
            message: "User not found"
        }, { status: 404 });

        const comparePassword  = await verifyPassword(password, findUser.password);
        if(!comparePassword) return NextResponse.json({
            message: "Incorrect credentials"
        }, {status: 401})

        const token = createToken({id: findUser.id, email: findUser.email});

        return NextResponse.json({
            message: "Logged in successfully",
            token: token
        }, { status: 200 });

    } catch (error) {
        return NextResponse.json({
            message: "Internal server error"
        }, { status: 500 })
    }
}
