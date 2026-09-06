import { supabase } from '@/src/lib/supabase'
import AutoCard from '@/src/components/AutoCard'
import { Auto } from '@/src/types/auto'
import Link from 'next/link'
export const dynamic = 'force-dynamic'

export default async function Home() {
  const { data: autos, error } = await supabase
    .from('autos')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    throw new Error(`Error al cargar autos: ${error.message}`)
  }


  return (
    <main className="max-w-6xl mx-auto p-6">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-gray-900">Catálogo de Autos de Lujo</h1>
        <p className="text-gray-500 mt-2">Deportivos y de lujo seleccionados</p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {(autos as Auto[]).map((auto) => (
          <AutoCard key={auto.id} auto={auto} />
        ))}
      </div>
    </main>
  )
}