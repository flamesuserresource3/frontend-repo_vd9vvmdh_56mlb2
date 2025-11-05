export default function Footer() {
  return (
    <footer className="mt-16 border-t border-black/5 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10 grid gap-8 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-black text-white grid place-items-center font-bold">S</div>
            <span className="font-semibold text-lg tracking-tight">Stride</span>
          </div>
          <p className="mt-3 text-sm text-black/60 max-w-xs">
            Premium footwear for every stride. Designed for comfort, crafted for style.
          </p>
        </div>
        <div>
          <p className="font-semibold mb-3">Shop</p>
          <ul className="space-y-2 text-sm text-black/70">
            <li><a href="#" className="hover:text-black">Men</a></li>
            <li><a href="#" className="hover:text-black">Women</a></li>
            <li><a href="#" className="hover:text-black">Kids</a></li>
            <li><a href="#" className="hover:text-black">Sale</a></li>
          </ul>
        </div>
        <div>
          <p className="font-semibold mb-3">Support</p>
          <ul className="space-y-2 text-sm text-black/70">
            <li><a href="#" className="hover:text-black">Help Center</a></li>
            <li><a href="#" className="hover:text-black">Returns</a></li>
            <li><a href="#" className="hover:text-black">Shipping</a></li>
            <li><a href="#" className="hover:text-black">Warranty</a></li>
          </ul>
        </div>
        <div>
          <p className="font-semibold mb-3">Newsletter</p>
          <form className="flex gap-2">
            <input
              type="email"
              required
              placeholder="Your email"
              className="w-full px-3 py-2 rounded-xl border border-black/10 focus:outline-none focus:ring-2 focus:ring-black/20"
            />
            <button className="px-4 py-2 rounded-xl bg-black text-white text-sm font-medium hover:opacity-90">Join</button>
          </form>
          <p className="mt-2 text-xs text-black/50">By subscribing, you agree to our policy.</p>
        </div>
      </div>
      <div className="border-t border-black/5 py-4 text-center text-xs text-black/60">
        © {new Date().getFullYear()} Stride. All rights reserved.
      </div>
    </footer>
  );
}
