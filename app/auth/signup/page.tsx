  "use client"
  import { GeistSans } from "geist/font/sans"
  import { Button } from "@/app/components/ui/button"
  import { useState } from "react";
  import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/app/components/ui/card"
  import { Input } from "@/app/components/ui/input";
  import axios from "axios"
  import { Label } from "@/app/components/ui/label"
  import { useRouter } from "next/navigation";

interface Detail {
  response: string;
  token: string;
}


  export default function Signup() {

      const route = useRouter();
      const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");
      const [emailError, setEmailError] = useState("");
      const [passwordError, setPasswordError] = useState("");

      const handleClick = async () => {

        let vaild = false;

        if(!password) {
        setPasswordError(
        "email and password required"
        ) 
        
        vaild = true;
      }

        try {
          const response = await axios.post<Detail > ("http://localhost:3000/api/v1/signup", {
              email,
              password
          })
          const token = response.data.token;
          localStorage.setItem("token", token);

          route.push("/dashboard")
      }
      catch (error) {
        console.error("Signup failed "+error);
    }
    } 
      const routing = () => {
          route.push("/auth/signin")
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
                <Label htmlFor="email">Email</Label>
                <Input
                onChange={(e) => {
                  setEmail(e.target.value)
                  setPasswordError("")
                }}
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  className="border-gray-700"
                />
                {emailError && <p  className={`${GeistSans.className} flex justify-center font-semibold text-red-800 `}>{emailError}</p>}
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input
                onChange={(e) => {
                  setPassword(e.target.value)
                  setPasswordError("")
                }}
                  id="password"
                  type="password"
                  placeholder="✶✶✶✶✶✶✶✶"
                  required
                  className="border-gray-700 "
                />
                {passwordError && <p className={`${GeistSans.className} flex justify-center font-semibold text-red-800 `}>{passwordError}</p>}
              </div>
            </CardContent>

            <CardFooter className="flex flex-col gap-3">
              <Button
              onClick={handleClick}
                type="button"
                className="w-full text-white rounded-lg border-0 border-neutral-900 hover: cursor-pointer"
              >
                Sign Up
              </Button>
              <p className="text-sm text-center text-gray-600">
                Already have an account?{" "}
                <button 
                onClick={routing}
          className="underline hover: cursor-pointer underline-offset-4 text-indigo-600">
                  Login
                </button>
              </p>
            </CardFooter>
          </form>
        </Card>
      </div>
    )
  }
