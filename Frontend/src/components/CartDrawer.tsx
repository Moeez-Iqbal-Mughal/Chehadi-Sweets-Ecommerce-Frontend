import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  X,
  Trash2,
  ShoppingBag,
  ArrowRight,
  Truck,
  Store,
  CheckCircle2,
  Lock,
  Sparkles,
  MapPin,
  Clock,
} from "lucide-react"
import type { Product } from "@/data/products"
import { Button } from "@/components/ui/button"
import { CalendarPicker } from "@/components/ui/calendar-picker"
import { CustomSelect } from "@/components/ui/select"
import { StripeCheckoutModal } from "./StripeCheckoutModal"

export interface CartItem {
  id: string
  product: Product
  optionIndex: number
  quantity: number
}

interface CartDrawerProps {
  isOpen: boolean
  onClose: () => void
  items: CartItem[]
  onUpdateQuantity: (cartItemId: string, newQty: number) => void
  onRemoveItem: (cartItemId: string) => void
  onClearCart: () => void
}

export function CartDrawer({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}: CartDrawerProps) {
  const [fulfillment, setFulfillment] = useState<"pickup" | "delivery">("pickup")
  const [pickupDate, setPickupDate] = useState("")
  const [timeSlot, setTimeSlot] = useState("ASAP (30-45 mins)")
  const [streetAddress, setStreetAddress] = useState("")
  const [suburb, setSuburb] = useState("")
  const [postcode, setPostcode] = useState("")
  const [orderNotes, setOrderNotes] = useState("")
  const [showStripeModal, setShowStripeModal] = useState(false)
  const [orderPlaced, setOrderPlaced] = useState(false)

  const timeSlotOptions = [
    { value: "ASAP (30-45 mins)", label: "ASAP (30–45 mins)" },
    { value: "10:00 AM - 12:00 PM", label: "10:00 AM – 12:00 PM" },
    { value: "12:00 PM - 2:00 PM", label: "12:00 PM – 2:00 PM" },
    { value: "2:00 PM - 4:00 PM", label: "2:00 PM – 4:00 PM" },
    { value: "4:00 PM - 6:00 PM", label: "4:00 PM – 6:00 PM" },
    { value: "6:00 PM - 8:00 PM", label: "6:00 PM – 8:00 PM" },
    { value: "8:00 PM - 9:30 PM", label: "8:00 PM – 9:30 PM" },
  ]

  const subtotal = items.reduce((acc, item) => {
    const opt = item.product.options[item.optionIndex] || item.product.options[0]
    return acc + opt.price * item.quantity
  }, 0)

  const deliveryFee = fulfillment === "delivery" && subtotal < 80 ? 12.0 : 0
  const freeDeliveryThreshold = 80
  const progressPercent = Math.min(100, (subtotal / freeDeliveryThreshold) * 100)

  const formattedDeliveryDetails =
    fulfillment === "delivery"
      ? `${streetAddress ? streetAddress + ", " : ""}${suburb ? suburb + " " : ""}${postcode}`
      : "150–152 Waldron Rd, Chester Hill NSW 2162"

  const combinedDateInfo = `${pickupDate ? pickupDate : "Today"} (${timeSlot})`
  const combinedNotes = `${orderNotes ? orderNotes + " | " : ""}${
    fulfillment === "delivery"
      ? "Delivery to: " + formattedDeliveryDetails
      : "Pickup at Chester Hill Store"
  }`

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <div
            onClick={onClose}
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/70 backdrop-blur-sm cursor-pointer overflow-y-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-neutral-200 overflow-hidden my-auto cursor-default flex flex-col max-h-[92vh]"
            >
              {/* Modal Header */}
              <div className="px-6 py-4 border-b border-neutral-100 flex items-center justify-between bg-[#fbf8f3] shrink-0">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-[#b5874a]/10 border border-[#b5874a]/20 flex items-center justify-center text-[#b5874a]">
                    <ShoppingBag className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-lg sm:text-xl font-bold text-[#2b160f] font-serif">
                      Your Sweet Selection
                    </h2>
                    <p className="text-xs text-neutral-500">
                      {items.length} {items.length === 1 ? "item" : "items"} in cart • Handcrafted in Chester Hill
                    </p>
                  </div>
                </div>

                <button
                  onClick={onClose}
                  aria-label="Close cart"
                  className="w-9 h-9 rounded-full bg-white border border-neutral-200 text-neutral-500 hover:text-black hover:border-neutral-400 flex items-center justify-center transition-colors cursor-pointer shadow-xs"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Order Confirmation Screen */}
              {orderPlaced ? (
                <div className="p-8 sm:p-12 text-center space-y-5 my-auto">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold font-serif text-[#2b160f]">
                    Order Placed Successfully!
                  </h3>
                  <p className="text-sm text-neutral-600 max-w-md mx-auto leading-relaxed">
                    Thank you for ordering with Chehadi Sweets. Our master pastry chefs are preparing your handcrafted sweet selection fresh.
                  </p>
                  <div className="p-4 bg-[#faf8f5] rounded-2xl text-xs text-left max-w-md mx-auto space-y-2 border border-[#b5874a]/20 shadow-xs">
                    <div className="font-bold text-[#2b160f] text-sm">Fulfillment Details:</div>
                    <div className="flex justify-between">
                      <span className="text-neutral-500">Method:</span>
                      <span className="font-semibold text-[#2b160f]">
                        {fulfillment === "pickup" ? "Store Pickup (Chester Hill)" : "Sydney Local Delivery"}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-500">Scheduled:</span>
                      <span className="font-semibold text-[#2b160f]">{combinedDateInfo}</span>
                    </div>
                    {fulfillment === "delivery" && streetAddress && (
                      <div className="flex justify-between">
                        <span className="text-neutral-500">Address:</span>
                        <span className="font-semibold text-[#2b160f]">{formattedDeliveryDetails}</span>
                      </div>
                    )}
                  </div>
                  <Button
                    onClick={() => {
                      setOrderPlaced(false)
                      onClose()
                    }}
                    className="bg-[#b5874a] hover:bg-[#9a6e34] text-white rounded-full px-8 py-3 text-sm font-bold shadow-md cursor-pointer"
                  >
                    Continue Browsing
                  </Button>
                </div>
              ) : items.length === 0 ? (
                /* Empty Cart Screen */
                <div className="p-8 sm:p-14 text-center space-y-4 my-auto">
                  <div className="w-16 h-16 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-400 mx-auto">
                    <ShoppingBag className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold font-serif text-[#2b160f]">Your cart is empty</h3>
                  <p className="text-xs text-neutral-500 max-w-xs mx-auto">
                    Explore our freshly baked Royal Baklava, clotted Ashta Halawet El Jebn, and warm Knefe pans.
                  </p>
                  <Button
                    onClick={onClose}
                    className="bg-[#b5874a] hover:bg-[#9a6e34] text-white rounded-full px-7 py-2.5 text-xs font-bold shadow-md cursor-pointer"
                  >
                    Browse Sweet Menu
                  </Button>
                </div>
              ) : (
                /* 2-Column Clean Responsive Dialog Layout */
                <div className="grid grid-cols-1 md:grid-cols-12 flex-1 overflow-hidden">
                  
                  {/* Left Column (Items & Delivery Bar) */}
                  <div className="md:col-span-7 p-5 sm:p-6 space-y-4 border-b md:border-b-0 md:border-r border-neutral-100 flex flex-col justify-between overflow-y-auto">
                    
                    <div className="space-y-4">
                      {/* Free Delivery Milestone Progress */}
                      <div className="bg-[#faf8f5] p-3 rounded-2xl border border-neutral-200/80">
                        <div className="flex justify-between items-center text-xs font-semibold text-[#2b160f] mb-1.5">
                          <span className="flex items-center gap-1.5">
                            {subtotal >= freeDeliveryThreshold ? (
                              <>
                                <Sparkles className="w-3.5 h-3.5 text-[#b5874a]" />
                                <span className="text-emerald-700 font-bold">You qualified for FREE Sydney Delivery!</span>
                              </>
                            ) : (
                              `Add $${(freeDeliveryThreshold - subtotal).toFixed(2)} more for Free Delivery`
                            )}
                          </span>
                          <span className="text-[#b5874a] font-bold">{Math.round(progressPercent)}%</span>
                        </div>
                        <div className="w-full bg-neutral-200 h-1.5 rounded-full overflow-hidden">
                          <div
                            className="bg-[#b5874a] h-full transition-all duration-500"
                            style={{ width: `${progressPercent}%` }}
                          />
                        </div>
                      </div>

                      {/* Items List */}
                      <div className="space-y-2.5 max-h-[300px] overflow-y-auto pr-1">
                        {items.map((item) => {
                          const opt = item.product.options[item.optionIndex] || item.product.options[0]
                          const itemTotal = opt.price * item.quantity

                          return (
                            <div
                              key={item.id}
                              className="flex gap-3 p-3 rounded-2xl bg-white border border-neutral-100 shadow-xs hover:border-neutral-200 transition-colors"
                            >
                              <img
                                src={item.product.image}
                                alt={item.product.name}
                                className="w-16 h-16 sm:w-18 sm:h-18 rounded-xl object-cover shrink-0 bg-neutral-100 border border-neutral-100"
                              />

                              <div className="flex-1 flex flex-col justify-between">
                                <div className="flex justify-between items-start gap-1">
                                  <div>
                                    <h4 className="text-xs sm:text-sm font-bold text-[#2b160f] font-serif leading-tight">
                                      {item.product.name}
                                    </h4>
                                    <p className="text-[10px] text-neutral-500 line-clamp-1 mt-0.5">
                                      {item.product.description}
                                    </p>
                                  </div>

                                  <button
                                    onClick={() => onRemoveItem(item.id)}
                                    aria-label="Remove item"
                                    className="text-neutral-400 hover:text-red-500 transition-colors p-1 cursor-pointer"
                                  >
                                    <Trash2 className="w-3.5 h-3.5" />
                                  </button>
                                </div>

                                <div className="flex items-center justify-between mt-1.5 pt-1 border-t border-neutral-50">
                                  {/* Quantity Controller */}
                                  <div className="flex items-center border border-neutral-200 rounded-full px-2 py-0.5 text-xs bg-[#faf8f5]">
                                    <button
                                      type="button"
                                      onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                                      className="w-5 h-5 flex items-center justify-center font-bold text-neutral-600 hover:text-black cursor-pointer"
                                    >
                                      -
                                    </button>
                                    <span className="w-6 text-center font-bold text-xs text-[#2b160f]">
                                      {item.quantity}
                                    </span>
                                    <button
                                      type="button"
                                      onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                                      className="w-5 h-5 flex items-center justify-center font-bold text-neutral-600 hover:text-black cursor-pointer"
                                    >
                                      +
                                    </button>
                                  </div>

                                  <div className="text-sm font-bold text-[#2b160f] font-serif">
                                    ${itemTotal.toFixed(2)}
                                  </div>
                                </div>
                              </div>
                            </div>
                          )
                        })}
                      </div>
                    </div>

                    {/* Special Instructions & Trust Tag */}
                    <div className="space-y-2 pt-2 border-t border-neutral-100">
                      <div className="space-y-1">
                        <label className="text-[11px] font-semibold text-neutral-600">
                          Special Instructions / Gift Note:
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. Extra floral syrup, warm Knefe packaging..."
                          value={orderNotes}
                          onChange={(e) => setOrderNotes(e.target.value)}
                          className="w-full text-xs p-2.5 rounded-xl border border-neutral-200 bg-[#faf8f5] focus:outline-none focus:border-[#b5874a] focus:bg-white text-[#2b160f]"
                        />
                      </div>
                      <div className="text-[10px] text-neutral-400 flex items-center gap-1.5">
                        <Sparkles className="w-3 h-3 text-[#b5874a]" />
                        <span>Freshly prepared daily with 100% Halal certified ingredients</span>
                      </div>
                    </div>

                  </div>

                  {/* Right Column (Fulfillment & Checkout) */}
                  <div className="md:col-span-5 p-5 sm:p-6 bg-[#fbf8f3] flex flex-col justify-between space-y-3.5 relative">
                    
                    <div className="space-y-3">
                      {/* Fulfillment Method Toggle */}
                      <div className="space-y-1.5">
                        <div className="flex items-center justify-between">
                          <label className="text-xs font-bold text-[#2b160f] uppercase tracking-wider block">
                            Fulfillment:
                          </label>
                          <span className="text-[10px] font-bold text-[#b5874a] bg-[#b5874a]/10 px-2 py-0.5 rounded-full">
                            {fulfillment === "pickup" ? "Ready in 30 mins" : "Sydney Metro"}
                          </span>
                        </div>

                        <div className="grid grid-cols-2 gap-2">
                          <button
                            type="button"
                            onClick={() => setFulfillment("pickup")}
                            className={`flex items-center justify-center gap-1.5 p-2 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                              fulfillment === "pickup"
                                ? "bg-[#2b160f] text-white border-[#2b160f] shadow-xs"
                                : "bg-white text-neutral-700 border-neutral-200 hover:border-[#b5874a]"
                            }`}
                          >
                            <Store className="w-4 h-4 text-[#b5874a]" /> Store Pickup
                          </button>

                          <button
                            type="button"
                            onClick={() => setFulfillment("delivery")}
                            className={`flex items-center justify-center gap-1.5 p-2 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                              fulfillment === "delivery"
                                ? "bg-[#2b160f] text-white border-[#2b160f] shadow-xs"
                                : "bg-white text-neutral-700 border-neutral-200 hover:border-[#b5874a]"
                            }`}
                          >
                            <Truck className="w-4 h-4 text-[#b5874a]" /> Local Delivery
                          </button>
                        </div>
                      </div>

                      {/* Delivery Address Form if Local Delivery is selected */}
                      {fulfillment === "delivery" ? (
                        <div className="space-y-1.5 p-2.5 rounded-xl bg-white border border-neutral-200/80 shadow-xs">
                          <div className="flex items-center gap-1.5 text-xs font-bold text-[#2b160f]">
                            <MapPin className="w-3.5 h-3.5 text-[#b5874a]" />
                            <span>Delivery Address</span>
                          </div>

                          <input
                            type="text"
                            placeholder="Street Address (e.g. 150 Waldron Rd)"
                            value={streetAddress}
                            onChange={(e) => setStreetAddress(e.target.value)}
                            className="w-full text-xs p-2 rounded-lg border border-neutral-200 bg-[#faf8f5] focus:outline-none focus:border-[#b5874a] focus:bg-white text-[#2b160f]"
                          />

                          <div className="grid grid-cols-2 gap-1.5">
                            <input
                              type="text"
                              placeholder="Suburb (e.g. Chester Hill)"
                              value={suburb}
                              onChange={(e) => setSuburb(e.target.value)}
                              className="w-full text-xs p-2 rounded-lg border border-neutral-200 bg-[#faf8f5] focus:outline-none focus:border-[#b5874a] focus:bg-white text-[#2b160f]"
                            />
                            <input
                              type="text"
                              placeholder="Postcode (e.g. 2162)"
                              value={postcode}
                              onChange={(e) => setPostcode(e.target.value)}
                              className="w-full text-xs p-2 rounded-lg border border-neutral-200 bg-[#faf8f5] focus:outline-none focus:border-[#b5874a] focus:bg-white text-[#2b160f]"
                            />
                          </div>
                        </div>
                      ) : (
                        <div className="p-2.5 rounded-xl bg-white border border-neutral-200/80 flex items-start gap-2 text-xs">
                          <div className="w-6 h-6 rounded-lg bg-[#b5874a]/10 flex items-center justify-center text-[#b5874a] shrink-0 mt-0.5">
                            <Store className="w-3 h-3" />
                          </div>
                          <div>
                            <span className="font-bold text-[#2b160f] block text-xs">Chester Hill Store</span>
                            <span className="text-[10px] text-neutral-500 block">150–152 Waldron Rd, Chester Hill</span>
                            <span className="text-[10px] text-emerald-600 font-semibold">● Open Today 9:00 AM – 10:00 PM</span>
                          </div>
                        </div>
                      )}

                      {/* Scheduled Date using CalendarPicker (opens upward) */}
                      <div className="space-y-1 relative">
                        <CalendarPicker
                          label={fulfillment === "delivery" ? "Delivery Date" : "Pickup Date"}
                          value={pickupDate}
                          onChange={setPickupDate}
                          openDirection="up"
                        />
                      </div>

                      {/* Preferred Time Slot using CustomSelect (opens upward) */}
                      <div className="space-y-1 relative">
                        <CustomSelect
                          label="Preferred Time Slot"
                          icon={<Clock className="w-3.5 h-3.5 text-[#b5874a]" />}
                          options={timeSlotOptions}
                          value={timeSlot}
                          onChange={setTimeSlot}
                          openDirection="up"
                        />
                      </div>
                    </div>

                    {/* Order Totals & Stripe CTA */}
                    <div className="pt-2.5 border-t border-neutral-200/70 space-y-2.5">
                      <div className="space-y-1 text-xs text-neutral-600">
                        <div className="flex justify-between">
                          <span>Subtotal</span>
                          <span className="font-semibold text-[#2b160f]">${subtotal.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Fulfillment ({fulfillment === "pickup" ? "Store Pickup" : "Delivery"})</span>
                          <span className="font-semibold text-[#2b160f]">
                            {deliveryFee === 0 ? "FREE" : `$${deliveryFee.toFixed(2)}`}
                          </span>
                        </div>
                        <div className="flex justify-between text-base font-bold text-[#2b160f] font-serif pt-1 border-t border-neutral-200/60">
                          <span>Total (AUD)</span>
                          <span className="text-[#b5874a]">${(subtotal + deliveryFee).toFixed(2)}</span>
                        </div>
                      </div>

                      <Button
                        onClick={() => setShowStripeModal(true)}
                        className="w-full bg-[#b5874a] hover:bg-[#9a6e34] text-white font-bold py-2.5 rounded-full text-xs sm:text-sm shadow-md flex items-center justify-center gap-2 transition-all cursor-pointer"
                      >
                        <Lock className="w-4 h-4" />
                        <span>Checkout with Stripe</span>
                        <ArrowRight className="w-4 h-4" />
                      </Button>

                      <div className="flex items-center justify-center gap-2 text-[10px] text-neutral-400">
                        <span>🔒 256-Bit SSL Encrypted</span>
                        <span>•</span>
                        <span className="font-semibold text-neutral-500">Stripe Gateway</span>
                      </div>
                    </div>

                  </div>

                </div>
              )}

            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Stripe Checkout Sheet Modal */}
      <StripeCheckoutModal
        isOpen={showStripeModal}
        onClose={() => setShowStripeModal(false)}
        items={items}
        subtotal={subtotal}
        deliveryFee={deliveryFee}
        fulfillment={fulfillment}
        pickupDate={combinedDateInfo}
        orderNotes={combinedNotes}
        onSuccessClearCart={() => {
          onClearCart()
          setShowStripeModal(false)
          setOrderPlaced(true)
        }}
      />
    </>
  )
}
