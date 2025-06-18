import { Bell} from "lucide-react"
import { Button } from "@/components/ui/button"


export function Navbar() {
  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        {/* Logo */}
        <div className="mr-8">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Planificacion
          </h1>
        </div>

 

        {/* Right side */}
        <div className="ml-auto flex items-center space-x-4">
          {/* Search */}
         

          {/* Notifications */}
          <Button variant="ghost" size="icon">
            <Bell className="h-4 w-4" />
            <span className="sr-only">Notificaciones</span>
          </Button>

         
        </div>
      </div>
    </nav>
  )
}
