export default function Loading() {
  return (
    <main className="max-w-6xl mx-auto p-6">
      <div className="text-center mb-8">
        <div className="h-8 w-64 bg-gray-200 rounded animate-pulse mx-auto" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="rounded-xl overflow-hidden shadow-md bg-white">
            <div className="w-50 h-48 bg-gray-200 animate-pulse" />
            <div className="p-4 space-y-2">
              <div className="h-4 bg-gray-200 rounded animate-pulse w-3/4" />
              <div className="h-3 bg-gray-200 rounded animate-pulse w-1/2" />
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}