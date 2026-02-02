# 🏗️ Architect: Project Foundation

## Tech Stack
- **Frontend**: Next.js 16.1.6 (App Router)
- **Styling**: Tailwind CSS 4.0, shadcn/ui
- **Backend & Auth**: Supabase (@supabase/ssr)
- **Logic & Flow**: n8n (External)

## Project Structure
- `src/app`: Page routes and layouts.
- `src/components`: UI components (shadcn + custom).
- `src/lib`: Shared utilities, Supabase client.
- `src/izi.config.ts`: Global configuration.

## Architectural Rules
1. **Server Components by Default**: Use `'use client'` only for interactive elements.
2. **Supabase SSR**: Use server-side auth checks in middleware/layouts.
3. **Zod Validation**: All form/API inputs must be validated with Zod.
4. **Clean Code**: Keep components small (<200 lines). Extract logic to hooks or utils.

## Database (Supabase)
- **Naming**: `snake_case` for tables and columns.
- **RLS**: Enabled on all tables. Policies based on `auth.uid()`.
