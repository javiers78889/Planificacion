
import { Input } from "@/components/ui/input"
import { UsersTable } from "@/components/users-table"
import { Search } from "lucide-react"


export default function Page() {
  return (
    <div className="min-h-screen bg-background dark:text-black">


      <main className="container mx-auto py-8 text-black">

        {/* Table */}
        <div className="rounded-lg border bg-card">
          <div className="p-6">
            <h2 className="text-lg font-semibold mb-4 ">Lista de Usuarios</h2>
            <div className="relative hidden md:block pb-2">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Buscar..." className="w-[200px] pl-8" />
            </div>
            <UsersTable />
          </div>
        </div>
      </main>
    </div>
  )
}
