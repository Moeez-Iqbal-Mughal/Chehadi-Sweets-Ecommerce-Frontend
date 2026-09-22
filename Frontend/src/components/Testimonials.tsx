import { Star, Quote, CheckCircle2, ThumbsUp, MessageSquareQuote } from "lucide-react"

export interface ReviewItem {
  id: string
  name: string
  location: string
  avatar: string
  rating: number
  date: string
  text: string
  dish: string
  verified: boolean
}

const REVIEWS: ReviewItem[] = [
  {
    id: "rev-1",
    name: "Layla Mansour",
    location: "Bankstown, Sydney",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    rating: 5,
    date: "2 days ago",
    text: "The best Halawet El Jebn in all of Sydney, hands down! The clotted Ashta is so incredibly fresh and creamy, not overly sweet, with the perfect aroma of orange blossom syrup.",
    dish: "Ordered: Halawet El Jebn & Ashta Rolls",
    verified: true,
  },
  {
    id: "rev-2",
    name: "Michael Karam",
    location: "Parramatta, Sydney",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    rating: 5,
    date: "1 week ago",
    text: "Chehadi's hot cheese Knefe is legendary. The cheese pull is immense and the shredded kataifi crust is always golden and crispy. We order family trays every weekend!",
    dish: "Ordered: Traditional Warm Cheese Knefe Pan",
    verified: true,
  },
  {
    id: "rev-3",
    name: "Zainab Haddad",
    location: "Chester Hill, Sydney",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80",
    rating: 5,
    date: "3 weeks ago",
    text: "Ordered 5 large Baklava gift boxes for our Eid gathering. The packaging in emerald and gold foil was stunning, and the pistachio baklava stayed ultra-crisp. 10/10 craftsmanship!",
    dish: "Ordered: Royal Baklava Assorted Gift Boxes",
    verified: true,
  },
  {
    id: "rev-4",
    name: "Omar Farooq",
    location: "Liverpool, Sydney",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
    rating: 5,
    date: "1 month ago",
    text: "Their Mafroukeh topped with fresh clotted Ashta and whole Aleppo pistachios is pure luxury. You can immediately taste the pure butter ghee and quality ingredients.",
    dish: "Ordered: Mafroukeh with Clotted Ashta",
    verified: true,
  },
  {
    id: "rev-5",
    name: "Sarah Jenkins",
    location: "Strathfield, Sydney",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
    rating: 5,
    date: "1 month ago",
    text: "We ordered the Knefe catering pan and sweets buffet for our 50-person corporate function in Sydney. Everything arrived warm on time and the team was raving about it!",
    dish: "Ordered: Knefe & Sweets Event Catering",
    verified: true,
  },
  {
    id: "rev-6",
    name: "Karim Al-Sayed",
    location: "Auburn, Sydney",
    avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=150&auto=format&fit=crop&q=80",
    rating: 5,
    date: "2 months ago",
    text: "Best Znoud El Sit in Sydney. The phyllo crunch is loud, the filling is silky smooth, and the candied orange blossom on top gives it an authentic traditional touch.",
    dish: "Ordered: Znoud El Sit Pastry Platter",
    verified: true,
  },
  {
    id: "rev-7",
    name: "Nour El-Khoury",
    location: "Merrylands, Sydney",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80",
    rating: 5,
    date: "2 months ago",
    text: "Every single bite tastes like authentic homemade perfection. Their date Maamoul melts in your mouth and isn't dry like other places. Highly recommend this local gem!",
    dish: "Ordered: Handcrafted Date & Walnut Maamoul",
    verified: true,
  },
]

export function Testimonials() {
  // Double array for seamless continuous infinite marquee loop
  const marqueeReviews = [...REVIEWS, ...REVIEWS]

  return (
    <section className="py-20 lg:py-24 bg-gradient-to-b from-[#fbf8f3] via-[#ffffff] to-[#fbf8f3] border-t border-b border-[#b5874a]/15 overflow-hidden relative">
      
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-gradient-to-r from-[#dfb776]/10 via-[#b5874a]/5 to-[#dfb776]/10 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 text-[#b5874a] text-xs font-bold uppercase tracking-wider border border-[#b5874a]/25 shadow-sm">
            <Star className="w-3.5 h-3.5 fill-[#b5874a]" />
            <span>Sydney Customer Reviews</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#b5874a]" />
            <span>4.3 ★ Rating</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2b160f] font-serif leading-tight">
            Loved Across Sydney
          </h2>

          <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
            From Bankstown to Parramatta, discover why thousands of customers celebrate their families, holidays, and milestones with Chehadi Sweets.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-1 text-xs text-neutral-500 font-medium">
            <span className="flex items-center gap-1.5 text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" /> 100% Verified Purchases
            </span>
            <span className="flex items-center gap-1.5 text-[#b5874a] bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
              <ThumbsUp className="w-4 h-4 text-[#b5874a]" /> 250+ 5-Star Reviews
            </span>
          </div>
        </div>

      </div>

      {/* Infinite Moving Marquee Stream with Pure CSS Hardware Acceleration */}
      <div className="relative w-full overflow-hidden">
        {/* Left & Right Gradient Shadows for seamless fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[#fbf8f3] to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[#fbf8f3] to-transparent z-20 pointer-events-none" />

        <div className="animate-marquee-smooth flex gap-6 py-4 px-4">
          {marqueeReviews.map((rev, index) => (
            <div
              key={`${rev.id}-${index}`}
              className="w-[320px] sm:w-[380px] shrink-0 bg-white rounded-3xl p-6 shadow-md hover:shadow-2xl border border-neutral-200/90 transition-all duration-300 flex flex-col justify-between space-y-4 group hover:-translate-y-1.5"
            >
              {/* Card Top: Avatar, Name, Rating & Quote */}
              <div className="space-y-3.5">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <img
                        src={rev.avatar}
                        alt={rev.name}
                        className="w-12 h-12 rounded-full object-cover border-2 border-[#b5874a]/40 shadow-sm"
                      />
                      {rev.verified && (
                        <span 
                          className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full flex items-center justify-center text-white text-[9px] shadow-sm border border-white"
                          title="Verified Customer"
                        >
                          ✓
                        </span>
                      )}
                    </div>

                    <div>
                      <div className="flex items-center gap-1.5">
                        <h4 className="text-sm font-bold text-[#2b160f] font-serif">
                          {rev.name}
                        </h4>
                      </div>
                      <div className="text-[11px] text-neutral-500 font-medium">
                        {rev.location}
                      </div>
                    </div>
                  </div>

                  <Quote className="w-7 h-7 text-[#dfb776]/30 group-hover:text-[#b5874a]/60 transition-colors shrink-0" />
                </div>

                {/* Stars & Date */}
                <div className="flex items-center justify-between pt-1">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] font-medium text-neutral-400">
                    {rev.date}
                  </span>
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal line-clamp-3 group-hover:line-clamp-none transition-all">
                  “{rev.text}”
                </p>
              </div>

              {/* Bottom Dish Tag */}
              <div className="pt-3 border-t border-neutral-100 flex items-center justify-between text-[11px]">
                <span className="text-[#b5874a] font-semibold flex items-center gap-1 truncate">
                  <MessageSquareQuote className="w-3.5 h-3.5 shrink-0" />
                  <span className="truncate">{rev.dish}</span>
                </span>
                <span className="text-[10px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full font-medium shrink-0 ml-2">
                  Verified
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Pause Hint */}
      <div className="text-center pt-6">
        <p className="text-[11px] text-neutral-400 font-medium">
          Hover over any review card to pause and read full details
        </p>
      </div>

    </section>
  )
}
