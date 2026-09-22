import { useState, useEffect } from "react"
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { ProductModal } from "@/components/ProductModal"
import { CartDrawer } from "@/components/CartDrawer"
import { HomePage } from "@/pages/HomePage"
import { MenuPage } from "@/pages/MenuPage"
import { AboutPage } from "@/pages/AboutPage"
import { CateringPage } from "@/pages/CateringPage"
import { ContactPage } from "@/pages/ContactPage"
import { CartProvider, useCart } from "@/context/CartContext"

function AppContent() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    addToCart,
    updateQuantity,
    removeFromCart,
    clearCart,
    quickViewProduct,
    setQuickViewProduct,
  } = useCart()

  const location = useLocation()

  // Track top scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100
        setScrollProgress(progress)
      } else {
        setScrollProgress(0)
      }
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [location.pathname])

  return (
    <div className="min-h-screen bg-white text-[#2b160f] flex flex-col font-sans selection:bg-[#b5874a] selection:text-white relative">
      {/* Top Reading Scroll Indicator Line */}
      <div
        className="fixed top-0 left-0 h-[3.5px] bg-gradient-to-r from-[#8c6126] via-[#b5874a] to-[#e4be81] z-50 transition-all duration-75 pointer-events-none shadow-sm shadow-[#b5874a]/50"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Navigation */}
      <Navbar />

      {/* Dynamic Page Routes */}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/catering" element={<CateringPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer />

      {/* Quick View Product Modal */}
      <ProductModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onAddToCart={addToCart}
      />

      {/* Slide-over Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cart}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeFromCart}
        onClearCart={clearCart}
      />
    </div>
  )
}

export default function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </CartProvider>
  )
}
