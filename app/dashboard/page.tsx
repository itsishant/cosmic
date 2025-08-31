import { GeistSans } from "geist/font/sans"
import { Eye } from "lucide-react"
import { Header } from "./header"
import { Body } from "./body"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"


export default async function Home () {

    const session = await getServerSession();

    if(!session) {
        redirect("/auth/signin")
    }

    return (
        <div >
            <Header />
            <Body />
        </div>
    )
}
