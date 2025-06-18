"use client"

import { useState } from "react"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { planes } from "@/src"

export function PlanesTable() {
  const [search, setSearch] = useState("")

  const filteredPlanes = planes.filter((plan) => {
    return (
      plan.grado.toLowerCase().includes(search.toLowerCase()) ||
      plan.año.toString().includes(search) ||
      plan.áreas.some((area) =>
        area.nombre.toLowerCase().includes(search.toLowerCase())
      )
    )
  })

  return (
    <div className="space-y-4">
      <Input
        type="text"
        placeholder="Buscar por grado, año o área..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="max-w-md"
      />
      <div className="rounded-md border overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-black">Grado</TableHead>
              <TableHead className="text-black">Año</TableHead>
              <TableHead className="text-black">Área</TableHead>
              <TableHead className="text-black">Objetivos</TableHead>
              <TableHead className="text-black">Contenidos</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredPlanes.map((plan) =>
              plan.áreas.map((area) => (
                <TableRow key={`${plan.grado}-${plan.año}-${area.nombre}`}>
                  <TableCell>{plan.grado}</TableCell>
                  <TableCell>{plan.año}</TableCell>
                  <TableCell>{area.nombre}</TableCell>
                  <TableCell>
                    <ul className="list-disc pl-4 space-y-1">
                      {area.objetivos?.map((obj, i) => (
                        <li key={i} className="text-sm text-muted-foreground">
                          {obj}
                        </li>
                      ))}
                    </ul>
                  </TableCell>
                  <TableCell>
                    <ul className="space-y-4">
                      {area.contenidos.map((contenido, i) => (
                        <li key={i}>
                          <strong className="text-sm block mb-1">{contenido.tema}</strong>
                          {contenido.indicadores && (
                            <div className="mb-1">
                              <span className="font-semibold text-xs">Indicadores:</span>
                              <ul className="list-disc pl-4 text-sm text-muted-foreground">
                                {contenido.indicadores.map((ind, j) => (
                                  <li key={j}>{ind}</li>
                                ))}
                              </ul>
                            </div>
                          )}
                          {contenido.actividades && (
                            <div>
                              <span className="font-semibold text-xs">Actividades:</span>
                              <ul className="list-disc pl-4 text-sm italic text-muted-foreground">
                                {contenido.actividades.map((act, k) => (
                                  <li key={k}>{act}</li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </li>
                      ))}
                    </ul>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
