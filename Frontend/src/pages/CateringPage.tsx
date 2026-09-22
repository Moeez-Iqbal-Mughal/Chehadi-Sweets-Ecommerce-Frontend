import { useState } from "react"
import { motion } from "framer-motion"
import { Sparkles, Users, CheckCircle2, Phone, Mail, Star, Send, Gem, Moon, Gift, Crown, Truck, PackageCheck, UtensilsCrossed } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CustomSelect } from "@/components/ui/select"
import { CalendarPicker } from "@/components/ui/calendar-picker"

export function CateringPage() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "Wedding / Engagement",
    eventDate: "",
    guestCount: "50-100",
    message: "",
  })

  const eventTypeOptions = [
    { value: "Wedding / Engagement", label: "Wedding / Engagement" },
    { value: "Eid / Ramadan Gathering", label: "Eid / Ramadan Gathering" },
    { value: "Birthday / Family Milestone", label: "Birthday / Family Milestone" },
    { value: "Corporate Gala / Office Event", label: "Corporate Gala / Office Event" },
    { value: "Custom Dessert Table", label: "Custom Dessert Table Setup" },
  ]

  const guestCountOptions = [
    { value: "20-50", label: "20 – 50 Guests" },
    { value: "50-100", label: "50 – 100 Guests" },
    { value: "100-250", label: "100 – 250 Guests" },
    { value: "250+", label: "250+ Guests" },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

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
          <img src="/images/hero.jpg" alt="Chehadi Catering Trays" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#22110a] via-[#22110a]/80 to-transparent" />

        <div className="max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-[#dfb776]/40 text-xs font-bold text-[#dfb776] uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Bespoke Middle Eastern Catering</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-serif leading-tight">
            Catering & Celebration Trays
          </h1>

          <p className="text-neutral-300 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
            Elevate your wedding, engagement, Eid gathering, or corporate event with handcrafted Middle Eastern sweet platters, custom dessert tables, and luxury gift boxes.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs text-neutral-200">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span className="font-bold text-white">4.3 ★ Customer Loved</span>
            </div>

            <a
              href="tel:+61410390945"
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#b5874a] text-white text-xs font-bold hover:bg-[#9a6e34] transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call Catering: +61 410 390 945</span>
            </a>
          </div>
        </div>
      </motion.section>

      {/* Main 1/2 Grid Section: 6 Cards (Left 50%) & Form (Right 50%) */}
      <div className="max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left 50% (7 cols): The 6 Cards Collection */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 flex flex-col justify-between space-y-6"
          >
            {/* Top 3 Photo Showcase Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="relative h-48 rounded-3xl overflow-hidden shadow-md border border-neutral-200 group">
                <img
                  src="/images/hero.jpg"
                  alt="Weddings & Engagements"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <span className="text-[10px] text-[#dfb776] font-bold uppercase tracking-wider block">Weddings</span>
                  <h4 className="text-xs font-bold font-serif">Royal Baklava Trays</h4>
                </div>
              </div>

              <div className="relative h-48 rounded-3xl overflow-hidden shadow-md border border-neutral-200 group">
                <img
                  src="/images/halawet.jpg"
                  alt="Fresh Ashta Trays"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <span className="text-[10px] text-[#dfb776] font-bold uppercase tracking-wider block">Fresh Ashta</span>
                  <h4 className="text-xs font-bold font-serif">Halawet El Jebn Platters</h4>
                </div>
              </div>

              <div className="relative h-48 rounded-3xl overflow-hidden shadow-md border border-neutral-200 group">
                <img
                  src="/images/knafeh.jpg"
                  alt="Warm Knefe Pans"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <span className="text-[10px] text-[#dfb776] font-bold uppercase tracking-wider block">Hot Feasts</span>
                  <h4 className="text-xs font-bold font-serif">Cheese Knefe Pans</h4>
                </div>
              </div>
            </div>

            {/* Bottom 3 Detailed Package Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              
              {/* Package 1 */}
              <div className="bg-white rounded-3xl p-5 border border-neutral-200 shadow-sm flex flex-col justify-between space-y-4 hover:shadow-md transition-shadow">
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-2xl bg-[#b5874a]/10 border border-[#b5874a]/25 flex items-center justify-center text-[#b5874a]">
                    <Gem className="w-5 h-5 text-[#b5874a]" />
                  </div>
                  <h4 className="text-sm font-bold text-[#2b160f] font-serif">Wedding Platters</h4>
                  <p className="text-[11px] text-neutral-500 leading-relaxed">
                    Opulent tiered trays with mixed pistachio diamonds and Ashta rolls.
                  </p>
                  <div className="space-y-1 text-[10px] text-neutral-600 pt-1">
                    <div className="flex items-center gap-1 text-[#b5874a]">
                      <CheckCircle2 className="w-3 h-3" /> Custom Royal Trays
                    </div>
                  </div>
                </div>
                <div className="text-xs font-bold text-[#b5874a] pt-2 border-t border-neutral-100">
                  From $180 / Platter
                </div>
              </div>

              {/* Package 2 */}
              <div className="bg-white rounded-3xl p-5 border-2 border-[#b5874a]/60 shadow-sm flex flex-col justify-between space-y-4 relative hover:shadow-md transition-shadow">
                <div className="absolute -top-2.5 right-4 px-2 py-0.5 rounded-full bg-[#2b160f] text-white text-[9px] font-bold">
                  Popular
                </div>
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-2xl bg-[#b5874a]/10 border border-[#b5874a]/25 flex items-center justify-center text-[#b5874a]">
                    <Moon className="w-5 h-5 text-[#b5874a]" />
                  </div>
                  <h4 className="text-sm font-bold text-[#2b160f] font-serif">Eid Family Feasts</h4>
                  <p className="text-[11px] text-neutral-500 leading-relaxed">
                    Halawet El Jebn, warm Knefe pans, Iznood rolls, and Maamoul boxes.
                  </p>
                  <div className="space-y-1 text-[10px] text-neutral-600 pt-1">
                    <div className="flex items-center gap-1 text-[#b5874a]">
                      <CheckCircle2 className="w-3 h-3" /> Clotted Cream on Order
                    </div>
                  </div>
                </div>
                <div className="text-xs font-bold text-[#b5874a] pt-2 border-t border-neutral-100">
                  From $95 / Feast
                </div>
              </div>

              {/* Package 3 */}
              <div className="bg-white rounded-3xl p-5 border border-neutral-200 shadow-sm flex flex-col justify-between space-y-4 hover:shadow-md transition-shadow">
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-2xl bg-[#b5874a]/10 border border-[#b5874a]/25 flex items-center justify-center text-[#b5874a]">
                    <Gift className="w-5 h-5 text-[#b5874a]" />
                  </div>
                  <h4 className="text-sm font-bold text-[#2b160f] font-serif">Corporate Gift Tins</h4>
                  <p className="text-[11px] text-neutral-500 leading-relaxed">
                    Elegantly branded tin boxes packed with assorted baklava & Maamoul.
                  </p>
                  <div className="space-y-1 text-[10px] text-neutral-600 pt-1">
                    <div className="flex items-center gap-1 text-[#b5874a]">
                      <CheckCircle2 className="w-3 h-3" /> Sydney-Wide Delivery
                    </div>
                  </div>
                </div>
                <div className="text-xs font-bold text-[#b5874a] pt-2 border-t border-neutral-100">
                  Volume Discounts
                </div>
              </div>

            </div>

            {/* Luxury Catering Inclusions & Features Box */}
            <div className="bg-white rounded-3xl p-6 border border-neutral-200 shadow-sm flex-1 flex flex-col justify-between space-y-4">
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-neutral-100">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#b5874a] uppercase tracking-wider">
                    <Sparkles className="w-4 h-4" />
                    <span>All Catering Orders Include</span>
                  </div>
                  <span className="text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                    100% Halal Certified
                  </span>
                </div>

                {/* 4 Feature Inclusions Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#faf8f5] border border-neutral-100">
                    <div className="w-9 h-9 rounded-xl bg-[#b5874a]/10 border border-[#b5874a]/20 flex items-center justify-center shrink-0 text-[#b5874a]">
                      <UtensilsCrossed className="w-4 h-4 text-[#b5874a]" />
                    </div>
                    <div>
                      <h5 className="text-xs font-bold text-[#2b160f]">Fresh Ashta & Syrup Pourers</h5>
                      <p className="text-[10px] text-neutral-500 mt-0.5">
                        Clotted fresh morning of event with homemade floral syrup.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#faf8f5] border border-neutral-100">
                    <div className="w-9 h-9 rounded-xl bg-[#b5874a]/10 border border-[#b5874a]/20 flex items-center justify-center shrink-0 text-[#b5874a]">
                      <Crown className="w-4 h-4 text-[#b5874a]" />
                    </div>
                    <div>
                      <h5 className="text-xs font-bold text-[#2b160f]">Royal Tiered Gold Trays</h5>
                      <p className="text-[10px] text-neutral-500 mt-0.5">
                        Pre-arranged and garnished with rose petals and pistachio dust.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#faf8f5] border border-neutral-100">
                    <div className="w-9 h-9 rounded-xl bg-[#b5874a]/10 border border-[#b5874a]/20 flex items-center justify-center shrink-0 text-[#b5874a]">
                      <Truck className="w-4 h-4 text-[#b5874a]" />
                    </div>
                    <div>
                      <h5 className="text-xs font-bold text-[#2b160f]">Sydney Delivery Dispatch</h5>
                      <p className="text-[10px] text-neutral-500 mt-0.5">
                        Prompt refrigerated delivery directly to venues & homes.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#faf8f5] border border-neutral-100">
                    <div className="w-9 h-9 rounded-xl bg-[#b5874a]/10 border border-[#b5874a]/20 flex items-center justify-center shrink-0 text-[#b5874a]">
                      <PackageCheck className="w-4 h-4 text-[#b5874a]" />
                    </div>
                    <div>
                      <h5 className="text-xs font-bold text-[#2b160f]">Custom Guest Favor Boxes</h5>
                      <p className="text-[10px] text-neutral-500 mt-0.5">
                        Individual guest gift packaging with personalized cards.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Direct Contact Pill */}
              <div className="pt-3 border-t border-neutral-100 flex flex-wrap items-center justify-between gap-3 text-xs">
                <a
                  href="tel:+61410390945"
                  className="flex items-center gap-1.5 font-bold text-[#b5874a] hover:text-[#9a6e34] transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>Catering Direct: +61 410 390 945</span>
                </a>
                <span className="text-neutral-500 flex items-center gap-1.5 text-[11px]">
                  <Mail className="w-3.5 h-3.5 text-[#b5874a]" /> info@chehadisweets.com.au
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right 50% (5 cols): Quote Inquiry Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-10 border border-neutral-200 shadow-xl flex flex-col justify-between h-full"
          >
            {submitted ? (
              <div className="text-center py-12 space-y-4 my-auto">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto text-3xl">
                  ✓
                </div>
                <h3 className="text-2xl font-bold font-serif text-[#2b160f]">Catering Inquiry Received!</h3>
                <p className="text-xs text-neutral-600 max-w-sm mx-auto leading-relaxed">
                  Thank you! Our master pastry chef will contact you within 24 hours to confirm your custom trays, arrangements, and event date.
                </p>
                <Button
                  onClick={() => setSubmitted(false)}
                  className="bg-[#b5874a] hover:bg-[#9a6e34] text-white rounded-full px-8 py-2.5 text-xs font-bold mt-2"
                >
                  Send Another Request
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#b5874a] uppercase tracking-wider mb-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Quote Request</span>
                  </div>
                  <h3 className="text-2xl font-bold font-serif text-[#2b160f]">
                    Request a Catering Quote
                  </h3>
                  <p className="text-xs text-neutral-500 mt-0.5">
                    Tell us about your event and we will tailor the perfect sweet selection.
                  </p>
                </div>

                {/* Name */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-neutral-700">Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full p-3 text-xs font-medium rounded-xl border border-neutral-200 bg-[#faf8f5] text-[#2b160f] focus:outline-none focus:border-[#b5874a] focus:ring-2 focus:ring-[#b5874a]/20 focus:bg-white transition-all shadow-sm"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {/* Phone */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-neutral-700">Phone Number</label>
                    <input
                      type="tel"
                      required
                      placeholder="+61 410 390 945"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full p-3 text-xs font-medium rounded-xl border border-neutral-200 bg-[#faf8f5] text-[#2b160f] focus:outline-none focus:border-[#b5874a] focus:ring-2 focus:ring-[#b5874a]/20 focus:bg-white transition-all shadow-sm"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-neutral-700">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full p-3 text-xs font-medium rounded-xl border border-neutral-200 bg-[#faf8f5] text-[#2b160f] focus:outline-none focus:border-[#b5874a] focus:ring-2 focus:ring-[#b5874a]/20 focus:bg-white transition-all shadow-sm"
                    />
                  </div>
                </div>

                {/* Event Type Select */}
                <CustomSelect
                  label="Event Type"
                  icon={<Gem className="w-3.5 h-3.5 text-[#b5874a]" />}
                  options={eventTypeOptions}
                  value={formData.eventType}
                  onChange={(val) => setFormData({ ...formData, eventType: val })}
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {/* Event Date with CalendarPicker */}
                  <CalendarPicker
                    label="Event Date"
                    required
                    value={formData.eventDate}
                    onChange={(val) => setFormData({ ...formData, eventDate: val })}
                  />

                  {/* Estimated Guests */}
                  <CustomSelect
                    label="Estimated Guests"
                    icon={<Users className="w-3.5 h-3.5 text-[#b5874a]" />}
                    options={guestCountOptions}
                    value={formData.guestCount}
                    onChange={(val) => setFormData({ ...formData, guestCount: val })}
                  />
                </div>

                {/* Special Requests */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-neutral-700">Special Requests / Preferred Sweets</label>
                  <textarea
                    rows={3}
                    placeholder="e.g. Halawet El Jebn platters, warm cheese Knefe pans, mixed baklava..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full p-3 text-xs font-medium rounded-xl border border-neutral-200 bg-[#faf8f5] text-[#2b160f] focus:outline-none focus:border-[#b5874a] focus:ring-2 focus:ring-[#b5874a]/20 focus:bg-white transition-all shadow-sm"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full bg-[#b5874a] hover:bg-[#9a6e34] text-white font-bold py-3.5 rounded-full text-xs shadow-lg shadow-[#b5874a]/25 flex items-center justify-center gap-2 transition-all mt-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Submit Catering Inquiry</span>
                </Button>
              </form>
            )}

            <div className="pt-4 mt-4 border-t border-neutral-100 text-[11px] text-center text-neutral-400">
              100% Halal Certified • Custom Tasting Available Upon Request
            </div>
          </motion.div>

        </div>
      </div>

    </div>
  )
}
