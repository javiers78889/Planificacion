"use client"

import { planes } from "@/src"
import ReactJson from "react-json-view"
import { Button } from "../ui/button"


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
        <div className="p-4 bg-gray-100 rounded-md overflow-auto ">
            <Button
                onClick={handleDownload}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-800 cursor-pointer transition"
            >
                Descargar JSON
            </Button>
            <ReactJson
                src={planes}
                name={false}
                theme="rjv-default" // Puedes probar otros como 'monokai', 'solarized'
                collapsed={false}  // Cambia a true si quieres que los nodos estén colapsados por defecto
                enableClipboard={true}
                displayDataTypes={true}
                displayObjectSize={false}
            />
        </div>
    )
}

export default JSONViewer