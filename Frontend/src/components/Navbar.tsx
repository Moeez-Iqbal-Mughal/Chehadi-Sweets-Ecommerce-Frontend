import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { ShoppingBag, MapPin, Phone, Clock, Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/context/CartContext"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [menuDropdownOpen, setMenuDropdownOpen] = useState(false)
  const { totalCount, setIsCartOpen } = useCart()
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu on page change
  useEffect(() => {
    setMobileMenuOpen(false)
    setMenuDropdownOpen(false)
    window.scrollTo(0, 0)
  }, [location.pathname])

  const menuCategories = [
    { name: "All Delicacies", path: "/menu" },
    { name: "Fresh Ashta Sweets", path: "/menu?category=ashta" },
    { name: "Baklava Platters", path: "/menu?category=baklava" },
    { name: "Warm Cheese Knefe", path: "/menu?category=knefe" },
    { name: "Maamoul & Kaak", path: "/menu?category=maamoul" },
    { name: "Cakes & Gift Tins", path: "/menu?category=cakes" },
  ]

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Top Announcement Bar */}
      <div className="bg-[#2b160f] text-[#f7f2ea] text-[11px] sm:text-xs py-1.5 sm:py-2 px-3 sm:px-4 border-b border-[#b5874a]/20">
        <div className="max-w-[1680px] mx-auto px-2 sm:px-8 lg:px-12 flex flex-col sm:flex-row justify-between items-center gap-1 sm:gap-2 text-center sm:text-left">
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="inline-flex items-center gap-1.5 text-[#b5874a] font-semibold text-[11px] sm:text-xs">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#b5874a] animate-pulse"></span>
              Baked Fresh Daily in Chester Hill
            </span>
            <span className="hidden md:inline text-[#f7f2ea]/40">•</span>
            <span className="hidden md:flex items-center gap-1 text-[#f7f2ea]/80">
              <MapPin className="w-3.5 h-3.5 text-[#b5874a]" /> 150–152 Waldron Rd, Chester Hill NSW
            </span>
          </div>

          <div className="flex items-center gap-3 sm:gap-4 text-[#f7f2ea]/80 text-[10px] sm:text-xs">
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#b5874a]" /> Open 7 Days: 9:00 AM – 10:00 PM
            </span>
            <a
              href="tel:+61410390945"
              className="hidden lg:flex items-center gap-1 hover:text-[#b5874a] transition-colors font-semibold"
            >
              <Phone className="w-3.5 h-3.5 text-[#b5874a]" /> +61 410 390 945
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className={`w-full bg-white/95 backdrop-blur-md transition-all duration-300 border-b ${
          isScrolled ? "shadow-md border-[#b5874a]/20 py-2.5" : "border-neutral-100 py-3.5"
        }`}
      >
        <div className="max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-12 flex items-center justify-between">
          
          {/* Brand Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src="/logo.svg"
              alt="Chehadi Sweets"
              className="h-12 sm:h-14 w-auto object-contain transition-transform group-hover:scale-105 duration-300"
            />
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors py-1 relative group ${
                location.pathname === "/" ? "text-[#b5874a] font-bold" : "text-[#2b160f] hover:text-[#b5874a]"
              }`}
            >
              Home
              <span className={`absolute bottom-0 left-0 h-0.5 bg-[#b5874a] transition-all duration-300 ${location.pathname === "/" ? "w-full" : "w-0 group-hover:w-full"}`}></span>
            </Link>

            {/* Menu with Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setMenuDropdownOpen(true)}
              onMouseLeave={() => setMenuDropdownOpen(false)}
            >
              <Link
                to="/menu"
                className={`text-sm font-medium transition-colors py-1 flex items-center gap-1 ${
                  location.pathname.startsWith("/menu") ? "text-[#b5874a] font-bold" : "text-[#2b160f] hover:text-[#b5874a]"
                }`}
              >
                <span>Sweets Menu</span>
                <ChevronDown className="w-3.5 h-3.5 text-neutral-400 group-hover:text-[#b5874a]" />
              </Link>

              {/* Dropdown Menu */}
              {menuDropdownOpen && (
                <div className="absolute top-full left-0 w-56 pt-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="bg-white rounded-2xl shadow-xl border border-neutral-100 p-2 space-y-1">
                    {menuCategories.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className="block px-3 py-2 text-xs font-medium text-[#2b160f] hover:bg-[#faf8f5] hover:text-[#b5874a] rounded-xl transition-colors"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/about"
              className={`text-sm font-medium transition-colors py-1 relative group ${
                location.pathname === "/about" ? "text-[#b5874a] font-bold" : "text-[#2b160f] hover:text-[#b5874a]"
              }`}
            >
              Our Story & Craft
              <span className={`absolute bottom-0 left-0 h-0.5 bg-[#b5874a] transition-all duration-300 ${location.pathname === "/about" ? "w-full" : "w-0 group-hover:w-full"}`}></span>
            </Link>

            <Link
              to="/catering"
              className={`text-sm font-medium transition-colors py-1 relative group ${
                location.pathname === "/catering" ? "text-[#b5874a] font-bold" : "text-[#2b160f] hover:text-[#b5874a]"
              }`}
            >
              Catering & Events
              <span className={`absolute bottom-0 left-0 h-0.5 bg-[#b5874a] transition-all duration-300 ${location.pathname === "/catering" ? "w-full" : "w-0 group-hover:w-full"}`}></span>
            </Link>

            <Link
              to="/contact"
              className={`text-sm font-medium transition-colors py-1 relative group ${
                location.pathname === "/contact" ? "text-[#b5874a] font-bold" : "text-[#2b160f] hover:text-[#b5874a]"
              }`}
            >
              Visit Store & Contact
              <span className={`absolute bottom-0 left-0 h-0.5 bg-[#b5874a] transition-all duration-300 ${location.pathname === "/contact" ? "w-full" : "w-0 group-hover:w-full"}`}></span>
            </Link>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            <Link to="/menu" className="hidden sm:inline-block">
              <Button
                variant="outline"
                className="rounded-full border-[#b5874a]/40 text-[#2b160f] hover:bg-[#faf8f5] text-xs font-semibold px-4 py-2"
              >
                Order Online
              </Button>
            </Link>

            <Button
              onClick={() => setIsCartOpen(true)}
              className={`relative bg-[#2b160f] hover:bg-[#3f2117] text-[#f7f2ea] border border-[#b5874a]/40 shadow-sm rounded-full font-medium transition-all flex items-center justify-center cursor-pointer ${
                totalCount > 0
                  ? "px-3 sm:px-4 py-2"
                  : "w-9 h-9 sm:w-auto sm:px-4 sm:py-2 p-0"
              }`}
              aria-label="View shopping cart"
            >
              <ShoppingBag
                className={`w-4 h-4 text-[#b5874a] ${
                  totalCount > 0 ? "mr-1.5" : "mr-0 sm:mr-1.5"
                }`}
              />
              <span className="hidden sm:inline text-xs sm:text-sm">Cart</span>
              {totalCount > 0 && (
                <span className="ml-1.5 bg-[#b5874a] text-white text-[11px] sm:text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center animate-bounce">
                  {totalCount}
                </span>
              )}
            </Button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#2b160f] hover:text-[#b5874a] focus:outline-none"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-neutral-200 px-4 pt-3 pb-6 space-y-2 animate-in slide-in-from-top duration-200">
            <Link
              to="/"
              className="block px-3 py-2 text-base font-medium text-[#2b160f] hover:bg-[#faf8f5] rounded-xl"
            >
              Home
            </Link>
            <Link
              to="/menu"
              className="block px-3 py-2 text-base font-medium text-[#2b160f] hover:bg-[#faf8f5] rounded-xl"
            >
              Full Sweets Menu
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 text-base font-medium text-[#2b160f] hover:bg-[#faf8f5] rounded-xl"
            >
              Our Story & Craft
            </Link>
            <Link
              to="/catering"
              className="block px-3 py-2 text-base font-medium text-[#2b160f] hover:bg-[#faf8f5] rounded-xl"
            >
              Catering & Events
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-2 text-base font-medium text-[#2b160f] hover:bg-[#faf8f5] rounded-xl"
            >
              Visit Store & Contact
            </Link>

            <div className="pt-3 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-600">
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-[#b5874a]" /> 9:00 AM – 10:00 PM (Daily)
              </span>
              <a href="tel:+61410390945" className="font-bold text-[#b5874a]">
                +61 410 390 945
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
