'use client';

import { cn } from './ui';
import { Button } from './ui';

interface AppHeaderProps {
  logo: string;
  navLinks: { label: string; href: string }[];
}

function AppHeader({ logo, navLinks }: AppHeaderProps) {
  return (
    <nav
      className={cn(
        'fixed',
        'top-0',
        'left-0',
        'w-full',
        'bg-white',
        'border-b',
        'border-gray-300',
        'px-4',
        'py-2',
        'flex',
        'items-center',
        'justify-between'
      )}
    >
      <div className={cn('flex', 'items-center', 'mr-4')}>
        <img src={logo} alt="Logo" className={cn('w-8', 'h-8', 'mr-2')} />
        <h1 className={cn('text-lg', 'font-medium')}>Ecomerce Profit Prophet</h1>
      </div>
      <ul className={cn('flex', 'items-center', 'list-none', 'm-0', 'p-0')}>
        {navLinks.map((link) => (
          <li key={link.label} className={cn('mr-4')}>
            <a
              href={link.href}
              className={cn(
                'text-sm',
                'font-medium',
                'text-gray-500',
                'hover:text-primary',
                'transition',
                'duration-300'
              )}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
      <div className={cn('flex', 'items-center', 'ml-4')}>
        <Button variant="primary">Get Started</Button>
      </div>
    </nav>
  );
}

interface AppSidebarProps {
  items: { icon: React.ReactNode; label: string; href: string; active: boolean }[];
}

function AppSidebar({ items }: AppSidebarProps) {
  return (
    <div
      className={cn(
        'fixed',
        'top-12',
        'left-0',
        'w-64',
        'h-screen',
        'bg-white',
        'border-r',
        'border-gray-300',
        'px-4',
        'py-4',
        'flex',
        'flex-col'
      )}
    >
      {items.map((item) => (
        <a
          key={item.label}
          href={item.href}
          className={cn(
            'flex',
            'items-center',
            'py-2',
            'px-4',
            'text-sm',
            'font-medium',
            {
              'bg-primary': item.active,
              'text-white': item.active,
              'bg-transparent': !item.active,
              'text-gray-500': !item.active,
              'hover:bg-gray-100': !item.active,
            }
          )}
        >
          {item.icon}
          <span className={cn('ml-2')}>{item.label}</span>
        </a>
      ))}
    </div>
  );
}

function DemoBanner() {
  const [isOpen, setIsOpen] = useState(true);

  const handleDismiss = () => {
    setIsOpen(false);
    localStorage.setItem('demoBannerDismissed', 'true');
  };

  if (!isOpen || localStorage.getItem('demoBannerDismissed') === 'true') return null;

  return (
    <div
      className={cn(
        'fixed',
        'top-0',
        'left-0',
        'w-full',
        'bg-orange-500',
        'text-white',
        'px-4',
        'py-2',
        'flex',
        'items-center',
        'justify-between'
      )}
    >
      🔐 Demo Mode — all data is illustrative. Connect your database to go live.
      <button
        type="button"
        className={cn('text-sm', 'font-medium', 'text-white', 'hover:underline', 'transition', 'duration-300')}
        onClick={handleDismiss}
      >
        Dismiss
      </button>
    </div>
  );
}

export { AppHeader, AppSidebar, DemoBanner };