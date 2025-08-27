import bcrypt from "bcrypt"
import { NextResponse } from "next/server"
import { unknown } from "zod";

export const hashPassword = async (password: string) => {
    try{
        return await bcrypt.hash( password, 10);
        
    } catch (error) {
        throw new Error("failed to connect")
    }
}

export const verifyPassword = async ( hashedPassword: string, password: string ) => {
    try {

        const veri = await bcrypt.compare(hashedPassword, password);
        return veri;

    } catch (error) {
        return NextResponse.json({
            message: "Internal server error"
        }, { status:500 })
    }
}
