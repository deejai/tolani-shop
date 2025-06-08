export interface Product {
  id: number
  name: string
  price: number
  description: string
  details: string
  sizes: string[]
  colors: string[]
  images: string[]
  category: string
  featured: boolean
}

export interface CartItem {
  id: number
  product_id: number
  name: string
  price: number
  image: string
  color: string
  size: string
  quantity: number
  category: string
}

export const products: Product[] = [
  {
    id: 1,
    name: "Elegant Wrap Blouse",
    price: 15000,
    description:
      "This elegant wrap blouse is crafted from premium cotton, designed to provide both style and comfort. Perfect for any occasion, it embodies the essence of modern Nigerian fashion.",
    details: "Material: 100% Cotton\nCare: Machine wash cold\nMade in Nigeria\nModel is 5'9\" and wearing size S",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Beige", "Black", "Navy"],
    images: [
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
    ],
    category: "clothing",
    featured: true,
  },
  {
    id: 2,
    name: "High-Waist Trousers",
    price: 18000,
    description:
      "Sophisticated high-waist trousers that elongate your silhouette. Made from premium fabric with a tailored fit.",
    details:
      "Material: 65% Polyester, 35% Cotton\nCare: Dry clean only\nMade in Nigeria\nModel is 5'9\" and wearing size M",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Beige", "Black", "Navy", "Olive"],
    images: ["/placeholder.svg?height=600&width=600", "/placeholder.svg?height=600&width=600"],
    category: "clothing",
    featured: true,
  },
  {
    id: 3,
    name: "Signature Perfume",
    price: 12000,
    description:
      "Our signature fragrance captures the essence of Nigerian elegance with notes of jasmine, sandalwood, and citrus.",
    details:
      "Volume: 50ml\nFragrance Family: Floral Oriental\nTop Notes: Bergamot, Lemon\nHeart Notes: Jasmine, Rose\nBase Notes: Sandalwood, Musk",
    sizes: ["50ml", "100ml"],
    colors: ["Gold"],
    images: ["/placeholder.svg?height=600&width=600", "/placeholder.svg?height=600&width=600"],
    category: "fragrance",
    featured: true,
  },
  {
    id: 4,
    name: "Gold Chain Bracelet",
    price: 9000,
    description:
      "Elegant gold-plated chain bracelet that adds sophistication to any outfit. Adjustable length for perfect fit.",
    details: "Material: Gold-plated brass\nLength: Adjustable 16-20cm\nCare: Avoid water and perfume\nMade in Nigeria",
    sizes: ["One Size"],
    colors: ["Gold", "Silver", "Rose Gold"],
    images: ["/placeholder.svg?height=600&width=600", "/placeholder.svg?height=600&width=600"],
    category: "accessories",
    featured: true,
  },
  {
    id: 5,
    name: "Silk Midi Dress",
    price: 25000,
    description: "Luxurious silk midi dress with a flattering A-line silhouette. Perfect for special occasions.",
    details: "Material: 100% Silk\nCare: Dry clean only\nMade in Nigeria\nModel is 5'9\" and wearing size S",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Champagne", "Emerald", "Navy"],
    images: ["/placeholder.svg?height=600&width=600", "/placeholder.svg?height=600&width=600"],
    category: "clothing",
    featured: false,
  },
  {
    id: 6,
    name: "Leather Handbag",
    price: 22000,
    description: "Premium leather handbag with multiple compartments. Handcrafted by Nigerian artisans.",
    details:
      "Material: Genuine Leather\nDimensions: 30cm x 25cm x 12cm\nCare: Use leather conditioner\nMade in Nigeria",
    sizes: ["One Size"],
    colors: ["Black", "Brown", "Tan"],
    images: ["/placeholder.svg?height=600&width=600", "/placeholder.svg?height=600&width=600"],
    category: "accessories",
    featured: false,
  },
  {
    id: 7,
    name: "Floral Perfume",
    price: 10000,
    description: "Light and fresh floral fragrance perfect for everyday wear. Features notes of peony and white tea.",
    details:
      "Volume: 30ml\nFragrance Family: Fresh Floral\nTop Notes: Peony, Green Leaves\nHeart Notes: White Tea, Lily\nBase Notes: Cedar, Musk",
    sizes: ["30ml", "50ml"],
    colors: ["Pink"],
    images: ["/placeholder.svg?height=600&width=600"],
    category: "fragrance",
    featured: false,
  },
  {
    id: 8,
    name: "Statement Earrings",
    price: 7500,
    description: "Bold statement earrings that make any outfit stand out. Lightweight and comfortable to wear.",
    details: "Material: Gold-plated brass with crystals\nLength: 6cm\nCare: Store in jewelry box\nMade in Nigeria",
    sizes: ["One Size"],
    colors: ["Gold", "Silver"],
    images: ["/placeholder.svg?height=600&width=600"],
    category: "accessories",
    featured: false,
  },
]

// In-memory cart storage (in a real app, this would be in a database)
export let cartItems: CartItem[] = []

export const addToCart = (item: Omit<CartItem, "id">) => {
  const existingItem = cartItems.find(
    (cartItem) =>
      cartItem.product_id === item.product_id && cartItem.color === item.color && cartItem.size === item.size,
  )

  if (existingItem) {
    existingItem.quantity += item.quantity
  } else {
    const newItem = {
      ...item,
      id: Date.now() + Math.random(), // Simple ID generation
    }
    cartItems.push(newItem)
  }
}

export const updateCartItem = (id: number, quantity: number) => {
  const item = cartItems.find((item) => item.id === id)
  if (item) {
    item.quantity = quantity
  }
}

export const removeFromCart = (id: number) => {
  cartItems = cartItems.filter((item) => item.id !== id)
}

export const clearCart = () => {
  cartItems = []
}
