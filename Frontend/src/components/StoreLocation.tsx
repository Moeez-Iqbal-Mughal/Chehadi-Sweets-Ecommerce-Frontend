import { MapPin, Clock, Phone, Navigation, ShoppingBag, ExternalLink, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export function StoreLocation() {
  const googleMapsUrl = "https://www.google.com/maps/dir/?api=1&destination=Chehadi+Sweets,+150-152+Waldron+Rd,+Chester+Hill+NSW+2162"

  return (
    <section id="location" className="py-20 bg-white">
      <div className="max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[#b5874a] tracking-widest uppercase">
            <MapPin className="w-3.5 h-3.5" />
            <span>Visit Our Patisserie</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2b160f] font-serif">
            Chester Hill Store & Hours
          </h2>
          <p className="text-neutral-500 text-sm">
            Step into our sweet shop to smell the fresh orange blossom syrup and choose your favorite sweet trays straight from the oven.
          </p>
        </div>

        {/* Location & Details Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Info Panel */}
          <div className="lg:col-span-6 bg-[#fbf8f3] rounded-3xl p-8 border border-[#b5874a]/20 shadow-sm flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#b5874a]/15 text-[#b5874a] flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#2b160f]">Store Address</h3>
                  <p className="text-sm text-neutral-600 font-medium">
                    150–152 Waldron Road, Chester Hill NSW 2162
                  </p>
                  <p className="text-xs text-neutral-500 mt-0.5">
                    Sydney, Australia (3 min walk from Chester Hill Station • Ample parking)
                  </p>
                </div>
              </div>

              {/* Hours: 9am - 10pm */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#b5874a]/15 text-[#b5874a] flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#2b160f]">Trading Hours</h3>
                  <div className="text-sm text-neutral-600 space-y-0.5 mt-0.5">
                    <div className="flex justify-between gap-6 font-semibold">
                      <span>Monday – Sunday (7 Days):</span>
                      <span className="font-bold text-[#b5874a]">9:00 AM – 10:00 PM</span>
                    </div>
                    <div className="text-xs text-emerald-600 font-semibold pt-1">
                      ● Open Every Day Including Public Holidays
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#b5874a]/15 text-[#b5874a] flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#2b160f]">Phone Orders & Inquiries</h3>
                  <a
                    href="tel:+61410390945"
                    className="text-lg font-bold text-[#b5874a] hover:underline"
                  >
                    +61 410 390 945
                  </a>
                  <p className="text-xs text-neutral-500">
                    Call ahead for custom hot Knefe pans and large event catering
                  </p>
                </div>
              </div>

            </div>

            {/* Action Buttons */}
            <div className="pt-4 border-t border-[#b5874a]/15 flex flex-col sm:flex-row gap-3">
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="flex-1"
              >
                <Button className="w-full bg-[#2b160f] hover:bg-[#42261b] text-white rounded-full py-3 font-semibold text-xs flex items-center justify-center gap-2">
                  <Navigation className="w-4 h-4 text-[#b5874a]" />
                  Google Maps Directions
                  <ExternalLink className="w-3.5 h-3.5" />
                </Button>
              </a>

              <a
                href="tel:+61410390945"
                className="flex-1"
              >
                <Button variant="outline" className="w-full border-neutral-300 hover:bg-white text-[#2b160f] rounded-full py-3 font-semibold text-xs flex items-center justify-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-[#b5874a]" />
                  Call Store Directly
                </Button>
              </a>
            </div>

          </div>

          {/* Right Direct Fulfillment Info */}
          <div className="lg:col-span-6 bg-[#2b160f] text-white rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden shadow-xl border border-[#b5874a]/30">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#b5874a]/20 rounded-full blur-3xl pointer-events-none" />

            <div className="space-y-5 relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#dfb776] text-xs font-semibold">
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>Direct Store Ordering</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold font-serif leading-snug">
                Fresh In-Store Pickup & Delivery
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed">
                Order directly from our website or call our counter team. We ensure your sweets are packed fresh from today's batch.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                  <div className="text-xs font-bold text-[#dfb776] flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#b5874a]" /> In-Store Pickup
                  </div>
                  <div className="text-[11px] text-neutral-300">
                    Ready in 15-30 minutes at Chester Hill
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                  <div className="text-xs font-bold text-[#dfb776] flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#b5874a]" /> Sydney Delivery
                  </div>
                  <div className="text-[11px] text-neutral-300">
                    Free Sydney delivery on orders over $80
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between text-xs text-neutral-300 relative z-10">
              <span>📍 150–152 Waldron Rd, Chester Hill</span>
              <span className="text-[#dfb776] font-semibold">9:00 AM – 10:00 PM Daily</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
