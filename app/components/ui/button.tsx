"use client"
import { GeistSans } from "geist/font/sans"
import axios from "axios"
import React from "react"
import { useState } from "react"

interface Detail{
  username: string,
  email: string,
  password: string
}

export function Button({ children, className = "", ...props }: React.ComponentProps<"button">) {

  // const handleClick = async () => {
  //   const response = await axios.post("http://localhost:3000/api/v1/signup", {
  //     username,
  //     email,
  //     password
  //   });
  //   const result = response.data;

  //   console.log(result);
  // }

  return (
    <button 
      className={`${GeistSans} inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-bold 
                  bg-gradient-to-b from-neutral-700 via-neutral-500 to-neutral-700 
        dark:from-neutral-500 dark:via-neutral-600 dark:to-neutral-800 transition-all 
                  disabled:opacity-50 disabled:pointer-events-none 
                  text-neutral-300 border-0
                  focus:outline-none focus:ring-1  focus:ring-offset-2 ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
