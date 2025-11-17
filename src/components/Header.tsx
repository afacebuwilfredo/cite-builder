import React from 'react';
import { Link } from 'react-router-dom';
import { Moon, Sun, Palette } from 'lucide-react';

export default function Header() {
  const [theme, setTheme] = React.useState<'light' | 'dark' | 'dim' | 'blue'>(() => {
    const saved = localStorage.getItem('theme-mode');
    return (saved as 'light' | 'dark' | 'dim' | 'blue') || 'light';
  });

  React.useEffect(() => {
    const root = document.documentElement;
    
    // Remove all theme classes
    root.classList.remove('light', 'dark', 'dim', 'blue');
    
    // Apply new theme
    root.classList.add(theme);
    
    // Save to localStorage
    localStorage.setItem('theme-mode', theme);
    
    // Apply CSS variables for theme colors
    switch (theme) {
      case 'dark':
        root.style.colorScheme = 'dark';
        break;
      case 'dim':
        root.style.colorScheme = 'dark';
        break;
      case 'blue':
        root.style.colorScheme = 'dark';
        break;
      case 'light':
      default:
        root.style.colorScheme = 'light';
        break;
    }
  }, [theme]);

  const themes = [
    { name: 'Light', value: 'light', icon: Sun },
    { name: 'Dark', value: 'dark', icon: Moon },
    // { name: 'Dim', value: 'dim', icon: Palette },
    // { name: 'Blue', value: 'blue', icon: Palette },
  ] as const;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex">
          <Link className="mr-6 flex items-center space-x-2" to="/">
            <img src="/favicon.ico" alt="Logo" className="h-6 w-6 rounded object-cover" />
            <span className="font-bold">Cite Builder Docs</span>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link to="/citecasts" className="transition-colors hover:text-foreground/80 text-foreground/60">CiteCast</Link>
            <Link to="/" className="transition-colors hover:text-foreground/80 text-foreground/60">Docs</Link>
            {/* additional nav links can go here */}
          </nav>

          {/* Theme Switcher */}
          <div className="flex items-center gap-1 ml-4 pl-4 border-l">
            {themes.map((t) => {
              const Icon = t.icon;
              return (
                <button
                  key={t.value}
                  onClick={() => setTheme(t.value)}
                  className={`p-2 rounded-md transition-colors ${
                    theme === t.value
                      ? 'bg-primary text-primary-foreground'
                      : 'hover:bg-muted text-muted-foreground hover:text-foreground'
                  }`}
                  title={t.name}
                >
                  <Icon className="h-4 w-4" />
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </header>
  );
}
