# Catálogo de Autos Deportivos y de Lujo

Landing page construida con **Next.js 16 (App Router)** y **Supabase** como backend serverless, para la actividad "Dominio del App Router y Gestión de Datos con Next.js".

## Descripción del proyecto

Catálogo interactivo de autos deportivos y de lujo. Permite:
- Ver el listado completo de autos en la página principal.
- Filtrar autos por categoría mediante rutas dinámicas (`/catalogo/[categoria]`).
- Ver el detalle de un auto específico (`/autos/[id]`).

Los datos se leen en tiempo real desde una base de datos Supabase (PostgreSQL) mediante Server Components, con políticas de Row Level Security configuradas para lectura pública.

## Tecnologías

- Next.js 16+ (App Router, Server Components)
- Supabase (Base de datos + RLS)
- Tailwind CSS
- TypeScript

## Instrucciones de instalación local

1. Clonar el repositorio:
   \`\`\`bash
   git clone https://github.com/KenOO2/LuxuryCarWebCatalog
   cd catalogo-autos
   \`\`\`

2. Instalar dependencias:
   \`\`\`bash
   npm install
   \`\`\`

3. Crear un archivo `.env.local` en la raíz con las variables descritas abajo.

4. Correr en modo desarrollo:
   \`\`\`bash
   npm run dev
   \`\`\`

5. Abrir [http://localhost:3000](http://localhost:3000)

## Variables de entorno necesarias

Crear un archivo `.env.local` en la raíz del proyecto con:

\`\`\`
NEXT_PUBLIC_SUPABASE_URL=<tu-project-url-de-supabase>
NEXT_PUBLIC_SUPABASE_ANON_KEY=<tu-anon-public-key-de-supabase>
\`\`\`

Ambas se obtienen en Supabase: **Project Settings → API**. La `anon key` está diseñada para ser pública (queda protegida por las políticas RLS de la base de datos, no por estar oculta).

## Estructura de datos (Supabase)

Tabla `autos` con columnas: `id`, `marca`, `modelo`, `anio`, `categoria`, `potencia_hp`, `precio_usd`, `descripcion`, `imagen_url`, `slug`, `created_at`. RLS habilitado con política de lectura pública (`select`) para el rol `anon`.

## Despliegue

Sitio en producción: https://luxury-car-web-catalog.vercel.app/

## Autor
Kevin Alexander Ortez Oliva
Se ha utlizado modelos de IA de claude para el diseño grafico y tutoria a la hora de crear este sitio web.