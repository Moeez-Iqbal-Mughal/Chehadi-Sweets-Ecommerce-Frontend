import { useNavigate } from "react-router-dom"
import { ArrowUpRight } from "lucide-react"

interface CategoryShowcaseProps {
  onSelectCategory?: (categoryId: string) => void
}

const CATEGORY_CARDS = [
  {
    id: "ashta",
    title: "Fresh Ashta Delicacies",
    subtitle: "Halawet El Jebn, Znoud El Sit & Madlouka",
    tag: "Made Fresh Daily",
    image: "/images/halawet.jpg",
    cols: "col-span-1 md:col-span-2 lg:col-span-2",
  },
  {
    id: "baklava",
    title: "Royal Baklava Platters",
    subtitle: "Pistachio, Cashew & Bird's Nests",
    tag: "Premium Gifting",
    image: "/images/baklava.jpg",
    cols: "col-span-1 md:col-span-1 lg:col-span-1",
  },
  {
    id: "knefe",
    title: "Warm Melted Knefe",
    subtitle: "Sweet Cheese & Rose Blossom Syrup",
    tag: "Served Hot",
    image: "/images/knafeh.jpg",
    cols: "col-span-1 md:col-span-1 lg:col-span-1",
  },
  {
    id: "maamoul",
    title: "Handcrafted Maamoul",
    subtitle: "Medjool Dates, Aleppo Pistachios & Walnuts",
    tag: "Heritage Shortbread",
    image: "/images/maamoul.jpg",
    cols: "col-span-1 md:col-span-1 lg:col-span-1",
  },
  {
    id: "cakes",
    title: "Cakes & Party Trays",
    subtitle: "Signature Mud Cakes & Celebration Platters",
    tag: "Special Occasions",
    image: "/images/hero.jpg",
    cols: "col-span-1 md:col-span-1 lg:col-span-1",
  },
]

export function CategoryShowcase({ onSelectCategory }: CategoryShowcaseProps) {
  const navigate = useNavigate()

  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#b5874a] tracking-widest uppercase mb-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#b5874a]"></span>
              Artisanal Selection
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#2b160f] font-serif">
              Explore Our Categories
            </h2>
          </div>
          <p className="text-neutral-500 text-sm max-w-md">
            Prepared every morning by master Middle Eastern pastry chefs in Chester Hill using traditional copper pans and heritage recipes.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {CATEGORY_CARDS.map((cat) => (
            <div
              key={cat.id}
              onClick={() => {
                if (onSelectCategory) onSelectCategory(cat.id)
                navigate(`/menu?category=${cat.id}`)
              }}
              className={`group relative rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer h-72 sm:h-80 border border-neutral-100 ${cat.cols}`}
            >
              {/* Background Image */}
              <img
                src={cat.image}
                alt={cat.title}
                className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#2b160f]/90 via-[#2b160f]/40 to-transparent group-hover:from-[#2b160f]/95 transition-colors duration-300" />

              {/* Tag at Top */}
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#2b160f] text-xs font-bold shadow-sm">
                  {cat.tag}
                </span>
              </div>

              {/* Hover Action Icon at Top Right */}
              <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center group-hover:bg-[#b5874a] group-hover:text-white transition-all duration-300 transform group-hover:rotate-45">
                <ArrowUpRight className="w-5 h-5" />
              </div>

              {/* Content at Bottom */}
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <h3 className="text-xl sm:text-2xl font-bold font-serif mb-1 group-hover:text-[#dfb776] transition-colors">
                  {cat.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-200 line-clamp-1">
                  {cat.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
