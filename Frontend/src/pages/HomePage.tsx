import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { Sparkles, ArrowRight, ShieldCheck, Heart, Award, Utensils } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CategoryShowcase } from "@/components/CategoryShowcase"
import { ProductCard } from "@/components/ProductCard"
import { Testimonials } from "@/components/Testimonials"
import { PRODUCTS } from "@/data/products"
import { useCart } from "@/context/CartContext"

export function HomePage() {
  const { addToCart, setQuickViewProduct } = useCart()
  const featuredProducts = PRODUCTS.slice(0, 4)

  return (
    <div className="space-y-16 lg:space-y-20">
      
      {/* Hero Section with Motion */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden bg-gradient-to-b from-[#fbf8f3] via-[#ffffff] to-[#fbf8f3] pt-8 pb-16 lg:py-20 border-b border-[#b5874a]/15"
      >
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-[#b5874a]/10 via-[#dfb776]/5 to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
            
            {/* Left Story & Headline */}
            <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
              
              <div className="inline-flex items-center gap-1.5 sm:gap-2.5 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-white border border-[#b5874a]/30 shadow-xs text-[10px] sm:text-xs font-semibold tracking-normal sm:tracking-wider text-[#2b160f] uppercase">
                <img src="/tree.svg" alt="Tree" className="w-3.5 h-3.5 sm:w-4 sm:h-4 object-contain shrink-0" />
                <span>Authentic Middle Eastern Patisserie • Chester Hill, Sydney</span>
                <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#b5874a] shrink-0" />
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#2b160f] leading-[1.15]">
                Handcrafted Middle Eastern Sweets,{" "}
                <span className="bg-gradient-to-r from-[#8c6126] via-[#b5874a] to-[#d8aa6b] bg-clip-text text-transparent italic font-serif">
                  Rooted in Heritage.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-neutral-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
                Experience authentic recipes crafted in Sydney. From slow-cooked velvety clotted Ashta and warm, stringy cheese Knefe to crisp golden Baklava platters brushed with pure butter ghee.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <Link to="/menu" className="w-full sm:w-auto">
                  <Button
                    className="w-full bg-[#b5874a] hover:bg-[#9a6e34] text-white font-semibold px-8 py-3.5 rounded-full shadow-lg shadow-[#b5874a]/25 text-base flex items-center justify-center gap-2 transition-all transform hover:-translate-y-0.5"
                  >
                    Order Fresh Sweets
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>

                <Link to="/catering" className="w-full sm:w-auto">
                  <Button
                    variant="outline"
                    className="w-full border-[#2b160f]/20 bg-white hover:bg-[#faf8f5] text-[#2b160f] font-semibold px-7 py-3.5 rounded-full text-base"
                  >
                    Catering & Sweet Trays
                  </Button>
                </Link>
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
                    <div className="text-xs font-bold text-[#2b160f]">4.3 ★ Rating</div>
                    <div className="text-[11px] text-neutral-500">Customer Loved</div>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Hero Authentic AI Media Showcase */}
            <div className="lg:col-span-6">
              <div className="relative mx-auto max-w-lg lg:max-w-none">
                
                {/* Outer Glow */}
                <div className="absolute -inset-1.5 bg-gradient-to-r from-[#b5874a]/30 via-[#dfb776]/20 to-[#b5874a]/30 rounded-[34px] blur-lg opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse" />

                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-neutral-900 group aspect-[4/3] sm:aspect-[16/11]">
                  
                  {/* High Definition Authentic AI Masterpiece */}
                  <div className="w-full h-full relative overflow-hidden">
                    <img
                      src="/images/hero_baklava_ashta.jpg"
                      alt="Chehadi Sweets Royal Baklava, Clotted Ashta & Knefe"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                    />
                  </div>

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />

                  {/* Floating Patisserie Live Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white text-xs font-semibold shadow-lg">
                      <span className="w-2 h-2 rounded-full bg-[#dfb776] animate-ping" />
                      <span>Chester Hill Patisserie Masterpiece</span>
                    </div>
                  </div>

                  {/* Bottom Text Badge */}
                  <div className="absolute bottom-5 left-5 right-5 text-white z-10 pointer-events-none space-y-1">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#b5874a] text-white text-xs font-bold uppercase tracking-wider mb-1 shadow-sm">
                      <Sparkles className="w-3.5 h-3.5" />
                      Royal Baklava & Clotted Ashta
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold font-serif leading-tight">
                      Golden Layers, Fresh Ashta & Crisp Kataifi
                    </h3>
                    <p className="text-xs text-white/85 leading-relaxed max-w-md font-normal">
                      Hand-layered daily with pure butter ghee, fresh clotted Ashta cream, orange blossom syrup & Aleppo pistachios.
                    </p>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
      </motion.section>

      {/* Category Discovery Section with Animation */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5 }}
      >
        <CategoryShowcase onSelectCategory={() => {}} />
      </motion.section>

      {/* Signature Best Sellers Section with Animation */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5 }}
        className="py-12 bg-[#faf8f5] border-y border-[#b5874a]/15"
      >
        <div className="max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#b5874a]/10 text-[#b5874a] text-xs font-bold uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Customer Favorites</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#2b160f] font-serif">
                Signature Middle Eastern Delights
              </h2>
            </div>

            <Link to="/menu">
              <Button
                variant="outline"
                className="rounded-full border-[#2b160f]/30 hover:bg-[#2b160f] hover:text-white font-semibold text-xs px-5 py-2.5 flex items-center gap-1.5"
              >
                View Full Menu
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={addToCart}
                onQuickView={setQuickViewProduct}
              />
            ))}
          </div>

        </div>
      </motion.section>

      {/* Fresh Ashta Craftsmanship Section - Warm Luxury Cream Palette */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5 }}
        className="py-6 bg-white"
      >
        <div className="max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="bg-gradient-to-br from-[#fcf9f2] via-[#faf4e6] to-[#f5ecd8] rounded-3xl p-8 sm:p-14 text-[#2b160f] relative overflow-hidden shadow-lg border border-[#b5874a]/30">
            <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-[#b5874a]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/80 border border-[#b5874a]/30 text-xs font-bold text-[#b5874a] uppercase tracking-widest shadow-sm">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Authentic Craftsmanship</span>
                </div>
                
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif leading-tight text-[#2b160f]">
                  Fresh Clotted Ashta, Made Every Morning
                </h2>
                
                <p className="text-neutral-700 text-sm sm:text-base leading-relaxed">
                  We slow-cook fresh whole Australian milk daily to yield thick, velvety clotted cream scented with rose water and orange blossom essence. Hand-rolled in delicate sweet cheese and crispy golden pastry.
                </p>
                
                <div className="pt-2">
                  <Link to="/about">
                    <Button className="bg-[#b5874a] hover:bg-[#9a6e34] text-white rounded-full px-7 py-3 font-semibold text-xs flex items-center gap-2 shadow-md">
                      Read Our Heritage Story
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="rounded-3xl overflow-hidden border-4 border-white shadow-xl aspect-video sm:aspect-square bg-neutral-100">
                  <img
                    src="/images/halawet.jpg"
                    alt="Halawet El Jebn"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Testimonials with Motion */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5 }}
      >
        <Testimonials />
      </motion.section>

    </div>
  )
}
