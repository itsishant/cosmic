"use client"

import { GeistSans } from "geist/font/sans"
import { Eye } from "lucide-react"
import { Header } from "./header"
import { Body } from "./body"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"

export default function Home () {

    const session = getServerSession();

    if(!session) {
        redirect("/auth/signin")
    }


    return (
        <div className="">
            <Header />
            <Body />
        </div>
    )
}
