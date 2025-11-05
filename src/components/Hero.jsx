import { ArrowRight, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-rose-100 via-white to-sky-100" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-black text-white px-3 py-1 text-xs font-medium">
              <Star size={14} className="text-yellow-300" />
              New Season Drop
            </p>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              Elevate Your Step with Signature Sneakers
            </h1>
            <p className="mt-4 text-base sm:text-lg text-black/70 max-w-xl">
              Discover premium styles from top brands. Lightweight comfort, bold colorways, and performance-ready builds for everyday hustle.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#shop" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-black text-white font-medium hover:opacity-90 transition">
                Shop Bestsellers
                <ArrowRight size={18} />
              </a>
              <a href="#new" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-black/5 text-black font-medium hover:bg-black/10 transition">
                New Arrivals
              </a>
            </div>
            <div className="mt-6 flex items-center gap-6 text-sm text-black/60">
              <div className="flex items-center gap-1">
                <Star size={16} className="text-yellow-400 fill-yellow-400" />
                <span>4.8/5 rating</span>
              </div>
              <span>Free shipping over $75</span>
              <span>30-day returns</span>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-black/5">
              <img
                src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1600&auto=format&fit=crop"
                alt="Featured sneaker"
                className="h-full w-full object-cover"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
