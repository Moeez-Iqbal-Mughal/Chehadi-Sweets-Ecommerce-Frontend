import { useState } from "react"
import { motion } from "framer-motion"
import { MapPin, Clock, Phone, Navigation, ExternalLink, Sparkles, Star, Car, ShieldCheck, Heart, Send } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ContactPage() {
  const [sent, setSent] = useState(false)
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" })
  
  // Exact Google Maps Directions & Business Place profile URLs
  const googleDirectionsUrl = "https://www.google.com/maps/dir/?api=1&destination=Chehadi+Sweets,+150-152+Waldron+Rd,+Chester+Hill+NSW+2162"
  const googleMapsPlaceUrl = "https://www.google.com/maps/place/Chehadi+Sweets/@-33.8829348,151.0008268,17z/data=!4m6!3m5!1s0x6b12bd9f617635ad:0x7e3f81c20965ffc5!8m2!3d-33.8829348!4d151.0008268!16s%2Fg%2F11h6lkhj7r"
  const mapEmbedUrl = "https://maps.google.com/maps?q=Chehadi+Sweets,+150-152+Waldron+Rd,+Chester+Hill+NSW+2162&t=&z=16&ie=UTF8&iwloc=&output=embed"

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <div className="bg-[#faf8f5] min-h-screen pb-16 space-y-10">
      
      {/* Hero Banner with Background Image Overlay */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative bg-[#22110a] text-white py-16 lg:py-20 overflow-hidden border-b border-[#b5874a]/30"
      >
        <div className="absolute inset-0 opacity-20">
          <img src="/images/hero.jpg" alt="Chehadi Patisserie Spread" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#22110a] via-[#22110a]/80 to-transparent" />

        <div className="max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-[#dfb776]/40 text-xs font-bold text-[#dfb776] uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Chester Hill Patisserie • Sydney</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-serif leading-tight">
            Visit Our Sweets Boutique & Counter
          </h1>

          <p className="text-neutral-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Step into our patisserie to smell the fresh orange blossom syrup, fresh clotted Ashta, and bubbling hot cheese Knefe pans straight from the oven.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs text-neutral-200">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span className="font-bold text-white">4.3 ★ Rated by Sydney Customers</span>
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-xs text-emerald-400 font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Open 7 Days: 9:00 AM – 10:00 PM</span>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Main Content Area */}
      <div className="max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-12 space-y-8">
        
        {/* Quick Highlights Strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 rounded-2xl bg-white border border-neutral-200/80 shadow-sm flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-[#b5874a]/15 text-[#b5874a] flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-[#2b160f]">150–152 Waldron Road</div>
              <div className="text-[11px] text-neutral-500">Chester Hill NSW 2162 (Station nearby)</div>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-neutral-200/80 shadow-sm flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-[#b5874a]/15 text-[#b5874a] flex items-center justify-center shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-[#2b160f]">9:00 AM – 10:00 PM</div>
              <div className="text-[11px] text-neutral-500">Open 7 Days a week including holidays</div>
            </div>
          </div>

          <a
            href="tel:+61410390945"
            className="p-4 rounded-2xl bg-white border border-[#b5874a]/30 shadow-sm flex items-center gap-3.5 hover:border-[#b5874a] transition-colors group"
          >
            <div className="w-10 h-10 rounded-xl bg-[#b5874a] text-white flex items-center justify-center shrink-0 group-hover:bg-[#9a6e34] transition-colors">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-[#b5874a]">+61 410 390 945</div>
              <div className="text-[11px] text-neutral-500">Call ahead for hot Knefe pans</div>
            </div>
          </a>
        </div>

        {/* 1/2 Grid: Map (Left 50%) & Message Form (Right 50%) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Left 1/2: Embedded Interactive Google Map */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl border border-neutral-200 shadow-xl overflow-hidden flex flex-col justify-between"
          >
            {/* Map Header */}
            <div className="p-5 sm:p-6 bg-[#fcfaf7] border-b border-neutral-200/80 flex flex-wrap items-center justify-between gap-3">
              <div className="space-y-0.5">
                <div className="flex items-center gap-2 text-xs font-bold text-[#b5874a] uppercase tracking-wider">
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Chester Hill Store</span>
                </div>
                <h3 className="text-base font-bold font-serif text-[#2b160f]">
                  Chehadi Sweets Location
                </h3>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={googleDirectionsUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button
                    className="bg-[#b5874a] hover:bg-[#9a6e34] text-white rounded-full text-xs font-bold px-4 py-2 h-auto flex items-center gap-1.5 shadow-sm"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Get Directions</span>
                  </Button>
                </a>

                <a
                  href={googleMapsPlaceUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button
                    variant="outline"
                    className="rounded-full border-neutral-300 hover:bg-white text-[#2b160f] text-xs font-bold px-3 py-2 h-auto flex items-center gap-1"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </Button>
                </a>
              </div>
            </div>

            {/* Map Frame */}
            <div className="w-full flex-1 min-h-[380px] sm:min-h-[440px] bg-neutral-100 relative">
              <iframe
                title="Chehadi Sweets Location"
                src={mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "100%" }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full absolute inset-0"
              />
            </div>

            {/* Map Footer Information */}
            <div className="p-4 bg-white border-t border-neutral-100 flex flex-wrap items-center justify-between gap-3 text-xs text-neutral-600">
              <span className="flex items-center gap-1.5">
                <Car className="w-4 h-4 text-[#b5874a]" /> Free street & customer parking
              </span>
              <span className="flex items-center gap-1.5 font-medium text-[#2b160f]">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" /> 4.3 ★ Customer Loved
              </span>
            </div>
          </motion.div>

          {/* Right 1/2: Contact & Inquiry Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl p-6 sm:p-10 border border-neutral-200 shadow-xl flex flex-col justify-between space-y-6"
          >
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#b5874a] uppercase tracking-wider mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Direct Message</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold font-serif text-[#2b160f]">
                Send Us an Inquiry
              </h2>
              <p className="text-xs text-neutral-500 mt-1 leading-relaxed">
                Have questions regarding custom party platters, hot Knefe collection times, or allergens? Leave us a note.
              </p>
            </div>

            {sent ? (
              <div className="text-center py-12 space-y-3 bg-[#faf8f5] rounded-2xl p-6 border border-emerald-200 my-auto">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto text-2xl">
                  ✓
                </div>
                <h3 className="text-xl font-bold font-serif text-[#2b160f]">Message Received!</h3>
                <p className="text-xs text-neutral-600 max-w-xs mx-auto leading-relaxed">
                  Thank you! Our patisserie team will reply to your message as soon as possible.
                </p>
                <Button
                  onClick={() => {
                    setSent(false)
                    setFormData({ name: "", email: "", phone: "", message: "" })
                  }}
                  className="bg-[#b5874a] hover:bg-[#9a6e34] text-white rounded-full px-6 py-2 text-xs font-bold mt-2"
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSendMessage} className="space-y-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-neutral-700">Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full p-3.5 text-xs font-medium rounded-2xl border border-neutral-200 bg-[#faf8f5] text-[#2b160f] focus:outline-none focus:border-[#b5874a] focus:ring-2 focus:ring-[#b5874a]/20 focus:bg-white transition-all shadow-sm"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-neutral-700">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full p-3.5 text-xs font-medium rounded-2xl border border-neutral-200 bg-[#faf8f5] text-[#2b160f] focus:outline-none focus:border-[#b5874a] focus:ring-2 focus:ring-[#b5874a]/20 focus:bg-white transition-all shadow-sm"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-neutral-700">Phone (Optional)</label>
                    <input
                      type="tel"
                      placeholder="+61 410 390 945"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full p-3.5 text-xs font-medium rounded-2xl border border-neutral-200 bg-[#faf8f5] text-[#2b160f] focus:outline-none focus:border-[#b5874a] focus:ring-2 focus:ring-[#b5874a]/20 focus:bg-white transition-all shadow-sm"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-neutral-700">Your Message</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell us about your order or question..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full p-3.5 text-xs font-medium rounded-2xl border border-neutral-200 bg-[#faf8f5] text-[#2b160f] focus:outline-none focus:border-[#b5874a] focus:ring-2 focus:ring-[#b5874a]/20 focus:bg-white transition-all shadow-sm"
                  ></textarea>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-[#b5874a] hover:bg-[#9a6e34] text-white font-bold py-4 rounded-full text-xs shadow-lg shadow-[#b5874a]/25 flex items-center justify-center gap-2 transition-all"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Message to Chehadi Sweets</span>
                </Button>
              </form>
            )}

            {/* Bottom Guarantees */}
            <div className="pt-4 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-500">
              <span className="flex items-center gap-1.5 font-medium text-[#2b160f]">
                <ShieldCheck className="w-4 h-4 text-emerald-600" /> 100% Halal Certified
              </span>
              <span className="flex items-center gap-1.5">
                <Heart className="w-3.5 h-3.5 text-[#b5874a]" /> Fresh Daily Guarantee
              </span>
            </div>

          </motion.div>

        </div>
      </div>

    </div>
  )
}
