import { PrismaClient } from "@/app/generated/prisma";
import { NextRequest, NextResponse } from "next/server";
import z from "zod";
import dotenv from "dotenv";
import { createToken } from "@/app/lib/jwt";
import { hashPassword } from "@/app/lib/auth";

dotenv.config({ path: ".env" });

const secret = process.env.JWT_SECRET as unknown as string;

const client = new PrismaClient();

const UserSchema = z.object({
    username: z.string().min(6, {message: "min 3 characters"}),
    email: z.string().email(),
    password: z.string().min(6,({message: "min 6 length"}))
})

export async function POST(req: NextRequest) {
    const body = await req.json();

    const { username, email, password} = body;
    const bodyParse = UserSchema.safeParse(body);

    if(!bodyParse.success)
        return NextResponse.json({
    message: "Invaild inputs"}, {status: 400});

    try {

        const findUser = await client.user.findUnique({
            where: {email}
        });

        if(findUser) return NextResponse.json({
            message: "User already exists"
        }, {status: 409})

       const hashedPassword = await hashPassword(password);

        const newUser = await client.user.create({
            data:{
                username: username,
                email: email,
                password: hashedPassword
            }
        })

        if(!newUser) return NextResponse.json({
            message: "unable to create user"
        }, { status: 401 })

        const token = createToken({ id: newUser.id, email: newUser.email});

        return NextResponse.json({
            message: "User created successfully",
            token: token
        }, { status: 201 })

    } catch (error) {
        return NextResponse.json({
            message: "Internal server error"
        }, {status: 500})
    }
}
