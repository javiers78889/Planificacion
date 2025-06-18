

import { PlanesTable } from "@/components/users-table"



export default function Page() {
  return (
    <div className="min-h-screen bg-background dark:text-black">


      <main className="container mx-auto py-8 text-black">

        {/* Table */}
        <div className="rounded-lg border bg-card">
          <div className="p-6">
            <h2 className="text-lg font-semibold mb-4 ">Planes de estudio</h2>
           
            <PlanesTable />
          </div>
        </div>
      </main>
    </div>
  )
}
