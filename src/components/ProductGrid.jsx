import { useMemo } from 'react';
import { Heart, Star } from 'lucide-react';

function ProductCard({ product }) {
  return (
    <div className="group rounded-2xl border border-black/5 bg-white shadow-sm hover:shadow-md transition overflow-hidden">
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="h-56 w-full object-cover"
          loading="lazy"
        />
        <button className="absolute top-3 right-3 p-2 rounded-full bg-white/90 hover:bg-white shadow">
          <Heart size={16} />
        </button>
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="font-semibold leading-snug">
              <a href="#" className="hover:underline">
                {product.name}
              </a>
            </h3>
            <p className="text-sm text-black/60">{product.brand}</p>
          </div>
          <div className="text-right">
            <p className="font-semibold">${product.price.toFixed(2)}</p>
            {product.originalPrice && (
              <p className="text-xs line-through text-black/40">${product.originalPrice.toFixed(2)}</p>
            )}
          </div>
        </div>
        <div className="mt-3 flex items-center gap-1 text-xs text-black/70">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={14}
              className={i < Math.round(product.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-black/20'}
            />
          ))}
          <span className="ml-1">({product.reviews})</span>
        </div>
        <div className="mt-4 grid grid-cols-4 gap-2">
          {product.colors.slice(0, 4).map((c) => (
            <div key={c} className="h-8 w-8 rounded-full border" style={{ backgroundColor: c }} />
          ))}
        </div>
        <button className="mt-4 w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-black text-white text-sm font-medium hover:opacity-90 transition">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default function ProductGrid({ products = [], title = 'Featured' }) {
  const sorted = useMemo(() => products, [products]);

  return (
    <section id="shop" className="mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16">
      <div className="flex items-end justify-between">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">{title}</h2>
          <p className="text-black/60">Curated picks our community loves right now.</p>
        </div>
        <a href="#" className="text-sm font-medium text-black/70 hover:text-black">View all</a>
      </div>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {sorted.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}
