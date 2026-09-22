import { Sparkles, ArrowRight, ShieldCheck, Heart, Award, Utensils } from "lucide-react"
import { Button } from "@/components/ui/button"

interface HeroProps {
  onExploreClick: () => void
  onCateringClick: () => void
}

export function Hero({ onExploreClick, onCateringClick }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#fbf8f3] via-[#ffffff] to-[#fbf8f3] pt-8 pb-16 lg:py-20 border-b border-[#b5874a]/15">
      {/* Decorative ambient background rings */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-[#b5874a]/10 via-[#dfb776]/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
          
          {/* Left Column: Story, Headline & CTAs */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            
            {/* Top Emblem Pill */}
            <div className="inline-flex items-center gap-1.5 sm:gap-2.5 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-white border border-[#b5874a]/30 shadow-xs text-[10px] sm:text-xs font-semibold tracking-normal sm:tracking-wider text-[#2b160f] uppercase">
              <img src="/tree.svg" alt="Tree" className="w-3.5 h-3.5 sm:w-4 sm:h-4 object-contain shrink-0" />
              <span>Authentic Middle Eastern Patisserie • Chester Hill, Sydney</span>
              <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#b5874a] shrink-0" />
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#2b160f] leading-[1.15]">
              Handcrafted Middle Eastern Sweets,{" "}
              <span className="bg-gradient-to-r from-[#8c6126] via-[#b5874a] to-[#d8aa6b] bg-clip-text text-transparent italic font-serif">
                Rooted in Heritage.
              </span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-neutral-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Experience the timeless taste of Beirut in Sydney. From slow-cooked velvety clotted Ashta and warm, stringy cheese Knefe to crisp golden Baklava platters brushed with pure butter ghee.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Button
                onClick={onExploreClick}
                className="w-full sm:w-auto bg-[#b5874a] hover:bg-[#9a6e34] text-white font-semibold px-8 py-3.5 rounded-full shadow-lg shadow-[#b5874a]/25 text-base flex items-center justify-center gap-2 transition-all transform hover:-translate-y-0.5"
              >
                Order Fresh Sweets
                <ArrowRight className="w-4 h-4" />
              </Button>

              <Button
                onClick={onCateringClick}
                variant="outline"
                className="w-full sm:w-auto border-[#2b160f]/20 bg-white hover:bg-[#faf8f5] text-[#2b160f] font-semibold px-7 py-3.5 rounded-full text-base"
              >
                Catering & Sweet Trays
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-neutral-200/80 text-left">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-[#b5874a]/10 flex items-center justify-center shrink-0">
                  <Utensils className="w-4 h-4 text-[#b5874a]" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#2b160f]">Fresh Ashta</div>
                  <div className="text-[11px] text-neutral-500">Made Daily</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-[#b5874a]/10 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4 text-[#b5874a]" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#2b160f]">100% Halal</div>
                  <div className="text-[11px] text-neutral-500">Certified</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-[#b5874a]/10 flex items-center justify-center shrink-0">
                  <Award className="w-4 h-4 text-[#b5874a]" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#2b160f]">Pure Ghee</div>
                  <div className="text-[11px] text-neutral-500">& Pistachios</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-[#b5874a]/10 flex items-center justify-center shrink-0">
                  <Heart className="w-4 h-4 text-[#b5874a]" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#2b160f]">4.9 ★ Local</div>
                  <div className="text-[11px] text-neutral-500">Sydney Favorite</div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Main Image Frame with Gold Accent Border */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-neutral-100 group">
                <img
                  src="/images/hero.jpg"
                  alt="Chehadi Sweets Luxury Spread"
                  className="w-full h-[400px] sm:h-[500px] object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                
                {/* Subtle gradient overlay at the bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <div className="inline-block px-3 py-1 rounded-full bg-[#b5874a] text-white text-xs font-bold uppercase tracking-wider mb-1 shadow-sm">
                    Signature Platter
                  </div>
                  <h3 className="text-xl font-bold font-serif">Royal Baklava & Clotted Ashta</h3>
                  <p className="text-xs text-white/80">Crafted with authentic Aleppo pistachios and orange blossom essence</p>
                </div>
              </div>

              {/* Floating Badge 1: Fresh Daily */}
              <div className="absolute -top-4 -left-4 sm:-left-6 bg-white border border-[#b5874a]/30 rounded-2xl p-3 shadow-xl flex items-center gap-3 backdrop-blur-sm animate-in fade-in zoom-in duration-500">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-xl">
                  🍯
                </div>
                <div>
                  <div className="text-xs font-bold text-[#2b160f]">Hot Cheese Knefe</div>
                  <div className="text-[11px] text-neutral-500">Ready in Store Now</div>
                </div>
              </div>

              {/* Floating Badge 2: Halawet El Jebn */}
              <div className="absolute -bottom-4 -right-4 sm:-right-6 bg-white border border-[#b5874a]/30 rounded-2xl p-3 shadow-xl flex items-center gap-3 backdrop-blur-sm">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-xl">
                  ✨
                </div>
                <div>
                  <div className="text-xs font-bold text-[#2b160f]">Halawet El Jebn</div>
                  <div className="text-[11px] text-[#b5874a] font-semibold">Sydney's #1 Craved</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
