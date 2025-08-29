import { GeistSans } from "geist/font/sans"
import { Button } from "../components/ui/button"
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

export default function Signup() {
  return (
    <div className="flex justify-center items-center min-h-screen ">
      <Card className="w-full max-w-sm shadow-xl rounded-2xl border space-y-2 border-gray-200">
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
                id="name"
                type="text"
                placeholder="John Doe"
                required
                className="border-gray-300"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
                className="border-gray-300"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="****************"
                required
                className="border-gray-700 "
              />
            </div>
          </CardContent>

          <CardFooter className="flex flex-col gap-3">
            <Button
              type="submit"
              className="w-full text-white rounded-lg hover: cursor-pointer"
            >
              Sign Up
            </Button>
            <p className="text-sm text-center text-gray-600">
              Already have an account?{" "}
              <a href="#" className="underline underline-offset-4 text-indigo-600">
                Login
              </a>
            </p>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}
