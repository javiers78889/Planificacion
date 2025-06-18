import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MoreHorizontal, Mail, Phone } from "lucide-react"
import { planes } from "@/src"




export function UsersTable() {
  return (
    <div className="rounded-md border ">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-black">Grado</TableHead>
            <TableHead className="text-black">Año </TableHead>
            <TableHead className="text-black">Área  </TableHead>
            <TableHead className="text-black">Tema  </TableHead>
            <TableHead className="text-black">Conceptuales  </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {planes.map((user) => (
            <TableRow key={user.grado}>
              <TableCell className="font-medium">
                <div className="flex items-center space-x-3">
                  {user.grado}
                  <div>
                    <div className="font-medium">{}</div>
                    <div className="text-sm text-muted-foreground">{}</div>
                  </div>
                </div>
              </TableCell>
              <TableCell>{}</TableCell>
              <TableCell>{}</TableCell>
              <TableCell>
                <div className="flex flex-col space-y-1">
                  <div className="flex items-center space-x-1 text-sm">
                    <Mail className="h-3 w-3" />
                    <span className="text-muted-foreground">{}</span>
                  </div>
                  <div className="flex items-center space-x-1 text-sm">
                    <Phone className="h-3 w-3" />
                    <span className="text-muted-foreground">{}</span>
                  </div>
                </div>
              </TableCell>
              <TableCell className="text-sm text-muted-foreground">
              
              </TableCell>
              <TableCell className="text-right">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-8 p-0">
                      <span className="sr-only">Abrir menú</span>
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Acciones</DropdownMenuLabel>
                    <DropdownMenuItem>Ver perfil</DropdownMenuItem>
                    <DropdownMenuItem>Editar usuario</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="text-red-600">Eliminar usuario</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
