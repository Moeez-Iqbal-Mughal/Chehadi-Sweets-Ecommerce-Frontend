import { useState } from "react"
import { motion } from "framer-motion"
import { Plus, Check, Eye, Trash2 } from "lucide-react"
import type { Product } from "@/data/products"
import { Button } from "@/components/ui/button"
import { useCart } from "@/context/CartContext"

interface ProductCardProps {
  product: Product
  onAddToCart: (product: Product, optionIndex: number, quantity: number) => void
  onQuickView: (product: Product) => void
}

export function ProductCard({ product, onAddToCart, onQuickView }: ProductCardProps) {
  const { cart, updateQuantity, removeFromCart } = useCart()
  const [selectedQty, setSelectedQty] = useState(1)
  const [justAdded, setJustAdded] = useState(false)
  const [showDescTooltip, setShowDescTooltip] = useState(false)

  // Find if this product is already in the cart
  const cartItem = cart.find((i) => i.product.id === product.id)
  const inCartCount = cartItem ? cartItem.quantity : 0

  const handleAdd = () => {
    if (justAdded) return
    onAddToCart(product, 0, selectedQty)
    setJustAdded(true)
    setTimeout(() => {
      setJustAdded(false)
      setSelectedQty(1)
    }, 1000)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      className={`group bg-white rounded-3xl border shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative hover:z-30 ${
        inCartCount > 0 ? "border-[#b5874a]/50 ring-1 ring-[#b5874a]/20" : "border-neutral-200/80"
      }`}
    >
      
      {/* Product Image Frame */}
      <div
        onClick={() => onQuickView(product)}
        className="relative aspect-[4/3] w-full overflow-hidden rounded-t-3xl bg-neutral-100 cursor-pointer"
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
        />

        {/* Top Left Badges */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 max-w-[80%]">
          {product.isBestSeller && (
            <span className="px-2.5 py-0.5 rounded-full bg-[#b5874a] text-white text-[11px] font-bold shadow-sm">
              Best Seller
            </span>
          )}
          {product.isFreshDaily && (
            <span className="px-2.5 py-0.5 rounded-full bg-[#2b160f] text-white text-[11px] font-medium shadow-sm">
              Fresh Daily
            </span>
          )}
        </div>

        {/* Persistent In Cart Badge */}
        {inCartCount > 0 && (
          <div className="absolute top-3 right-12 z-10">
            <span className="px-2.5 py-1 rounded-full bg-emerald-600 text-white text-[11px] font-bold shadow-md flex items-center gap-1">
              <Check className="w-3 h-3" />
              <span>In Cart ({inCartCount})</span>
            </span>
          </div>
        )}

        {/* Quick View Button */}
        <button
          onClick={(e) => {
            e.stopPropagation()
            onQuickView(product)
          }}
          className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm text-neutral-700 hover:text-[#b5874a] hover:bg-white flex items-center justify-center shadow-md transition-all opacity-0 group-hover:opacity-100 cursor-pointer z-10"
          title="Quick View Details"
        >
          <Eye className="w-4 h-4" />
        </button>
      </div>

      {/* Content Body */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div>
          {/* Title */}
          <div className="mb-1.5">
            <h3
              onClick={() => onQuickView(product)}
              className="text-lg font-bold text-[#2b160f] group-hover:text-[#b5874a] transition-colors font-serif leading-snug cursor-pointer line-clamp-1"
            >
              {product.name}
            </h3>
          </div>

          {/* Product Description with Compact Tooltip on Hover */}
          <div
            className="relative cursor-pointer mb-2"
            onMouseEnter={() => setShowDescTooltip(true)}
            onMouseLeave={() => setShowDescTooltip(false)}
          >
            <p className="text-xs text-neutral-500 line-clamp-2 leading-relaxed hover:text-neutral-800 transition-colors">
              {product.description}
            </p>

            {/* Compact Tooltip Dropdown */}
            {showDescTooltip && (
              <motion.div
                initial={{ opacity: 0, y: -4, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -4, scale: 0.96 }}
                transition={{ duration: 0.15 }}
                className="absolute top-full left-0 right-0 mt-1.5 z-50 p-3 bg-[#24130b] text-white rounded-2xl shadow-2xl border border-[#b5874a]/40 text-[11px] pointer-events-none space-y-1.5 backdrop-blur-md"
              >
                <div className="flex items-center justify-between text-[10px] text-[#dfb776] font-bold">
                  <span>Authentic Recipe</span>
                  <span>Chehadi Sweets</span>
                </div>
                <p className="text-[11px] text-neutral-200 leading-snug font-normal">
                  {product.description}
                </p>
                <div className="flex flex-wrap gap-1 pt-1 border-t border-white/10">
                  {product.tags.map((t) => (
                    <span
                      key={t}
                      className="px-1.5 py-0.5 rounded bg-white/10 text-[9px] text-white font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </div>

        {/* Footer: Price & Add to Cart Controls */}
        <div className="pt-3 border-t border-neutral-100 flex items-center justify-between gap-2">
          <div className="shrink-0">
            <div className="text-[10px] text-neutral-400 font-semibold uppercase tracking-wider">Price</div>
            <div className="text-lg sm:text-xl font-extrabold text-[#2b160f] font-serif">
              ${(product.price * (inCartCount > 0 ? inCartCount : selectedQty)).toFixed(2)}
            </div>
          </div>

          {inCartCount > 0 ? (
            /* Controls when item is ALREADY IN CART */
            <div className="flex items-center gap-1.5 shrink-0">
              {/* Stepper directly updates cart */}
              <div className="flex items-center border border-neutral-200 rounded-full bg-[#faf8f5] px-2 h-8 text-xs shrink-0 shadow-2xs">
                <button
                  type="button"
                  onClick={() => cartItem && updateQuantity(cartItem.id, inCartCount - 1)}
                  className="w-5 h-5 flex items-center justify-center font-bold text-neutral-600 hover:text-black cursor-pointer"
                  title="Decrease quantity"
                >
                  -
                </button>
                <span className="w-5 text-center font-bold text-[#2b160f] text-xs">
                  {inCartCount}
                </span>
                <button
                  type="button"
                  onClick={() => cartItem && updateQuantity(cartItem.id, inCartCount + 1)}
                  className="w-5 h-5 flex items-center justify-center font-bold text-neutral-600 hover:text-black cursor-pointer"
                  title="Increase quantity"
                >
                  +
                </button>
              </div>

              {/* 1-Click Remove from Cart */}
              <button
                type="button"
                onClick={() => cartItem && removeFromCart(cartItem.id)}
                className="w-8 h-8 rounded-full border border-red-200 bg-red-50 hover:bg-red-100 text-red-600 flex items-center justify-center transition-colors cursor-pointer shadow-2xs shrink-0"
                title="Remove from Cart"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>

              {/* In Cart Indicator (Clicking does nothing) */}
              <div className="rounded-full px-2.5 h-8 font-semibold text-xs bg-emerald-600 text-white flex items-center justify-center gap-1 shadow-xs select-none shrink-0">
                <Check className="w-3.5 h-3.5 shrink-0" />
                <span className="hidden sm:inline">In Cart</span>
              </div>
            </div>
          ) : (
            /* Controls when item is NOT IN CART */
            <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
              <div className="flex items-center border border-neutral-200 rounded-full bg-[#faf8f5] px-2 h-8 text-xs shrink-0 shadow-2xs">
                <button
                  type="button"
                  onClick={() => setSelectedQty(Math.max(1, selectedQty - 1))}
                  className="w-5 h-5 flex items-center justify-center font-bold text-neutral-600 hover:text-black cursor-pointer"
                >
                  -
                </button>
                <span className="w-5 text-center font-bold text-[#2b160f] text-xs">
                  {selectedQty}
                </span>
                <button
                  type="button"
                  onClick={() => setSelectedQty(selectedQty + 1)}
                  className="w-5 h-5 flex items-center justify-center font-bold text-neutral-600 hover:text-black cursor-pointer"
                >
                  +
                </button>
              </div>

              <Button
                onClick={handleAdd}
                className="rounded-full px-3.5 sm:px-4 h-8 font-semibold text-xs bg-[#b5874a] hover:bg-[#9a6e34] text-white transition-all flex items-center justify-center gap-1 shadow-xs cursor-pointer shrink-0"
              >
                <Plus className="w-3.5 h-3.5 shrink-0" />
                <span>Add {selectedQty > 1 ? `(${selectedQty})` : ""}</span>
              </Button>
            </div>
          )}
        </div>

      </div>

    </motion.div>
  )
}
