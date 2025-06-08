import Image from "next/image"
import Link from "next/link"
import { formatCurrency } from "@/lib/utils"

interface Product {
  id: number
  name: string
  price: number
  image: string
  category: string
}

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/shop/${product.category}/${product.id}`} className="group">
      <div className="overflow-hidden rounded-lg">
        <div className="relative aspect-[3/4]">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </div>
      <div className="mt-3">
        <h3 className="font-medium text-[#1a2942]">{product.name}</h3>
        <p className="mt-1 font-playfair text-[#d5a293]">{formatCurrency(product.price)}</p>
      </div>
    </Link>
  )
}
