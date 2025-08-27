import jwt from "jsonwebtoken";
import { NextResponse, NextRequest } from "next/server";

const secret = process.env.JWT_SECRET as string;

export const createToken = (payload: object) => {

    try{
    const token = jwt.sign(payload, secret, { expiresIn: "1d" });

        if(!token) return NextResponse.json({
            message: "Unable to create token"
        }, {status: 400 })

        return token
    } catch (error) {
        return NextResponse.json({
            message: "Internal server error"
        }, { status: 500 })
    }
}

export const verifyToken = (token: string) => {

    try{
        const verify = jwt.verify(token, secret);

        if(!verify) return NextResponse.json({
            message: "Incorrect credentials"
        })

    } catch (error) {
        return NextResponse.json({
            message: "Internal server error"
        }, { status: 500 })
    }
}
