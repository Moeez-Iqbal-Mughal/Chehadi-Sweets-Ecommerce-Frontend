import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Check, ShoppingBag, Sparkles, ShieldCheck, Trash2 } from "lucide-react"
import type { Product } from "@/data/products"
import { Button } from "@/components/ui/button"
import { useCart } from "@/context/CartContext"

interface ProductModalProps {
  product: Product | null
  onClose: () => void
  onAddToCart: (product: Product, optionIndex: number, quantity: number) => void
}

export function ProductModal({ product, onClose, onAddToCart }: ProductModalProps) {
  const { cart, updateQuantity, removeFromCart } = useCart()
  const [selectedQty, setSelectedQty] = useState(1)
  const [justAdded, setJustAdded] = useState(false)

  const cartItem = product ? cart.find((i) => i.product.id === product.id) : null
  const inCartCount = cartItem ? cartItem.quantity : 0

  const handleAdd = () => {
    if (!product || justAdded) return
    if (inCartCount > 0 && cartItem) {
      updateQuantity(cartItem.id, inCartCount + 1)
    } else {
      onAddToCart(product, 0, selectedQty)
    }
    setJustAdded(true)
    setTimeout(() => {
      setJustAdded(false)
    }, 1000)
  }

  const handleRemove = () => {
    if (cartItem) {
      removeFromCart(cartItem.id)
      setSelectedQty(1)
      setJustAdded(false)
    }
  }

  return (
    <AnimatePresence>
      {product && (
        <motion.div
          key="product-modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/65 backdrop-blur-sm cursor-pointer overflow-y-auto"
        >
          <motion.div
            key="product-modal-card"
            initial={{ opacity: 0, scale: 0.94, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 15 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-2xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-[#b5874a]/20 max-h-[90vh] flex flex-col md:flex-row cursor-default my-auto"
          >
            {/* Product Image */}
            <div className="md:w-1/2 relative bg-neutral-100 min-h-[220px] md:min-h-[380px]">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover object-center"
              />

              {/* Badges on image */}
              <div className="absolute bottom-3 left-3 right-3 flex flex-wrap gap-1.5">
                {product.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-full bg-white/95 text-[#2b160f] text-xs font-semibold shadow-sm backdrop-blur-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* In Cart Badge on Image */}
              {inCartCount > 0 && (
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-full bg-emerald-600 text-white text-[11px] font-bold shadow-md flex items-center gap-1">
                    <Check className="w-3 h-3" />
                    <span>In Cart ({inCartCount})</span>
                  </span>
                </div>
              )}
            </div>

            {/* Details & Action */}
            <div className="p-6 md:w-1/2 flex flex-col justify-between overflow-y-auto space-y-4">
              <div className="space-y-3">
                {/* Header: Title & Close Button */}
                <div className="flex items-start justify-between gap-3">
                  <h2 className="text-xl sm:text-2xl font-bold text-[#2b160f] font-serif leading-tight">
                    {product.name}
                  </h2>

                  <button
                    onClick={onClose}
                    className="w-8 h-8 rounded-full bg-[#faf8f5] hover:bg-neutral-200 text-[#2b160f] flex items-center justify-center shrink-0 shadow-sm transition-colors cursor-pointer"
                    title="Close"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  {product.description}
                </p>

                {/* Highlights */}
                <div className="space-y-1.5 pt-1 text-xs text-neutral-600">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>100% Halal Certified Ingredients</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#b5874a] shrink-0" />
                    <span>Crafted Fresh Daily at Chehadi Sweets</span>
                  </div>
                </div>
              </div>

              {/* Footer controls */}
              <div className="pt-4 border-t border-neutral-100 flex flex-wrap sm:flex-nowrap items-center justify-between gap-3">
                <div className="shrink-0">
                  <div className="text-[10px] text-neutral-400 font-semibold uppercase tracking-wider">
                    Total Price
                  </div>
                  <div className="text-xl sm:text-2xl font-bold text-[#2b160f] font-serif">
                    ${(product.price * (inCartCount > 0 ? inCartCount : selectedQty)).toFixed(2)}
                  </div>
                </div>

                {inCartCount > 0 ? (
                  /* Controls when item is ALREADY IN CART */
                  <div className="flex items-center gap-2 shrink-0">
                    {/* Stepper: controls cart directly */}
                    <div className="flex items-center border border-neutral-200 rounded-full px-2 h-9 bg-[#faf8f5] shadow-2xs">
                      <button
                        type="button"
                        onClick={() => cartItem && updateQuantity(cartItem.id, inCartCount - 1)}
                        className="w-5 h-5 flex items-center justify-center font-bold text-neutral-600 hover:text-black cursor-pointer"
                        title="Decrease quantity"
                      >
                        -
                      </button>
                      <span className="w-6 text-center font-bold text-xs text-[#2b160f]">
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

                    {/* 1-Click Remove from Cart Button */}
                    <button
                      type="button"
                      onClick={handleRemove}
                      className="h-9 px-4 rounded-full border border-red-200 bg-red-50 hover:bg-red-100 text-red-600 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer shadow-xs"
                      title="Remove from Cart"
                    >
                      <Trash2 className="w-3.5 h-3.5 shrink-0" />
                      <span>Remove</span>
                    </button>
                  </div>
                ) : (
                  /* Controls when item is NOT IN CART */
                  <div className="flex items-center gap-2 shrink-0">
                    <div className="flex items-center border border-neutral-200 rounded-full px-2 h-9 bg-[#faf8f5] shadow-2xs">
                      <button
                        type="button"
                        onClick={() => setSelectedQty(Math.max(1, selectedQty - 1))}
                        className="w-5 h-5 flex items-center justify-center font-bold text-neutral-600 hover:text-black cursor-pointer"
                      >
                        -
                      </button>
                      <span className="w-6 text-center font-bold text-xs text-[#2b160f]">
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
                      className="rounded-full px-5 h-9 font-bold text-xs bg-[#b5874a] hover:bg-[#9a6e34] text-white shadow-md transition-all cursor-pointer whitespace-nowrap shrink-0 flex items-center justify-center gap-1.5"
                    >
                      <ShoppingBag className="w-3.5 h-3.5 shrink-0" />
                      <span>Add to Cart {selectedQty > 1 ? `(${selectedQty})` : ""}</span>
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
