import { useState, useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { Search, Sparkles, Star } from "lucide-react"
import { PRODUCTS, CATEGORIES } from "@/data/products"
import { ProductCard } from "@/components/ProductCard"
import { useCart } from "@/context/CartContext"

export function MenuPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const initialCategory = searchParams.get("category") || "all"
  const [activeCategory, setActiveCategory] = useState(initialCategory)
  const [searchQuery, setSearchQuery] = useState("")
  const { addToCart, setQuickViewProduct } = useCart()

  useEffect(() => {
    const cat = searchParams.get("category") || "all"
    setActiveCategory(cat)
  }, [searchParams])

  const handleCategoryChange = (catId: string) => {
    setActiveCategory(catId)
    if (catId === "all") {
      setSearchParams({})
    } else {
      setSearchParams({ category: catId })
    }
  }

  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesCategory =
      activeCategory === "all" || product.category === activeCategory
    const query = searchQuery.toLowerCase().trim()
    const matchesSearch =
      query === "" ||
      product.name.toLowerCase().includes(query) ||
      product.description.toLowerCase().includes(query)

    return matchesCategory && matchesSearch
  })

  return (
    <div className="bg-[#faf8f5] min-h-screen pb-16 space-y-10">
      
      {/* Luxury Hero Banner with Background Image Overlay */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative bg-[#22110a] text-white py-16 lg:py-20 overflow-hidden border-b border-[#b5874a]/30"
      >
        <div className="absolute inset-0 opacity-20">
          <img src="/images/baklava.jpg" alt="Middle Eastern Sweets Menu" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#22110a] via-[#22110a]/80 to-transparent" />

        <div className="max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-[#dfb776]/40 text-xs font-bold text-[#dfb776] uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Order Fresh Daily • Chester Hill Patisserie</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-serif leading-tight">
            Authentic Middle Eastern Sweets Menu
          </h1>

          <p className="text-neutral-300 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
            Choose your desired portion weight or luxury gift box. Prepared fresh each morning with pure butter ghee, fresh clotted Ashta, and premium Aleppo pistachios.
          </p>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs text-neutral-200">
            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
            <span className="font-bold text-white">4.3 ★ Customer Loved</span>
            <span>•</span>
            <span className="text-[#dfb776]">Direct Store Pickup & Local Delivery</span>
          </div>
        </div>
      </motion.section>

      <div className="max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-12 space-y-10">
        
        {/* Search & Category Filter */}
        <div className="space-y-6">
          {/* Search bar */}
          <div className="max-w-md mx-auto relative">
            <Search className="w-4 h-4 text-neutral-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search Halawet El Jebn, Baklava, Knefe, Cakes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3.5 rounded-full border border-neutral-200 bg-white text-xs font-medium focus:outline-none focus:border-[#b5874a] shadow-sm"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-neutral-400 hover:text-neutral-700 font-bold"
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Pills */}
          <div className="flex items-center justify-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {CATEGORIES.map((cat) => (
              <motion.button
                key={cat.id}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => handleCategoryChange(cat.id)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                  activeCategory === cat.id
                    ? "bg-[#2b160f] text-white shadow-md shadow-[#2b160f]/20"
                    : "bg-white text-neutral-600 border border-neutral-200 hover:border-[#b5874a]/60 hover:text-[#2b160f]"
                }`}
              >
                <span>{cat.name}</span>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-neutral-200 p-8 max-w-lg mx-auto space-y-3">
            <div className="text-4xl">🔍</div>
            <h3 className="text-xl font-bold font-serif text-[#2b160f]">No sweets found</h3>
            <p className="text-xs text-neutral-500">
              We couldn't find any items matching "{searchQuery}".
            </p>
            <button
              onClick={() => {
                setSearchQuery("")
                handleCategoryChange("all")
              }}
              className="px-5 py-2 bg-[#b5874a] text-white rounded-full text-xs font-bold"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory + searchQuery}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={addToCart}
                  onQuickView={setQuickViewProduct}
                />
              ))}
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </div>
  )
}
