"use client"

import { GeistSans } from "geist/font/sans"
import { Button } from "../../components/ui/button"
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card"
import { Input } from "../../components/ui/input"
import { Label } from "../../components/ui/label"
import {redirect, useRouter} from "next/navigation";
import { signIn } from "next-auth/react";

interface Detail {
    response: string,
    token: string
}

export default function Signup() {

  
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");

const handleClick = async () => {

  if(!email){
    setPasswordError(
      "email and password requried "
    );
    return;
  }

  const res = await signIn("credentials", {
    redirect: false,
    email,
    password,
  });

  if(res?.error) {
    setPasswordError(
      "Invalid email or password"
    )
    return;
  }
  setPasswordError("")

  setTimeout(() => {
    router.push("/dashboard")
  }, 2000)

  router.push("/dashboard")

};

   const routing = () => {
        router.push("/auth/signup")
    }

  return (
    <div className="flex justify-center items-center min-h-screen shadow-2xs shadow-neutral-200">
      <Card className="w-full max-w-[400px] shadow-xl rounded-2xl border space-y-2 border-gray-500">
        <CardHeader>
          <CardTitle className={`${GeistSans.className} tracking-tight text-2xl font-bold text-center text-neutral-300`}>
            Login
          </CardTitle>
          <CardDescription className="text-center text-gray-500">
            log in  with your email and password
          </CardDescription>
        </CardHeader>

        <form className="space-y-6">
          <CardContent className="space-y-4">
            <div className="grid gap-2">
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
              onChange={(e) => {
                setEmail(e.target.value)
                setEmailError("")
              }}
                id="email"
                type="email"
                placeholder="m@example.com"
                className="border-gray-700"
              />
              {emailError &&  <p  className={`${GeistSans.className} flex justify-center font-semibold text-red-800 `}>{emailError}</p>}
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input
              onChange={(e) => {
                setPassword(e.target.value)
                setPasswordError("");
              }}
                id="password"
                type="password"
                placeholder="✶✶✶✶✶✶✶✶"
                className="border-gray-700 "
              />
              {passwordError &&  <p  className={`${GeistSans.className} flex justify-center font-semibold text-red-800 `}>{passwordError}</p>}
            </div>
          </CardContent>

          <CardFooter className="flex flex-col gap-3">
            <Button
            onClick={handleClick}
              type="button"
              className="w-full text-white rounded-lg hover: cursor-pointer"
            >
             Log in
            </Button>
            <p className="text-sm text-center text-gray-600">
              Don't have an account?{" "}
              <button 
              onClick={routing}
              type="button"
              className="underline hover: cursor-pointer underline-offset-4 text-indigo-600">
                Signup
              </button>
            </p>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}
