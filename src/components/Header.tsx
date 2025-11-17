import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
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
        </div>
      </div>
    </header>
  );
}
