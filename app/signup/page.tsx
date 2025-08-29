"use client"
import { GeistSans } from "geist/font/sans"
import { Button } from "../components/ui/button"
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card"
import { Input } from "../components/ui/input"
import axios from "axios"
import { Label } from "../components/ui/label"
import { useRouter } from "next/navigation";

interface Detail {
    respone: string,
    token: string
}

export default function Signup() {

    const route = useRouter();
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleClick = async () => {

        const response = await axios.post <Detail> ("http://localhost:3000/api/v1/signup", {
            username,
            email,
            password
        })
        const token = response.data.token;
        localStorage.setItem("token", token);

    }

    const routing = () => {
        route.push("/signin")
    }

  return (
    <div className="flex justify-center items-center min-h-screen shadow-2xs shadow-neutral-200">
      <Card className="w-full max-w-[400px] shadow-xl rounded-2xl border space-y-2 border-gray-500">
        <CardHeader>
          <CardTitle className={`${GeistSans.className} tracking-tight text-2xl font-bold text-center text-neutral-300`}>
            Create an account
          </CardTitle>
          <CardDescription className="text-center text-gray-500">
            Sign up with your email and password
          </CardDescription>
        </CardHeader>

        <form className="space-y-6">
          <CardContent className="space-y-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Username</Label>
              <Input
              onChange={(e) => {
                setUsername(e.target.value)
              }}
                id="name"
                type="text"
                placeholder="John Doe"
                required
                className="border-gray-700"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
              onChange={(e) => {
                setEmail(e.target.value)
              }}
                id="email"
                type="email"
                placeholder="m@example.com"
                required
                className="border-gray-700"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input
              onChange={(e) => {
                setPassword(e.target.value)
              }}
                id="password"
                type="password"
                placeholder="✶✶✶✶✶✶✶✶"
                required
                className="border-gray-700 "
              />
            </div>
          </CardContent>

          <CardFooter className="flex flex-col gap-3">
            <Button
            onClick={handleClick}
              type="button"
              className="w-full text-white rounded-lg hover: cursor-pointer"
            >
              Sign Up
            </Button>
            <p className="text-sm text-center text-gray-600">
              Already have an account?{" "}
              <button 
              onClick={routing}
         className="underline underline-offset-4 text-indigo-600">
                Login
              </button>
            </p>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}
