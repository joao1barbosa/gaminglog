"use client"

import { GameMobileNav } from '@/components/GameMobileNav';
import { useState } from 'react';
import { NavItem } from '@/types';

interface MainProps {
  game: {
    title: string,
    slug: string,
    cover_url: string | null,
  }
}

export default function Main({ game }: MainProps) {
  const [activeNav, setActiveNav] = useState<NavItem>('goals');


  return (
    <div>
      <h1 className='text-primary'>
        {game.title}
      </h1>

      <GameMobileNav activeItem={activeNav} onNavigate={setActiveNav} />
    </div>
  );

}
