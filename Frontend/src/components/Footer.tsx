import { Link } from "react-router-dom"
import { MapPin, Phone, Clock, Heart, ArrowUp, Star, ShieldCheck, Sparkles, Navigation } from "lucide-react"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-[#180d07] text-[#f7f2ea] border-t-2 border-[#b5874a]/40 pt-16 pb-10">
      <div className="max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-12 space-y-12">
        
        {/* Balanced Grid: 3 Main Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-neutral-800">
          
          {/* Col 1: Brand & Heritage (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            <Link to="/" className="hidden sm:inline-block">
              <img
                src="/logo.svg"
                alt="Chehadi Sweets"
                className="h-12 w-auto object-contain brightness-0 invert"
              />
            </Link>
            
            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed max-w-md">
              Chehadi Sweets, nestled in Chester Hill, Sydney, specialises in authentic Middle Eastern confectionery. Renowned for fresh Ashta plates, warm cheese Knefe, handcrafted Baklava, and celebration cakes.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#26140c] border border-[#b5874a]/40 text-xs font-semibold text-[#dfb776]">
                <Star className="w-3.5 h-3.5 fill-[#dfb776] text-[#dfb776]" />
                <span>4.3 ★ Customer Rating</span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#26140c] border border-neutral-700 text-xs font-medium text-neutral-300">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>100% Halal Certified</span>
              </div>
            </div>
          </div>

          {/* Col 2: Navigation & Popular Sweets (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#dfb776] flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#b5874a]" />
              <span>Quick Links & Menu</span>
            </h3>
            <ul className="space-y-2.5 text-xs text-neutral-300">
              <li>
                <Link to="/" className="hover:text-[#dfb776] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/menu" className="hover:text-[#dfb776] transition-colors">
                  Sweets Menu & Order
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#dfb776] transition-colors">
                  Our Story & Heritage
                </Link>
              </li>
              <li>
                <Link to="/catering" className="hover:text-[#dfb776] transition-colors">
                  Catering & Celebration Trays
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#dfb776] transition-colors">
                  Visit Chester Hill Store
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Chester Hill Bakery Info Card (4 cols) */}
          <div className="lg:col-span-4 bg-[#24130b] p-6 rounded-3xl border border-[#b5874a]/25 space-y-4 shadow-md">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#dfb776]">
              Store & Trading Hours
            </h3>

            <div className="space-y-3 text-xs text-neutral-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#b5874a] shrink-0 mt-0.5" />
                <span>150–152 Waldron Rd, Chester Hill NSW 2162</span>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#b5874a] shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white">Monday – Sunday (7 Days)</div>
                  <div className="text-[#dfb776]">9:00 AM – 10:00 PM</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#b5874a] shrink-0 mt-0.5" />
                <a
                  href="tel:+61410390945"
                  className="font-bold text-[#dfb776] hover:underline"
                >
                  +61 410 390 945
                </a>
              </div>
            </div>

            <div className="pt-2 border-t border-neutral-800">
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Chehadi+Sweets,+150-152+Waldron+Rd,+Chester+Hill+NSW+2162"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-[#dfb776] hover:text-white transition-colors"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Get Driving Directions</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Strip */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] sm:text-xs text-neutral-400">
          <p className="text-center sm:text-left leading-relaxed">
            <span>© {new Date().getFullYear()} Chehadi Sweets. Middle Eastern Confectionery. Handcrafted with </span>
            <Heart className="w-3.5 h-3.5 text-[#b5874a] fill-[#b5874a] inline-block mx-0.5 -mt-0.5" />
            <span> in Sydney, Australia.</span>
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-[#dfb776] hover:text-white px-4 py-1.5 rounded-full bg-[#24130b] border border-[#b5874a]/30 transition-colors shadow-xs cursor-pointer text-xs"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  )
}
