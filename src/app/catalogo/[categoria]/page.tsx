import { supabase } from '@/src/lib/supabase'
import AutoCard from '@/src/components/AutoCard'
import { Auto } from '@/src/types/auto'
import Link from 'next/link'
export const dynamic = 'force-dynamic'

export default async function CategoriaPage({
  params,
}: {
  params: Promise<{ categoria: string }>
}) {
  const { categoria } = await params

  const { data: autos, error } = await supabase
    .from('autos')
    .select('*')
    .eq('categoria', categoria)
    .order('created_at', { ascending: false })
 
   if (error) {
    throw new Error(`Error al cargar autos: ${error.message}`)
  }

  return (
    <main className="max-w-6xl mx-auto p-6">
      <Link href="/" className="text-blue-600 hover:underline">
        ← Volver al catálogo completo
      </Link>

      <h1 className="text-3xl font-bold mt-4 mb-6 capitalize">
        Categoría: {categoria}
      </h1>


      {!error && autos && autos.length === 0 && (
        <p className="text-gray-500">No hay autos en esta categoría todavía.</p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {(autos as Auto[] | null)?.map((auto) => (
          <AutoCard key={auto.id} auto={auto} />
        ))}
      </div>
    </main>
  )
}