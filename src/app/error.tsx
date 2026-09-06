'use client'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <main className="max-w-2xl mx-auto p-10 text-center">
      <h1 className="text-2xl font-bold text-red-600 mb-2">
        Algo salió mal
      </h1>
      <p className="text-gray-500 mb-6">
        {error.message || 'Ocurrió un error inesperado al cargar el catálogo.'}
      </p>
      <button
        onClick={() => reset()}
        className="px-6 py-2 rounded-full bg-gray-900 text-white hover:bg-gray-700"
      >
        Reintentar
      </button>
    </main>
  )
}