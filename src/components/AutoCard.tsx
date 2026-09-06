import Image from 'next/image'
import Link from 'next/link'
import { Auto } from '@/src/types/auto'

export default function AutoCard({ auto }: { auto: Auto }) {
  return (
    <Link
      href={`/autos/${auto.id}`}
      className="block rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow bg-white"
    >
      <div className="relative w-full h-48">
        <Image
          src={auto.imagen_url}
          alt={`${auto.marca} ${auto.modelo}`}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <h2 className="text-lg font-bold text-gray-900">
          {auto.marca} {auto.modelo}
        </h2>
        <p className="text-sm text-gray-500">{auto.anio} · {auto.categoria}</p>
        <p className="mt-2 text-xl font-semibold text-gray-800">
          ${auto.precio_usd.toLocaleString()}
        </p>
      </div>
    </Link>
  )
}