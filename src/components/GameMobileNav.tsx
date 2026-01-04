import { Goal, BookOpen, Search } from 'lucide-react';
import { NavItem } from '@/types';

interface GameMobileNavProps {
  activeItem: NavItem;
  onNavigate: (item: NavItem) => void;
}

export function GameMobileNav({ activeItem, onNavigate }: GameMobileNavProps) {
  const navItems = [
    { id: 'chapters' as NavItem, icon: BookOpen, label: 'Chapters' },
    { id: 'goals' as NavItem, icon: Goal, label: 'Goal' },
    { id: 'search' as NavItem, icon: Search, label: 'Search' },
  ];

  return (
    <nav className="
      fixed bottom-0 left-0 right-0 z-50
      bg-card/95 backdrop-blur-lg
      border-t border-primary/20
      md:hidden
    ">
      <div className="flex items-center justify-around h-16 max-w-lg mx-auto px-4">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeItem === item.id;

          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`
                flex flex-col items-center justify-center gap-1
                flex-1 h-full transition-all duration-200
                ${isActive
                  ? 'text-primary'
                  : 'text-muted-foreground hover:text-foreground'
                }
              `}
            >
              <div className={`
                relative p-2 rounded-lg transition-all duration-200
                ${isActive ? 'bg-primary/10' : ''}
              `}>
                <Icon className="w-6 h-6" />
                {isActive && (
                  <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary shadow-[0_0_8px_rgba(212,175,55,0.8)]" />
                )}
              </div>
              <span className="text-xs">{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
