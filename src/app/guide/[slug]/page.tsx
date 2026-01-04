import Main from '@/components/GameGuide/Main';
import { createClient } from '@/utils/supabase/server';

export default async function GamePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const supabase = await createClient();
  const { slug } = await params;

  const { data: game, error } = await supabase
    .from('games')
    .select('title, slug, cover_url')
    .eq('slug', slug)
    .single();


  if (error) {
    return <div>Erro ao carregar jogos: {error.message}</div>
  }

  return (
    <div className='text-neutral-200'>
      {JSON.stringify(game)}
      <Main game={game} />
    </div>
  );
}
