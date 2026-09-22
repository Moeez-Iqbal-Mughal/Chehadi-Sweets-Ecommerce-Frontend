import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { Sparkles, CheckCircle2, Heart, Award, ArrowRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

export function AboutPage() {
  return (
    <div className="bg-white min-h-screen pb-16 space-y-12">
      
      {/* Luxury Hero Banner with Background Image Overlay */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative bg-[#22110a] text-white py-16 lg:py-20 overflow-hidden border-b border-[#b5874a]/30"
      >
        <div className="absolute inset-0 opacity-20">
          <img src="/images/maamoul.jpg" alt="Heritage Middle Eastern Craft" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#22110a] via-[#22110a]/80 to-transparent" />

        <div className="max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-[#dfb776]/40 text-xs font-bold text-[#dfb776] uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Our Story & Sweet Heritage</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-serif leading-tight">
            A Sweet Taste of Middle Eastern Confectionery
          </h1>

          <p className="text-neutral-300 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
            Chehadi Sweets, nestled in the Chester Hill neighbourhood of Sydney, specialises in a variety of authentic Middle Eastern desserts and celebration cakes.
          </p>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs text-neutral-200">
            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
            <span className="font-bold text-white">Customer Rating 4.3 ★</span>
            <span>•</span>
            <span className="text-[#dfb776]">Chester Hill, Sydney</span>
          </div>
        </div>
      </motion.section>

      {/* Main Story Content with Motion */}
      <section className="py-8 lg:py-12">
        <div className="max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Story Images */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6 space-y-4"
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3] bg-neutral-100">
                <img
                  src="/images/maamoul.jpg"
                  alt="Traditional Middle Eastern Confectionery"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl overflow-hidden shadow-md border-2 border-white aspect-[4/3]">
                  <img
                    src="/images/halawet.jpg"
                    alt="Halawet El Jebn Pieces"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-md border-2 border-white aspect-[4/3]">
                  <img
                    src="/images/baklava.jpg"
                    alt="Baklava Mixed Plate"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>

            {/* Story Text */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6 space-y-6"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-[#2b160f] font-serif leading-tight">
                About Chehadi Sweets
              </h2>
              
              <div className="p-6 rounded-3xl bg-[#faf8f5] border border-[#b5874a]/25 text-neutral-700 text-sm sm:text-base leading-relaxed space-y-4 shadow-sm">
                <p>
                  <strong>Chehadi Sweets</strong>, nestled in the Chester Hill neighbourhood of Sydney, specialises in a variety of Middle Eastern desserts. The dessert shop is known for its delectable cakes, including <strong>Black Forest</strong> and <strong>Chocolate Mud Cake</strong>, as well as a selection of unique Ashta plates like <strong>Iznood</strong> and <strong>Halawet El Jebn Pieces</strong>.
                </p>

                <p>
                  Among the most popular items ordered are <strong>Halawet El Jebn Pieces</strong> and <strong>Iznood</strong>, particularly in the evening. Customers also enjoy the <strong>Baklava Mixed Plate</strong> and <strong>Mixed Maamoul</strong> from their extensive menu.
                </p>

                <p className="font-semibold text-[#b5874a]">
                  With a customer rating of 4.3, Chehadi Sweets offers a sweet taste of Middle Eastern confectionery.
                </p>
              </div>

              {/* Pillars */}
              <div className="space-y-3 pt-1">
                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white border border-neutral-200 shadow-sm">
                  <Award className="w-5 h-5 text-[#b5874a] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-bold text-[#2b160f]">Unique Fresh Ashta Plates</h3>
                    <p className="text-xs text-neutral-500 mt-0.5">
                      Handcrafted Halawet El Jebn pieces and crispy golden Iznood, prepared fresh daily.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white border border-neutral-200 shadow-sm">
                  <CheckCircle2 className="w-5 h-5 text-[#b5874a] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-bold text-[#2b160f]">Baklava Mixed Plates & Mixed Maamoul</h3>
                    <p className="text-xs text-neutral-500 mt-0.5">
                      Layered with pure clarified butter, roasted pistachios, and heritage semolina shortbreads.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white border border-neutral-200 shadow-sm">
                  <Heart className="w-5 h-5 text-[#b5874a] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-bold text-[#2b160f]">Delectable Celebration Cakes</h3>
                    <p className="text-xs text-neutral-500 mt-0.5">
                      Traditional Black Forest, rich Chocolate Mud Cakes, and custom celebration platters.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                <Link to="/menu" className="w-full sm:w-auto">
                  <Button className="w-full sm:w-auto bg-[#b5874a] hover:bg-[#9a6e34] text-white rounded-full px-7 py-3 font-semibold text-xs flex items-center justify-center gap-2 shadow-md cursor-pointer">
                    Explore Our Menu
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                <Link to="/contact" className="w-full sm:w-auto">
                  <Button variant="outline" className="w-full sm:w-auto border-neutral-300 text-[#2b160f] rounded-full px-7 py-3 font-semibold text-xs hover:bg-[#faf8f5] flex items-center justify-center cursor-pointer">
                    Visit Our Patisserie
                  </Button>
                </Link>
              </div>

            </motion.div>

          </div>

        </div>
      </section>

    </div>
  )
}
