"use client"

import { planes } from "@/src"
import { Button } from "../ui/button"
import 'react-json-pretty/dist/monikai';
import JSONPretty from "react-json-pretty"


function JSONViewer() {
    const handleDownload = () => {
        const dataStr = JSON.stringify(planes, null, 2) // formato bonito
        const blob = new Blob([dataStr], { type: "application/json" })
        const url = URL.createObjectURL(blob)

        const a = document.createElement("a")
        a.href = url
        a.download = "planes_espanol.json"
        a.click()

        URL.revokeObjectURL(url) // liberar memoria
    }
    return (
        <div className="p-4 bg-gray-100 rounded-md overflow-auto flex flex-col  gap-2  ">
            <Button
                onClick={handleDownload}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-800 cursor-pointer transition w-35"
            >
                Descargar JSON
            </Button>
            <div className="p-4 bg-black rounded-md text-sm text-white overflow-auto">
                <JSONPretty data={planes}  ></JSONPretty>
            </div>
        </div>
    )
}

export default JSONViewer