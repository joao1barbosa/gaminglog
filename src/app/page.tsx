import { createClient } from '@/utils/supabase/server';

export default async function Home() {
  const supabase = await createClient();

  const { data: games, error } = await supabase
    .from('games')
    .select('title, slug, cover_url')

  if (error) {
    return <div>Erro ao carregar jogos: {error.message}</div>
  }
  
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-center py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1 className="text-2xl font-bold mb-8 text-center">GamingLog - Projetos</h1>
        
        <div className="grid grid-cols-1 gap-4 w-full sm:grid-cols-2">
          {games?.map((game) => (
            <div key={game.slug} className="border p-4 rounded-lg shadow-sm">
              <h2 className="font-bold">{game.title}</h2>
              <p className="text-sm text-zinc-500">{game.slug}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
