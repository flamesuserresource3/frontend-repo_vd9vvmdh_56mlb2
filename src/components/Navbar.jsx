import { useState } from 'react';
import { ShoppingCart, Search, Menu, X, User } from 'lucide-react';

export default function Navbar({ onSearch }) {
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch?.(query);
  };

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/60 border-b border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              className="md:hidden p-2 rounded-lg hover:bg-black/5"
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
            <a href="#" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-black text-white grid place-items-center font-bold">S</div>
              <span className="font-semibold text-lg tracking-tight">Stride</span>
            </a>
          </div>

          <form
            onSubmit={handleSubmit}
            className="hidden md:flex items-center gap-2 bg-black/5 rounded-xl px-3 py-2 w-full max-w-md"
          >
            <Search className="text-black/50" size={18} />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search sneakers, brands, styles..."
              className="bg-transparent outline-none w-full placeholder:text-black/40"
            />
          </form>

          <div className="flex items-center gap-2">
            <button className="hidden md:inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-black text-white text-sm font-medium hover:opacity-90 transition">
              <ShoppingCart size={18} />
              <span>Cart</span>
            </button>
            <button className="p-2 rounded-xl hover:bg-black/5" aria-label="Account">
              <User size={20} />
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <form onSubmit={handleSubmit} className="flex items-center gap-2 bg-black/5 rounded-xl px-3 py-2">
              <Search className="text-black/50" size={18} />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search sneakers, brands, styles..."
                className="bg-transparent outline-none w-full placeholder:text-black/40"
              />
            </form>
            <div className="mt-3 grid grid-cols-2 gap-2">
              {['Men', 'Women', 'Kids', 'New', 'Sale', 'Accessories'].map((item) => (
                <a key={item} href="#" className="px-3 py-2 rounded-lg bg-black/5 text-sm text-black/80">
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
