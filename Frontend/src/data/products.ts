export interface Product {
  id: string
  name: string
  arabicName?: string
  category: 'ashta' | 'baklava' | 'knefe' | 'maamoul' | 'cakes'
  description: string
  image: string
  tags: string[]
  isBestSeller?: boolean
  isFreshDaily?: boolean
  price: number
  portion?: string
  options: {
    label: string
    weight: string
    price: number
  }[]
}

export const CATEGORIES = [
  { id: 'all', name: 'All Delights', count: 10 },
  { id: 'ashta', name: 'Fresh Ashta Sweets', count: 4 },
  { id: 'baklava', name: 'Baklava Platters', count: 2 },
  { id: 'knefe', name: 'Warm Knefe', count: 2 },
  { id: 'maamoul', name: 'Maamoul & Kaak', count: 1 },
  { id: 'cakes', name: 'Celebration Cakes', count: 2 },
] as const

export const PRODUCTS: Product[] = [
  {
    id: 'halawet-el-jebn',
    name: 'Halawet El Jebn (Sweet Cheese Rolls)',
    arabicName: 'حلاوة الجبن بالقشطة',
    category: 'ashta',
    description: 'Delicate rolls of sweet semolina cheese dough stuffed with our signature fresh clotted Ashta cream, crowned with ground emerald pistachios and rose petal blossom syrup.',
    image: '/images/halawet.jpg',
    tags: ['Fresh Clotted Ashta', 'Halal', 'Vegetarian', 'Best Seller'],
    isBestSeller: true,
    isFreshDaily: true,
    price: 24.00,
    options: [{ label: 'Fresh Order', weight: '', price: 24.00 }],
  },
  {
    id: 'znoud-el-sit',
    name: 'Iznood / Znoud El Sit (Ladies Arms)',
    arabicName: 'زنود الست المقرمشة',
    category: 'ashta',
    description: 'Crisp, paper-thin golden fried phyllo cylinders brimming with hot fragrant Ashta clotted cream, soaked in orange blossom sugar syrup and garnished with crushed Aleppo pistachios.',
    image: '/images/hero.jpg',
    tags: ['Signature Recipe', 'Fresh Daily', 'Halal'],
    isBestSeller: true,
    isFreshDaily: true,
    price: 24.00,
    options: [{ label: 'Fresh Order', weight: '', price: 24.00 }],
  },
  {
    id: 'traditional-cheese-knefe',
    name: 'Traditional Cheese Knefe (Warm Tray)',
    arabicName: 'كنافة بالجبنة النابلسية',
    category: 'knefe',
    description: 'Golden crunchy shredded kataifi pastry blanketed over bubbling stringy Akkawi and sweet cheeses, served warm with our homemade rose & orange blossom sugar syrup in a pourer.',
    image: '/images/knafeh.jpg',
    tags: ['Served Warm', 'Fresh On Order', 'Halal'],
    isBestSeller: true,
    isFreshDaily: true,
    price: 22.00,
    options: [{ label: 'Fresh Order', weight: '', price: 22.00 }],
  },
  {
    id: 'deluxe-mixed-baklava',
    name: 'Royal Mixed Baklava Luxury Box',
    arabicName: 'مشكل بقلاوة ملكي فاخر',
    category: 'baklava',
    description: 'Our award-winning assortment of crispy layered diamond baklava with pistachios, cashew fingers (Asbieh), bird nests (Osh El Bulbul), and walnut triangles brushed with pure butter ghee.',
    image: '/images/baklava.jpg',
    tags: ['Gifting Favorite', 'Long Lasting', 'Halal'],
    isBestSeller: true,
    price: 28.00,
    options: [{ label: 'Fresh Order', weight: '', price: 28.00 }],
  },
  {
    id: 'mafroukeh-ashta',
    name: 'Mafroukeh with Clotted Ashta',
    arabicName: 'مفروكة بالقشطة البلدية والمكسرات',
    category: 'ashta',
    description: 'Toasted buttery semolina dough scented with caramel and orange blossom, piled high with fresh clotted Ashta cream, toasted almonds, pine nuts, and roasted pistachios.',
    image: '/images/halawet.jpg',
    tags: ['Pure Luxury', 'Fresh Ashta', 'Halal'],
    isBestSeller: true,
    isFreshDaily: true,
    price: 24.00,
    options: [{ label: 'Fresh Order', weight: '', price: 24.00 }],
  },
  {
    id: 'handcrafted-maamoul',
    name: 'Artisanal Mixed Maamoul Box',
    arabicName: 'معمول مشكل فاخر (فستق، جوز، تمر)',
    category: 'maamoul',
    description: 'Heritage semolina shortbreads hand-pressed in wooden molds with three authentic fillings: Medjool date paste, crushed Syrian pistachios, and spiced roasted walnuts.',
    image: '/images/maamoul.jpg',
    tags: ['Traditional Heritage', 'Tea Time Special', 'Halal'],
    price: 26.00,
    options: [{ label: 'Fresh Order', weight: '', price: 26.00 }],
  },
  {
    id: 'ward-el-sham',
    name: 'Ward El Sham / Tij El Malak',
    arabicName: 'ورد الشام وتاج الملك بالقشطة',
    category: 'ashta',
    description: 'Handcrafted floral phyllo crowns baked golden and filled with fresh clotted Ashta cream, topped with candied rose blossom and roasted pistachios.',
    image: '/images/hero.jpg',
    tags: ['Crown Jewel', 'Fresh Daily', 'Halal'],
    price: 24.00,
    options: [{ label: 'Fresh Order', weight: '', price: 24.00 }],
  },
  {
    id: 'ashta-knefe',
    name: 'Creamy Ashta Knefe',
    arabicName: 'كنافة بالقشطة البلدية',
    category: 'knefe',
    description: 'Rich and velvety clotted Ashta cream sandwiched between buttery toasted semolina crusts, drenched in aromatic syrup and studded with roasted pistachios.',
    image: '/images/knafeh.jpg',
    tags: ['Rich Ashta Cream', 'Served Warm', 'Halal'],
    price: 22.00,
    options: [{ label: 'Fresh Order', weight: '', price: 22.00 }],
  },
  {
    id: 'pistachio-ballorieh',
    name: 'Pistachio Ballorieh Luxury Box',
    arabicName: 'بلورية بالفستق الحلبي الملكي',
    category: 'baklava',
    description: 'Precious white kataifi threads pressed around an ultra-dense layer of bright green Aleppo pistachios, lightly scented with pure orange blossom syrup.',
    image: '/images/baklava.jpg',
    tags: ['Pure Pistachio', 'Luxury Delicacy', 'Halal'],
    price: 30.00,
    options: [{ label: 'Fresh Order', weight: '', price: 30.00 }],
  },
  {
    id: 'black-forest-cake',
    name: 'Chehadi Traditional Black Forest Cake',
    arabicName: 'كيك الغابة السوداء الكلاسيكي',
    category: 'cakes',
    description: 'Delectable chocolate sponge layered with sweet and sour Morello cherries, rich whipped cream, and finished with shaved dark chocolate curls.',
    image: '/images/hero.jpg',
    tags: ['Delectable Cake', 'Fresh Daily', 'Halal'],
    price: 60.00,
    options: [{ label: 'Fresh Order', weight: '', price: 60.00 }],
  },
  {
    id: 'signature-mud-cake',
    name: 'Chehadi Chocolate Mud Cake',
    arabicName: 'كيك الشوكولاتة والمد كيك الفاخر',
    category: 'cakes',
    description: 'Rich Belgian dark chocolate mud cake layered with hazelnut praline, silky chocolate ganache, and topped with fresh berries and cocoa dust.',
    image: '/images/hero.jpg',
    tags: ['Celebration Special', 'Fresh Daily', 'Halal'],
    price: 65.00,
    options: [{ label: 'Fresh Order', weight: '', price: 65.00 }],
  },
]
