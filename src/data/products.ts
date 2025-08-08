// Centralized product data with enhanced structure
export interface Product {
  id: string
  name: string
  color: string
  colorCode: string
  length: string
  price: number
  originalPrice?: number
  rating: number
  reviews: number
  image: string
  images: string[]
  inStock: boolean
  popular?: boolean
  description: string
  weight: string
  texture: string
  features: string[]
  category: string
}

// Expanded product collection with more colors and better organization
export const afroKinkyProducts: Product[] = [
  // NATURAL BLACK COLLECTION
  {
    id: "afro-kinky-natural-black-14",
    name: 'Natural Black Afro Kinky Bulk Hair - 14"',
    color: "Natural Black",
    colorCode: "#1B1B1B",
    length: '14"',
    price: 35,
    originalPrice: 55,
    rating: 4.9,
    reviews: 234,
    image: "/IMG-20250629-WA0185.jpg",
    images: ["/IMG-20250629-WA0183.jpg", "/IMG-20250629-WA0185.jpg", "/IMG-20250629-WA0168.jpg"],
    inStock: true,
    popular: true,
    description: "Premium quality natural black afro kinky bulk hair perfect for braiding and protective styling.",
    weight: "50g",
    texture: "Afro Kinky",
    category: "afro-kinky-bulk",
    features: ["100% Premium Human Hair", "Natural Afro Kinky Texture", "Perfect for Braiding & Dreadlocks", "Heat Resistant up to 350°F"],
  },
  {
    id: "afro-kinky-natural-black-18",
    name: 'Natural Black Afro Kinky Bulk Hair - 18"',
    color: "Natural Black",
    colorCode: "#1B1B1B",
    length: '18"',
    price: 50,
    originalPrice: 70,
    rating: 4.9,
    reviews: 156,
    image: "/IMG-20250702-WA0001.jpg",
    images: ["/IMG-20250702-WA0001.jpg", "/IMG-20250702-WA0002.jpg", "/IMG-20250702-WA0003.jpg"],
    inStock: true,
    description: "Premium quality natural black afro kinky bulk hair perfect for braiding and protective styling.",
    weight: "50g",
    texture: "Afro Kinky",
    category: "afro-kinky-bulk",
    features: ["100% Premium Human Hair", "Natural Afro Kinky Texture", "Perfect for Braiding & Dreadlocks", "Heat Resistant up to 350°F"],
  },
  {
    id: "afro-kinky-natural-black-22",
    name: 'Natural Black Afro Kinky Bulk Hair - 22"',
    color: "Natural Black",
    colorCode: "#1B1B1B",
    length: '22"',
    price: 60,
    originalPrice: 85,
    rating: 4.8,
    reviews: 98,
    image: "/IMG-20250629-WA0197.jpg",
    images: ["/IMG-20250629-WA0197.jpg", "/IMG-20250702-WA0002.jpg", "/IMG-20250702-WA0006.jpg"],
    inStock: true,
    description: "Premium quality natural black afro kinky bulk hair perfect for braiding and protective styling.",
    weight: "50g",
    texture: "Afro Kinky",
    category: "afro-kinky-bulk",
    features: ["100% Premium Human Hair", "Natural Afro Kinky Texture", "Perfect for Braiding & Dreadlocks", "Heat Resistant up to 350°F"],
  },

  // DARK BROWN COLLECTION
  {
    id: "afro-kinky-dark-brown-14",
    name: 'Dark Brown Afro Kinky Bulk Hair - 14"',
    color: "Dark Brown",
    colorCode: "#3C2415",
    length: '14"',
    price: 35,
    originalPrice: 55,
    rating: 4.8,
    reviews: 167,
    image: "/afro_kinky_bulk_human_hair_auburn_black_mix_for_dreadlocks.jpg",
    images: ["/afro_kinky_bulk_human_hair_auburn_black_mix_for_dreadlocks.jpg", "/afro_kinky_hair_extensions_two_color_4c_protective_hairstyle_114x144_crop_center.webp"],
    inStock: true,
    popular: true,
    description: "Premium quality dark brown afro kinky bulk hair with rich brown color that complements various skin tones.",
    weight: "50g",
    texture: "Afro Kinky",
    category: "afro-kinky-bulk",
    features: ["100% Premium Human Hair", "Rich Dark Brown Color", "Perfect for Braiding & Dreadlocks", "Heat Resistant up to 350°F"],
  },
  {
    id: "afro-kinky-dark-brown-18",
    name: 'Dark Brown Afro Kinky Bulk Hair - 18"',
    color: "Dark Brown",
    colorCode: "#3C2415",
    length: '18"',
    price: 50,
    originalPrice: 70,
    rating: 4.6,
    reviews: 112,
    image: "/styles.webp",
    images: ["/soft-afro-kinky-bulk-for-natural-twists-and-locs.jpg", "/styles.webp", "/natural_texture_afro_kinky_hair_extensions_for_braiding_black_women_114x144_crop_center.webp"],
    inStock: true,
    description: "Premium quality dark brown afro kinky bulk hair with rich brown color that complements various skin tones.",
    weight: "50g",
    texture: "Afro Kinky",
    category: "afro-kinky-bulk",
    features: ["100% Premium Human Hair", "Rich Dark Brown Color", "Perfect for Braiding & Dreadlocks", "Heat Resistant up to 350°F"],
  },

  // MEDIUM BROWN COLLECTION
  {
    id: "afro-kinky-medium-brown-14",
    name: 'Medium Brown Afro Kinky Bulk Hair - 14"',
    color: "Medium Brown",
    colorCode: "#8B4513",
    length: '14"',
    price: 35,
    originalPrice: 55,
    rating: 4.7,
    reviews: 145,
    image: "/IMG-20250702-WA0001.jpg",
    images: ["/IMG-20250702-WA0001.jpg", "/highlight_afro_kinky_hair_extensions_for_natural_locs.webp"],
    inStock: true,
    description: "Premium quality medium brown afro kinky bulk hair with warm brown tones that enhance natural beauty.",
    weight: "50g",
    texture: "Afro Kinky",
    category: "afro-kinky-bulk",
    features: ["100% Premium Human Hair", "Warm Medium Brown Color", "Perfect for Braiding & Dreadlocks", "Heat Resistant up to 350°F"],
  },
  {
    id: "afro-kinky-medium-brown-18",
    name: 'Medium Brown Afro Kinky Bulk Hair - 18"',
    color: "Medium Brown",
    colorCode: "#8B4513",
    length: '18"',
    price: 50,
    originalPrice: 75,
    rating: 4.7,
    reviews: 145,
    image: "/rich_dark_brown_afro_kinky_bulk_for_4c_hair_and_loc_styles.webp",
    images: ["/rich_dark_brown_afro_kinky_bulk_for_4c_hair_and_loc_styles.webp", "/afro_kinky_bulk_extensions_suited_for_black_women_with_dreadlocks.jpg"],
    inStock: true,
    description: "Premium quality medium brown afro kinky bulk hair with warm brown tones that enhance natural beauty.",
    weight: "50g",
    texture: "Afro Kinky",
    category: "afro-kinky-bulk",
    features: ["100% Premium Human Hair", "Warm Medium Brown Color", "Perfect for Braiding & Dreadlocks", "Heat Resistant up to 350°F"],
  },

  // NEW REDDISH BROWN COLLECTION
  {
    id: "afro-kinky-reddish-brown-14",
    name: 'Reddish Brown Afro Kinky Bulk Hair - 14"',
    color: "Reddish Brown",
    colorCode: "#A0522D",
    length: '14"',
    price: 38,
    originalPrice: 58,
    rating: 4.6,
    reviews: 89,
    image: "/auburn_afro_kinky_hair_extensions_for_4c_hair_textures.jpg",
    images: ["/auburn_afro_kinky_hair_extensions_for_4c_hair_textures.jpg", "/afro_kinky_bulk_human_hair_auburn_black_mix_for_dreadlocks.jpg"],
    inStock: true,
    popular: true,
    description: "Stunning reddish brown afro kinky bulk hair with warm auburn tones perfect for adding dimension to your style.",
    weight: "50g",
    texture: "Afro Kinky",
    category: "afro-kinky-bulk",
    features: ["100% Premium Human Hair", "Rich Reddish Brown Color", "Auburn Highlights", "Perfect for Braiding & Dreadlocks"],
  },
  {
    id: "afro-kinky-reddish-brown-18",
    name: 'Reddish Brown Afro Kinky Bulk Hair - 18"',
    color: "Reddish Brown",
    colorCode: "#A0522D",
    length: '18"',
    price: 52,
    originalPrice: 72,
    rating: 4.7,
    reviews: 134,
    image: "/brown_afro_kinky_bulk_pink_tone_for_unique_dreadlock_styles.webp",
    images: ["/brown_afro_kinky_bulk_pink_tone_for_unique_dreadlock_styles.webp", "/tri-color_afro_kinky_bulk_human_hair_for_braiding_and_locs_114x144_crop_center.webp"],
    inStock: true,
    description: "Stunning reddish brown afro kinky bulk hair with warm auburn tones perfect for adding dimension to your style.",
    weight: "50g",
    texture: "Afro Kinky",
    category: "afro-kinky-bulk",
    features: ["100% Premium Human Hair", "Rich Reddish Brown Color", "Auburn Highlights", "Perfect for Braiding & Dreadlocks"],
  },

  // NEW BURGUNDY COLLECTION
  {
    id: "afro-kinky-burgundy-16",
    name: 'Burgundy Afro Kinky Bulk Hair - 16"',
    color: "Burgundy",
    colorCode: "#800020",
    length: '16"',
    price: 42,
    originalPrice: 62,
    rating: 4.5,
    reviews: 76,
    image: "/dark_brown_afro_kinky_bulk_human_hair_for_dreadlocks_black_women.webp",
    images: ["/dark_brown_afro_kinky_bulk_human_hair_for_dreadlocks_black_women.webp", "/dark_brown_afro_kinky_bulk_hair_perfect_for_protective_hairstyles_114x144_crop_center.webp"],
    inStock: true,
    popular: true,
    description: "Deep burgundy afro kinky bulk hair with rich wine tones for a bold and sophisticated look.",
    weight: "50g",
    texture: "Afro Kinky",
    category: "afro-kinky-bulk",
    features: ["100% Premium Human Hair", "Deep Burgundy Color", "Wine Red Tones", "Bold Fashion Statement"],
  },
  {
    id: "afro-kinky-burgundy-20",
    name: 'Burgundy Afro Kinky Bulk Hair - 20"',
    color: "Burgundy",
    colorCode: "#800020",
    length: '20"',
    price: 58,
    originalPrice: 78,
    rating: 4.6,
    reviews: 92,
    image: "/afro_kinky_bulk_human_hair_for_dreadlocks_and_twists_in_deep_brown_114x144_crop_center.webp",
    images: ["/afro_kinky_bulk_human_hair_for_dreadlocks_and_twists_in_deep_brown_114x144_crop_center.webp", "/soft_afro_kinky_bulk_hair_extensions_for_4c_protective_styles.webp"],
    inStock: true,
    description: "Deep burgundy afro kinky bulk hair with rich wine tones for a bold and sophisticated look.",
    weight: "50g",
    texture: "Afro Kinky",
    category: "afro-kinky-bulk",
    features: ["100% Premium Human Hair", "Deep Burgundy Color", "Wine Red Tones", "Bold Fashion Statement"],
  },

  // NEW PURPLE COLLECTION
  {
    id: "afro-kinky-purple-14",
    name: 'Purple Afro Kinky Bulk Hair - 14"',
    color: "Purple",
    colorCode: "#663399",
    length: '14"',
    price: 45,
    originalPrice: 65,
    rating: 4.4,
    reviews: 67,
    image: "/fluffy-afro-kinky-bulk-for-easy-twist-styling-on-4c-hair.webp",
    images: ["/fluffy-afro-kinky-bulk-for-easy-twist-styling-on-4c-hair.webp", "/afro-kinky-bulk-human-hair-that-blends-with-4c-hair.webp"],
    inStock: true,
    description: "Vibrant purple afro kinky bulk hair for creative and expressive protective styling.",
    weight: "50g",
    texture: "Afro Kinky",
    category: "afro-kinky-bulk",
    features: ["100% Premium Human Hair", "Vibrant Purple Color", "Creative Styling", "Eye-Catching Look"],
  },
  {
    id: "afro-kinky-purple-18",
    name: 'Purple Afro Kinky Bulk Hair - 18"',
    color: "Purple",
    colorCode: "#663399",
    length: '18"',
    price: 55,
    originalPrice: 75,
    rating: 4.5,
    reviews: 84,
    image: "/afro-kinky-bulk-hair-for-4c-hair-protective-styling.jpg",
    images: ["/afro-kinky-bulk-hair-for-4c-hair-protective-styling.jpg", "/afro-kinky-bulk-perfect-for-building-volume-in-locs.webp"],
    inStock: true,
    description: "Vibrant purple afro kinky bulk hair for creative and expressive protective styling.",
    weight: "50g",
    texture: "Afro Kinky",
    category: "afro-kinky-bulk",
    features: ["100% Premium Human Hair", "Vibrant Purple Color", "Creative Styling", "Eye-Catching Look"],
  },

  // NEW BLUE COLLECTION
  {
    id: "afro-kinky-blue-16",
    name: 'Blue Afro Kinky Bulk Hair - 16"',
    color: "Blue",
    colorCode: "#0066CC",
    length: '16"',
    price: 45,
    originalPrice: 65,
    rating: 4.3,
    reviews: 58,
    image: "/natural-black-spring-twist-brading-hair-for-protective-hairstyle.jpg",
    images: ["/natural-black-spring-twist-brading-hair-for-protective-hairstyle.jpg", "/kinky-4a-3c-spring-twists-perfect-for-black-women.webp"],
    inStock: true,
    description: "Bold blue afro kinky bulk hair for unique and trendy protective hairstyles.",
    weight: "50g",
    texture: "Afro Kinky",
    category: "afro-kinky-bulk",
    features: ["100% Premium Human Hair", "Bold Blue Color", "Trendy Fashion Choice", "Unique Styling Options"],
  },
  {
    id: "afro-kinky-blue-20",
    name: 'Blue Afro Kinky Bulk Hair - 20"',
    color: "Blue",
    colorCode: "#0066CC",
    length: '20"',
    price: 58,
    originalPrice: 78,
    rating: 4.4,
    reviews: 71,
    image: "/soft-spring-twists-human-hair-extensions-for-afro-curls.jpg",
    images: ["/soft-spring-twists-human-hair-extensions-for-afro-curls.jpg", "/soft-spring-twist-hair-extensions-for-natural-curls.webp"],
    inStock: true,
    description: "Bold blue afro kinky bulk hair for unique and trendy protective hairstyles.",
    weight: "50g",
    texture: "Afro Kinky",
    category: "afro-kinky-bulk",
    features: ["100% Premium Human Hair", "Bold Blue Color", "Trendy Fashion Choice", "Unique Styling Options"],
  },

  // NEW PINK COLLECTION
  {
    id: "afro-kinky-pink-14",
    name: 'Pink Afro Kinky Bulk Hair - 14"',
    color: "Pink",
    colorCode: "#FF69B4",
    length: '14"',
    price: 45,
    originalPrice: 65,
    rating: 4.2,
    reviews: 54,
    image: "/IMG-20250629-WA0193.jpg",
    images: ["/IMG-20250629-WA0193.jpg", "/WhatsApp Image 2025-06-29 at 14.09.11_581cec0e.jpg"],
    inStock: true,
    description: "Playful pink afro kinky bulk hair perfect for fun and creative protective styling.",
    weight: "50g",
    texture: "Afro Kinky",
    category: "afro-kinky-bulk",
    features: ["100% Premium Human Hair", "Vibrant Pink Color", "Fun & Playful", "Creative Expression"],
  },
  {
    id: "afro-kinky-pink-18",
    name: 'Pink Afro Kinky Bulk Hair - 18"',
    color: "Pink",
    colorCode: "#FF69B4",
    length: '18"',
    price: 55,
    originalPrice: 75,
    rating: 4.3,
    reviews: 68,
    image: "/IMG-20250702-WA0006.jpg",
    images: ["/IMG-20250702-WA0006.jpg", "/IMG-20250629-WA0200.jpg"],
    inStock: true,
    description: "Playful pink afro kinky bulk hair perfect for fun and creative protective styling.",
    weight: "50g",
    texture: "Afro Kinky",
    category: "afro-kinky-bulk",
    features: ["100% Premium Human Hair", "Vibrant Pink Color", "Fun & Playful", "Creative Expression"],
  },

  // NEW TWO-COLOR COMBINATIONS
  {
    id: "afro-kinky-black-brown-16",
    name: 'Black & Brown Mix Afro Kinky Bulk Hair - 16"',
    color: "Black & Brown Mix",
    colorCode: "#2F1B14",
    length: '16"',
    price: 48,
    originalPrice: 68,
    rating: 4.6,
    reviews: 112,
    image: "/tri-color_afro_kinky_bulk_human_hair_for_braiding_and_locs_114x144_crop_center.webp",
    images: ["/tri-color_afro_kinky_bulk_human_hair_for_braiding_and_locs_114x144_crop_center.webp", "/afro_kinky_hair_extensions_two_color_4c_protective_hairstyle_114x144_crop_center.webp"],
    inStock: true,
    popular: true,
    description: "Beautiful blend of natural black and brown tones for dimensional and natural-looking protective styles.",
    weight: "50g",
    texture: "Afro Kinky",
    category: "afro-kinky-bulk",
    features: ["100% Premium Human Hair", "Two-Tone Color Blend", "Natural Dimension", "Versatile Styling"],
  },
  {
    id: "afro-kinky-black-brown-20",
    name: 'Black & Brown Mix Afro Kinky Bulk Hair - 20"',
    color: "Black & Brown Mix",
    colorCode: "#2F1B14",
    length: '20"',
    price: 58,
    originalPrice: 78,
    rating: 4.7,
    reviews: 128,
    image: "/afro_kinky_bulk_human_hair_braiding_mix_for_4c_textured_hair.webp",
    images: ["/afro_kinky_bulk_human_hair_braiding_mix_for_4c_textured_hair.webp", "/realistic_afro_kinky_bulk_hair_for_locs_and_twists_styles_114x144_crop_center.webp"],
    inStock: true,
    description: "Beautiful blend of natural black and brown tones for dimensional and natural-looking protective styles.",
    weight: "50g",
    texture: "Afro Kinky",
    category: "afro-kinky-bulk",
    features: ["100% Premium Human Hair", "Two-Tone Color Blend", "Natural Dimension", "Versatile Styling"],
  },
  {
    id: "afro-kinky-brown-burgundy-18",
    name: 'Brown & Burgundy Mix Afro Kinky Bulk Hair - 18"',
    color: "Brown & Burgundy Mix",
    colorCode: "#654321",
    length: '18"',
    price: 52,
    originalPrice: 72,
    rating: 4.5,
    reviews: 95,
    image: "/brown_afro_kinky_bulk_pink_tone_for_unique_dreadlock_styles.webp",
    images: ["/brown_afro_kinky_bulk_pink_tone_for_unique_dreadlock_styles.webp", "/auburn_afro_kinky_hair_extensions_for_4c_hair_textures.jpg"],
    inStock: true,
    description: "Rich combination of brown and burgundy tones for a sophisticated and elegant look.",
    weight: "50g",
    texture: "Afro Kinky",
    category: "afro-kinky-bulk",
    features: ["100% Premium Human Hair", "Brown & Burgundy Blend", "Sophisticated Look", "Rich Color Depth"],
  },
  {
    id: "afro-kinky-purple-pink-16",
    name: 'Purple & Pink Mix Afro Kinky Bulk Hair - 16"',
    color: "Purple & Pink Mix",
    colorCode: "#9966CC",
    length: '16"',
    price: 50,
    originalPrice: 70,
    rating: 4.3,
    reviews: 73,
    image: "/highlight_afro_kinky_hair_extensions_for_natural_locs.webp",
    images: ["/highlight_afro_kinky_hair_extensions_for_natural_locs.webp", "/fluffy-afro-kinky-bulk-for-easy-twist-styling-on-4c-hair.webp"],
    inStock: true,
    description: "Vibrant mix of purple and pink for bold and creative protective styling.",
    weight: "50g",
    texture: "Afro Kinky",
    category: "afro-kinky-bulk",
    features: ["100% Premium Human Hair", "Purple & Pink Blend", "Bold Creative Look", "Fantasy Colors"],
  },

  // ADDITIONAL SHORTER LENGTHS
  {
    id: "afro-kinky-natural-black-10",
    name: 'Natural Black Afro Kinky Bulk Hair - 10"',
    color: "Natural Black",
    colorCode: "#1B1B1B",
    length: '10"',
    price: 25,
    originalPrice: 40,
    rating: 4.6,
    reviews: 89,
    image: "/IMG-20250629-WA0200.jpg",
    images: ["/IMG-20250629-WA0200.jpg", "/IMG-20250629-WA0197.jpg"],
    inStock: true,
    description: "Short length natural black afro kinky bulk hair perfect for starter locs and short protective styles.",
    weight: "50g",
    texture: "Afro Kinky",
    category: "afro-kinky-bulk",
    features: ["100% Premium Human Hair", "Natural Afro Kinky Texture", "Perfect for Short Styles", "Starter Locs"],
  },
  {
    id: "afro-kinky-natural-black-12",
    name: 'Natural Black Afro Kinky Bulk Hair - 12"',
    color: "Natural Black",
    colorCode: "#1B1B1B",
    length: '12"',
    price: 30,
    originalPrice: 45,
    rating: 4.7,
    reviews: 112,
    image: "/IMG-20250629-WA0185.jpg",
    images: ["/IMG-20250629-WA0185.jpg", "/IMG-20250629-WA0193.jpg"],
    inStock: true,
    description: "Medium-short length natural black afro kinky bulk hair ideal for various protective styling options.",
    weight: "50g",
    texture: "Afro Kinky",
    category: "afro-kinky-bulk",
    features: ["100% Premium Human Hair", "Natural Afro Kinky Texture", "Versatile Length", "Multiple Styling Options"],
  },
]

// Updated color options with new colors
export const colorOptions = [
  { key: "natural-black", name: "Natural Black", colorCode: "#1B1B1B" },
  { key: "dark-brown", name: "Dark Brown", colorCode: "#3C2415" },
  { key: "medium-brown", name: "Medium Brown", colorCode: "#8B4513" },
  { key: "reddish-brown", name: "Reddish Brown", colorCode: "#A0522D" },
  { key: "burgundy", name: "Burgundy", colorCode: "#800020" },
  { key: "purple", name: "Purple", colorCode: "#663399" },
  { key: "blue", name: "Blue", colorCode: "#0066CC" },
  { key: "pink", name: "Pink", colorCode: "#FF69B4" },
  { key: "black-brown-mix", name: "Black & Brown Mix", colorCode: "#2F1B14" },
  { key: "brown-burgundy-mix", name: "Brown & Burgundy Mix", colorCode: "#654321" },
  { key: "purple-pink-mix", name: "Purple & Pink Mix", colorCode: "#9966CC" },
]

// Length options remain the same
export const lengthOptions = ['10"', '12"', '14"', '16"', '18"', '20"', '22"']

// Pack options with discounts
export const packOptions = [
  { count: 1, label: "1 Pack", discount: 0, badge: "" },
  { count: 3, label: "3 Packs (Full Head)", discount: 15, badge: "Popular" },
  { count: 5, label: "5 Packs (Recommended)", discount: 30, badge: "Best Value" },
]

// Utility functions
export const getAllProducts = (): Product[] => {
  return afroKinkyProducts
}

export const getProductById = (id: string): Product | undefined => {
  return afroKinkyProducts.find((product) => product.id === id)
}

export const getProductsByColor = (color: string): Product[] => {
  return afroKinkyProducts.filter(
    (product) => product.color.toLowerCase().replace(/[^a-z0-9]/g, "-") === color.toLowerCase().replace(/[^a-z0-9]/g, "-"),
  )
}

export const getProductsByLength = (length: string): Product[] => {
  return afroKinkyProducts.filter((product) => product.length === length)
}

export const getAvailableColors = () => colorOptions
export const getAvailableLengths = () => lengthOptions
export const getPackOptions = () => packOptions

// Updated price calculation functions
export const getPriceForLength = (length: string): number => {
  const basePrices: { [key: string]: number } = {
    '10"': 25,
    '12"': 30,
    '14"': 35,
    '16"': 45,
    '18"': 50,
    '20"': 55,
    '22"': 60,
  }
  return basePrices[length] || 35
}

export const getColorMultiplier = (colorKey: string): number => {
  const multipliers: { [key: string]: number } = {
    "natural-black": 1.0,
    "dark-brown": 1.05,
    "medium-brown": 1.1,
    "reddish-brown": 1.15,
    "burgundy": 1.2,
    "purple": 1.25,
    "blue": 1.25,
    "pink": 1.25,
    "black-brown-mix": 1.15,
    "brown-burgundy-mix": 1.2,
    "purple-pink-mix": 1.3,
  }
  return multipliers[colorKey] || 1.0
}

export const calculateDiscountPercentage = (originalPrice: number, salePrice: number): number => {
  return Math.round(((originalPrice - salePrice) / originalPrice) * 100)
}

export const getSimilarProducts = (currentProduct: Product, limit = 4): Product[] => {
  if (!currentProduct) return []

  const sameColorProducts = afroKinkyProducts.filter(
    (p) => p.color === currentProduct.color && p.id !== currentProduct.id,
  )

  return sameColorProducts.slice(0, limit)
}

// Get products organized by color groups for better display
export const getProductsByColorGroup = () => {
  const groups: { [key: string]: Product[] } = {}

  colorOptions.forEach((color) => {
    groups[color.key] = afroKinkyProducts.filter((product) => 
      product.color.toLowerCase().replace(/[^a-z0-9]/g, "-") === color.key
    )
  })

  return groups
}

// Get featured products (popular ones from each color category)
export const getFeaturedProducts = (): Product[] => {
  const featured: Product[] = []
  
  // Get one popular product from each main color category
  const mainColors = ["Natural Black", "Dark Brown", "Reddish Brown", "Burgundy", "Purple", "Black & Brown Mix"]
  
  mainColors.forEach((color) => {
    const colorProducts = afroKinkyProducts.filter(p => p.color === color)
    const popularProduct = colorProducts.find(p => p.popular) || colorProducts[0]
    if (popularProduct) {
      featured.push(popularProduct)
    }
  })

  return featured
}

// Get products by category (natural colors vs fashion colors)
export const getNaturalColorProducts = (): Product[] => {
  const naturalColors = ["Natural Black", "Dark Brown", "Medium Brown", "Reddish Brown", "Black & Brown Mix", "Brown & Burgundy Mix"]
  return afroKinkyProducts.filter(product => naturalColors.includes(product.color))
}

export const getFashionColorProducts = (): Product[] => {
  const fashionColors = ["Purple", "Blue", "Pink", "Burgundy", "Purple & Pink Mix"]
  return afroKinkyProducts.filter(product => fashionColors.includes(product.color))
}