import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Catálogo de Autos de Lujo",
  description: "Deportivos y autos de lujo seleccionados",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="bg-gray-50 text-gray-900 min-h-screen flex flex-col">
        <header className="border-b bg-white sticky top-0 z-10">
          <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
            <Link href="/" className="font-bold text-lg">🏎️ Autos de Lujo</Link>
            <nav className="flex gap-4 text-sm">
              <Link href="/catalogo/deportivo" className="hover:underline">Deportivos</Link>
              <Link href="/catalogo/lujo" className="hover:underline">Lujo</Link>
              <Link href="/catalogo/clasico" className="hover:underline">Clásicos</Link>
            </nav>
          </div>
        </header>

        <div className="flex-1">{children}</div>

        <footer className="border-t bg-white text-center py-6 text-sm text-gray-500">
          Proyecto académico — Next.js 16 + Supabase
        </footer>
      </body>
    </html>
  );
}