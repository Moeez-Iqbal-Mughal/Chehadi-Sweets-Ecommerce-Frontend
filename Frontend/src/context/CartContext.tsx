import React, { createContext, useContext, useState, useEffect } from "react"
import type { Product } from "@/data/products"

export interface CartItem {
  id: string
  product: Product
  optionIndex: number
  quantity: number
}

interface CartContextType {
  cart: CartItem[]
  isCartOpen: boolean
  setIsCartOpen: (open: boolean) => void
  addToCart: (product: Product, optionIndex: number, quantity: number) => void
  updateQuantity: (cartItemId: string, newQty: number) => void
  removeFromCart: (cartItemId: string) => void
  clearCart: () => void
  totalCount: number
  quickViewProduct: Product | null
  setQuickViewProduct: (product: Product | null) => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([])
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null)

  // Save/load from local storage if available
  useEffect(() => {
    try {
      const saved = localStorage.getItem("chehadi_cart")
      if (saved) {
        const parsed = JSON.parse(saved)
        if (Array.isArray(parsed) && parsed.length > 0) {
          setCart(parsed)
        }
      }
    } catch {
      // fallback
    }
  }, [])

  useEffect(() => {
    try {
      localStorage.setItem("chehadi_cart", JSON.stringify(cart))
    } catch {
      // fallback
    }
  }, [cart])

  const addToCart = (product: Product, optionIndex: number, quantity: number) => {
    const qtyToAdd = Math.max(1, quantity)
    setCart((prev) => {
      const existing = prev.findIndex(
        (i) => i.product.id === product.id && i.optionIndex === optionIndex
      )
      if (existing > -1) {
        return prev.map((item, idx) =>
          idx === existing
            ? { ...item, quantity: item.quantity + qtyToAdd }
            : item
        )
      }
      return [
        ...prev,
        {
          id: `${product.id}-${optionIndex}-${Date.now()}`,
          product,
          optionIndex,
          quantity: qtyToAdd,
        },
      ]
    })
  }

  const updateQuantity = (cartItemId: string, newQty: number) => {
    if (newQty <= 0) {
      removeFromCart(cartItemId)
      return
    }
    setCart((prev) =>
      prev.map((i) => (i.id === cartItemId ? { ...i, quantity: newQty } : i))
    )
  }

  const removeFromCart = (cartItemId: string) => {
    setCart((prev) => prev.filter((i) => i.id !== cartItemId))
  }

  const clearCart = () => {
    setCart([])
  }

  const totalCount = cart.reduce((acc, item) => acc + item.quantity, 0)

  return (
    <CartContext.Provider
      value={{
        cart,
        isCartOpen,
        setIsCartOpen,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        totalCount,
        quickViewProduct,
        setQuickViewProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}
