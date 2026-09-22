import { CheckCircle2, Sparkles, Heart } from "lucide-react"

export function StorySection() {
  return (
    <section id="our-story" className="py-20 bg-[#faf7f2] relative overflow-hidden border-y border-[#b5874a]/15">
      {/* Background cedar watermark */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-5 pointer-events-none translate-x-1/4">
        <img src="/tree.svg" alt="" className="w-[600px] h-[600px]" />
      </div>

      <div className="max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Story Images Collage */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Primary Large Image */}
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3]">
                <img
                  src="/images/maamoul.jpg"
                  alt="Chehadi Sweets Artisanal Craftsmanship"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Secondary Floating Image */}
              <div className="absolute -bottom-8 -right-6 w-3/5 rounded-2xl overflow-hidden shadow-2xl border-4 border-white hidden sm:block">
                <img
                  src="/images/halawet.jpg"
                  alt="Fresh Ashta Clotted Cream"
                  className="w-full h-44 object-cover"
                />
              </div>

              {/* Floating Stat Badge */}
              <div className="absolute -top-4 -left-4 bg-[#2b160f] text-[#f7f2ea] rounded-2xl p-4 shadow-xl border border-[#b5874a]/40">
                <div className="text-3xl font-extrabold font-serif text-[#dfb776]">100%</div>
                <div className="text-xs text-neutral-300 font-medium">Authentic Recipes</div>
              </div>

            </div>
          </div>

          {/* Right Column: Story Text */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#b5874a] tracking-widest uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Our Heritage & Tradition</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2b160f] font-serif leading-tight">
              A Legacy of Middle Eastern Sweet Mastery
            </h2>

            <p className="text-base text-neutral-600 leading-relaxed">
              At <strong className="text-[#2b160f]">Chehadi Sweets</strong>, we believe every sweet tells a story of hospitality, celebrations, and centuries-old culinary tradition. Located in the heart of Chester Hill, Sydney, our confectionery continues the time-honored techniques passed down through generations.
            </p>

            <p className="text-sm text-neutral-600 leading-relaxed">
              We never compromise on quality: our Ashta is clotted fresh daily using rich Australian milk, our phyllo pastry is brushed with pure butter ghee, and our sweets are scented with pure orange blossom and rose water essences.
            </p>

            {/* Pillar Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#b5874a] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-[#2b160f]">Fresh Clotted Ashta</h4>
                  <p className="text-xs text-neutral-500">Prepared fresh every morning for Halawet El Jebn and Iznood.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#b5874a] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-[#2b160f]">Aleppo & Turkish Pistachios</h4>
                  <p className="text-xs text-neutral-500">Only premium whole kernels for vibrant color and deep nutty flavor.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#b5874a] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-[#2b160f]">Pure Ghee & Rose Water</h4>
                  <p className="text-xs text-neutral-500">Traditional golden syrup infused with natural floral distillates.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#b5874a] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-[#2b160f]">Wedding & Eid Platters</h4>
                  <p className="text-xs text-neutral-500">Custom sweet tables, gift boxes, and catering for all milestone events.</p>
                </div>
              </div>
            </div>

            {/* Quote Box */}
            <div className="p-4 rounded-2xl bg-white border border-[#b5874a]/25 flex items-center gap-3.5 shadow-sm">
              <div className="w-10 h-10 rounded-full bg-[#b5874a]/10 flex items-center justify-center text-[#b5874a] shrink-0">
                <Heart className="w-5 h-5 fill-[#b5874a]/30" />
              </div>
              <div className="text-xs text-neutral-700 italic">
                “Every piece is an invitation to taste the genuine warmth and sweetness of Middle Eastern hospitality.”
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
