import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  X,
  Lock,
  CreditCard,
  ShieldCheck,
  CheckCircle2,
  Download,
  Building2,
  ChevronDown,
  ChevronUp,
  ShoppingBag,
  Sparkles,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import type { CartItem } from "@/context/CartContext"

interface StripeCheckoutModalProps {
  isOpen: boolean
  onClose: () => void
  items: CartItem[]
  subtotal: number
  deliveryFee: number
  fulfillment: "pickup" | "delivery"
  pickupDate?: string
  orderNotes?: string
  onSuccessClearCart: () => void
}

export function StripeCheckoutModal({
  isOpen,
  onClose,
  items,
  subtotal,
  deliveryFee,
  fulfillment,
  pickupDate,
  orderNotes,
  onSuccessClearCart,
}: StripeCheckoutModalProps) {
  const [cardNumber, setCardNumber] = useState("")
  const [cardExpiry, setCardExpiry] = useState("")
  const [cardCvc, setCardCvc] = useState("")
  const [cardName, setCardName] = useState("")
  const [postalCode, setPostalCode] = useState("2162")
  const [email, setEmail] = useState("")
  const [isProcessing, setIsProcessing] = useState(false)
  const [paymentSuccess, setPaymentSuccess] = useState(false)
  const [orderId, setOrderId] = useState("")
  const [showOrderSummary, setShowOrderSummary] = useState(false)

  if (!isOpen) return null

  const totalAmount = subtotal + deliveryFee

  // Format Card Number (XXXX XXXX XXXX XXXX)
  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, "")
    if (value.length > 16) value = value.slice(0, 16)
    const parts = value.match(/.{1,4}/g)
    setCardNumber(parts ? parts.join(" ") : value)
  }

  // Format Expiry (MM / YY)
  const handleExpiryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, "")
    if (value.length > 4) value = value.slice(0, 4)
    if (value.length >= 3) {
      setCardExpiry(`${value.slice(0, 2)} / ${value.slice(2)}`)
    } else {
      setCardExpiry(value)
    }
  }

  // Format CVC
  const handleCvcChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "").slice(0, 4)
    setCardCvc(value)
  }

  const handlePay = (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)

    // Simulate Stripe payment gateway authorization
    setTimeout(() => {
      setIsProcessing(false)
      const generatedOrderId = `CS-${Math.floor(10000 + Math.random() * 90000)}`
      setOrderId(generatedOrderId)
      setPaymentSuccess(true)
      onSuccessClearCart()
    }, 1800)
  }

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/70 backdrop-blur-md overflow-y-auto cursor-pointer"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-md bg-white rounded-3xl shadow-2xl border border-neutral-200 overflow-hidden relative my-auto cursor-default"
      >
        {/* Stripe Header */}
        <div className="p-6 border-b border-neutral-100 flex items-start justify-between bg-[#faf8f5]">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-[#2b160f] text-[#dfb776] flex items-center justify-center font-serif text-lg font-bold shadow-md border border-[#b5874a]/30 shrink-0">
              CS
            </div>
            <div>
              <div className="flex items-center gap-1.5 text-[11px] font-bold text-[#b5874a] uppercase tracking-wider">
                <Lock className="w-3 h-3" />
                <span>Stripe Encrypted Payment</span>
              </div>
              <h3 className="text-base font-bold text-[#2b160f] font-serif">Chehadi Sweets</h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white border border-neutral-200 hover:bg-neutral-100 text-neutral-500 hover:text-black flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Success Screen */}
        {paymentSuccess ? (
          <div className="p-7 text-center space-y-5">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", damping: 15 }}
              className="w-16 h-16 mx-auto rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shadow-lg"
            >
              <CheckCircle2 className="w-10 h-10" />
            </motion.div>

            <div className="space-y-1">
              <div className="inline-flex items-center gap-1 px-3 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Payment Confirmed with Stripe</span>
              </div>
              <h2 className="text-2xl font-bold font-serif text-[#2b160f]">
                Order Successful!
              </h2>
              <p className="text-xs text-neutral-500">
                Receipt Reference: <strong className="text-[#b5874a]">{orderId}</strong>
              </p>
            </div>

            {/* Receipt Summary Card */}
            <div className="p-4 bg-[#faf8f5] rounded-2xl border border-neutral-200/80 text-left text-xs space-y-2">
              <div className="flex justify-between font-bold text-[#2b160f] pb-2 border-b border-neutral-200">
                <span>Total Paid:</span>
                <span className="text-[#b5874a] text-sm">${totalAmount.toFixed(2)} AUD</span>
              </div>
              <div className="flex justify-between text-neutral-600">
                <span>Fulfillment:</span>
                <span className="font-semibold text-[#2b160f] capitalize">
                  {fulfillment === "pickup" ? "Store Pickup (150–152 Waldron Rd)" : "Sydney Delivery"}
                </span>
              </div>
              {pickupDate && (
                <div className="flex justify-between text-neutral-600">
                  <span>Preferred Time:</span>
                  <span className="font-medium text-[#2b160f]">{pickupDate}</span>
                </div>
              )}
              {orderNotes && (
                <div className="flex justify-between text-neutral-600">
                  <span>Special Note:</span>
                  <span className="font-medium text-[#2b160f] italic">{orderNotes}</span>
                </div>
              )}
              <div className="flex justify-between text-neutral-600">
                <span>Payment Method:</span>
                <span>Card (•••• {cardNumber.slice(-4) || "4242"})</span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-2.5 pt-1">
              <Button
                onClick={() => window.print()}
                variant="outline"
                className="flex-1 rounded-full text-xs font-semibold border-neutral-300 hover:bg-neutral-50 flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" /> Print Receipt
              </Button>

              <Button
                onClick={onClose}
                className="flex-1 bg-[#b5874a] hover:bg-[#9a6e34] text-white rounded-full text-xs font-bold shadow-md cursor-pointer"
              >
                Continue
              </Button>
            </div>
          </div>
        ) : (
          /* Payment Form Screen */
          <div className="p-6 space-y-5">
            
            {/* Amount & Order Breakdown Accordion */}
            <div className="p-4 rounded-2xl bg-[#faf8f5] border border-neutral-200/80">
              <div
                onClick={() => setShowOrderSummary(!showOrderSummary)}
                className="flex items-center justify-between cursor-pointer select-none"
              >
                <div className="flex items-center gap-2">
                  <ShoppingBag className="w-4 h-4 text-[#b5874a]" />
                  <span className="text-xs font-bold text-[#2b160f]">
                    Total Amount ({items.length} {items.length === 1 ? "item" : "items"})
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-lg font-extrabold text-[#2b160f] font-serif">
                    ${totalAmount.toFixed(2)} AUD
                  </span>
                  {showOrderSummary ? (
                    <ChevronUp className="w-4 h-4 text-neutral-500" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-neutral-500" />
                  )}
                </div>
              </div>

              {/* Collapsible Order items summary */}
              <AnimatePresence>
                {showOrderSummary && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="pt-3 mt-3 border-t border-neutral-200/60 text-xs space-y-2 overflow-hidden"
                  >
                    {items.map((item) => (
                      <div key={item.id} className="flex justify-between text-neutral-600">
                        <span>
                          {item.product.name} × {item.quantity}
                        </span>
                        <span className="font-semibold text-[#2b160f]">
                          ${(item.product.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    ))}
                    <div className="flex justify-between text-neutral-500 pt-1 border-t border-neutral-100">
                      <span>Fulfillment:</span>
                      <span>{deliveryFee === 0 ? "FREE" : `$${deliveryFee.toFixed(2)}`}</span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Clean Stripe Elements Card Form */}
            <form onSubmit={handlePay} className="space-y-4">
              
              {/* Email Address */}
              <div className="space-y-1">
                <label className="text-xs font-bold text-[#2b160f] block">
                  Email Address for Receipt
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full text-xs p-3 rounded-xl border border-neutral-300 focus:outline-none focus:border-[#635BFF] focus:ring-2 focus:ring-[#635BFF]/15 transition-all bg-white"
                />
              </div>

              {/* Integrated Stripe Card Box */}
              <div className="space-y-1">
                <label className="text-xs font-bold text-[#2b160f] block">
                  Card Information
                </label>

                <div className="border border-neutral-300 rounded-xl overflow-hidden focus-within:border-[#635BFF] focus-within:ring-2 focus-within:ring-[#635BFF]/15 transition-all bg-white">
                  
                  {/* Card Number Line */}
                  <div className="relative flex items-center border-b border-neutral-200 p-2.5">
                    <CreditCard className="w-4 h-4 text-neutral-400 ml-1 mr-2.5 shrink-0" />
                    <input
                      type="text"
                      required
                      placeholder="1234  5678  9012  3456"
                      value={cardNumber}
                      onChange={handleCardNumberChange}
                      className="w-full text-xs font-mono focus:outline-none bg-transparent"
                    />
                    <div className="flex items-center gap-1 text-[10px] font-bold shrink-0 pr-1">
                      <span className="px-1.5 py-0.5 rounded bg-neutral-100 text-[#1A1F71]">VISA</span>
                      <span className="px-1.5 py-0.5 rounded bg-neutral-100 text-[#EB001B]">MC</span>
                    </div>
                  </div>

                  {/* Expiry, CVC & ZIP Line */}
                  <div className="grid grid-cols-2 divide-x divide-neutral-200">
                    <input
                      type="text"
                      required
                      placeholder="MM / YY"
                      value={cardExpiry}
                      onChange={handleExpiryChange}
                      className="text-xs font-mono p-2.5 pl-3.5 focus:outline-none bg-transparent"
                    />
                    <input
                      type="text"
                      required
                      placeholder="CVC"
                      value={cardCvc}
                      onChange={handleCvcChange}
                      className="text-xs font-mono p-2.5 pl-3.5 focus:outline-none bg-transparent"
                    />
                  </div>

                </div>
              </div>

              {/* Cardholder Name & Postcode */}
              <div className="grid grid-cols-2 gap-2">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-[#2b160f] block">
                    Cardholder Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Full name on card"
                    value={cardName}
                    onChange={(e) => setCardName(e.target.value)}
                    className="w-full text-xs p-2.5 rounded-xl border border-neutral-300 focus:outline-none focus:border-[#635BFF] focus:ring-2 focus:ring-[#635BFF]/15 transition-all bg-white"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-[#2b160f] block">
                    Postal Code
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="2162"
                    value={postalCode}
                    onChange={(e) => setPostalCode(e.target.value)}
                    className="w-full text-xs p-2.5 rounded-xl border border-neutral-300 focus:outline-none focus:border-[#635BFF] focus:ring-2 focus:ring-[#635BFF]/15 transition-all bg-white"
                  />
                </div>
              </div>

              {/* Stripe Pay Button */}
              <Button
                type="submit"
                disabled={isProcessing}
                className="w-full bg-[#635BFF] hover:bg-[#5248E6] text-white font-bold py-3.5 rounded-xl text-sm shadow-md shadow-[#635BFF]/20 flex items-center justify-center gap-2 transition-all cursor-pointer mt-2"
              >
                {isProcessing ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Processing with Stripe...</span>
                  </>
                ) : (
                  <>
                    <Lock className="w-4 h-4" />
                    <span>Pay ${totalAmount.toFixed(2)} AUD</span>
                  </>
                )}
              </Button>

              {/* Footer Security Badge */}
              <div className="flex items-center justify-center gap-3 text-[11px] text-neutral-400 pt-1">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> 256-Bit SSL Encrypted
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Building2 className="w-3.5 h-3.5 text-neutral-500" /> Powered by Stripe
                </span>
              </div>

            </form>

          </div>
        )}
      </motion.div>
    </div>
  )
}
