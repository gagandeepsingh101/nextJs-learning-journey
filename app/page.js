"use client"
import { useState } from "react"

export default function Home() {
  const [count , setCount]=useState(0);
  return (
    <h1 className="bg-red-500 text-white w-full h-screen text-[3rem] flex justify-center items-center">Hello</h1>
    )
}
