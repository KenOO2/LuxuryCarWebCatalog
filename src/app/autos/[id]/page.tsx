import { supabase } from '@/src/lib/supabase'
import { Auto } from '@/src/types/auto'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
export const dynamic = 'force-dynamic'

export default async function AutoDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params

  const { data: auto, error } = await supabase
    .from('autos')
    .select('*')
    .eq('id', id)
    .single()

  if (error || !auto) {
    notFound()
  }

  const car = auto as Auto

  return (
    <main className="max-w-4xl mx-auto p-6">
      <Link href="/" className="text-blue-600 hover:underline">
        ← Volver al catálogo
      </Link>

      <div className="mt-4 grid md:grid-cols-2 gap-8">
        <div className="relative w-full h-80 rounded-xl overflow-hidden">
          <Image
            src={car.imagen_url}
            alt={`${car.marca} ${car.modelo}`}
            fill
            className="object-cover"
          />
        </div>

        <div>
          <h1 className="text-3xl font-bold">{car.marca} {car.modelo}</h1>
          <p className="text-gray-500 mt-1">{car.anio} · {car.categoria}</p>
          <p className="text-2xl font-semibold mt-4">${car.precio_usd.toLocaleString()}</p>
          <p className="mt-2 text-gray-600">{car.potencia_hp} HP</p>
          <p className="mt-4 text-gray-700">{car.descripcion}</p>
        </div>
      </div>
    </main>
  )
}