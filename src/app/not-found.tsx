import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="max-w-2xl mx-auto p-10 text-center">
      <h1 className="text-2xl font-bold text-gray-900 mb-2">
        Auto no encontrado
      </h1>
      <p className="text-gray-500 mb-6">
        El vehículo que buscas no existe o fue removido del catálogo.
      </p>
      <Link href="/" className="px-6 py-2 rounded-full bg-gray-900 text-white hover:bg-gray-700 inline-block">
        Volver al catálogo
      </Link>
    </main>
  )
}