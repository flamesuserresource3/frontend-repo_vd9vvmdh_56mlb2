import { useMemo, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';

const ALL_PRODUCTS = [
  {
    id: 'p1',
    name: 'Air Runner V2',
    brand: 'Aether',
    price: 129.99,
    originalPrice: 159.99,
    rating: 4.7,
    reviews: 312,
    colors: ['#111111', '#f2f2f2', '#d946ef', '#60a5fa'],
    image:
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1600&auto=format&fit=crop',
    tags: ['running', 'men', 'trending'],
  },
  {
    id: 'p2',
    name: 'Cloud Glide 3',
    brand: 'Nimbus',
    price: 149.0,
    rating: 4.5,
    reviews: 204,
    colors: ['#111827', '#e11d48', '#f59e0b', '#10b981'],
    image:
      'https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=1600&auto=format&fit=crop',
    tags: ['lifestyle', 'women', 'new'],
  },
  {
    id: 'p3',
    name: 'Pulse React Pro',
    brand: 'Volt',
    price: 99.99,
    rating: 4.2,
    reviews: 88,
    colors: ['#111111', '#f59e0b', '#0ea5e9', '#84cc16'],
    image:
      'https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?q=80&w=1600&auto=format&fit=crop',
    tags: ['training', 'men', 'budget'],
  },
  {
    id: 'p4',
    name: 'Retro Court 84',
    brand: 'Heritage',
    price: 119.0,
    rating: 4.8,
    reviews: 541,
    colors: ['#f8fafc', '#ef4444', '#22c55e', '#3b82f6'],
    image:
      'https://images.unsplash.com/photo-1539185441755-769473a23570?q=80&w=1600&auto=format&fit=crop',
    tags: ['lifestyle', 'unisex', 'bestseller'],
  },
  {
    id: 'p5',
    name: 'Trail Ridge GTX',
    brand: 'Summit',
    price: 169.0,
    rating: 4.6,
    reviews: 164,
    colors: ['#111827', '#6b7280', '#374151', '#1f2937'],
    image:
      'https://images.unsplash.com/photo-1543508282-6319a3e2621f?q=80&w=1600&auto=format&fit=crop',
    tags: ['outdoor', 'men', 'new'],
  },
  {
    id: 'p6',
    name: 'Studio Flex Knit',
    brand: 'Forma',
    price: 89.0,
    rating: 4.1,
    reviews: 73,
    colors: ['#f3f4f6', '#334155', '#22d3ee', '#a78bfa'],
    image:
      'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1600&auto=format&fit=crop',
    tags: ['training', 'women', 'lightweight'],
  },
  {
    id: 'p7',
    name: 'Velocity Sprint',
    brand: 'Arc',
    price: 139.0,
    rating: 4.4,
    reviews: 129,
    colors: ['#0f172a', '#22c55e', '#ef4444', '#f59e0b'],
    image:
      'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1600&auto=format&fit=crop',
    tags: ['running', 'unisex', 'fast'],
  },
  {
    id: 'p8',
    name: 'Urban Slip-On',
    brand: 'CityLine',
    price: 79.0,
    rating: 4.0,
    reviews: 54,
    colors: ['#111111', '#f2f2f2', '#6b7280', '#e11d48'],
    image:
      'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1600&auto=format&fit=crop',
    tags: ['lifestyle', 'unisex', 'casual'],
  },
];

export default function App() {
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return ALL_PRODUCTS;
    return ALL_PRODUCTS.filter((p) =>
      [p.name, p.brand, ...(p.tags || [])].some((t) => String(t).toLowerCase().includes(q))
    );
  }, [query]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-slate-50 text-slate-900">
      <Navbar onSearch={setQuery} />
      <Hero />
      <ProductGrid products={filtered} title={query ? `Results for "${query}"` : 'Featured Picks'} />
      <Footer />
    </div>
  );
}
