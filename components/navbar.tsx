"use client"
import { Download, FileJson } from "lucide-react"

import Link from "next/link"
import { Button } from "./ui/button"
import { dataReadme } from "@/src/text_readme"


export function Navbar() {
  const handleDownload = () => {
    const blob = new Blob([dataReadme], { type: "text/markdown" })
    const url = URL.createObjectURL(blob)

    const a = document.createElement("a")
    a.href = url
    a.download = "README.md"
    a.click()

    URL.revokeObjectURL(url) // liberar memoria
  }
  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        {/* Logo */}
        <Link href={'/'} className="mr-8 cursor-pointer">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Planificacion
          </h1>
        </Link>



        {/* Right side */}
        <div className="ml-auto flex items-center space-x-4">
          {/* Search */}
          <Button onClick={handleDownload} className="cursor-pointer hover:text-blue-400 flex font-bold " >
            Readme.md
            <Download />
          </Button>

          {/* Notifications */}
          <Link className="cursor-pointer hover:text-yellow-400 flex font-bold" href={'/json'}>
            JSON Viewer <FileJson />
          </Link>


        </div>
      </div>
    </nav>
  )
}
