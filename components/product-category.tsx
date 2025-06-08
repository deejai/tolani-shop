import Image from "next/image"
import Link from "next/link"

interface ProductCategoryProps {
  title: string
  image: string
  href: string
}

export default function ProductCategory({ title, image, href }: ProductCategoryProps) {
  return (
    <Link href={href} className="group">
      <div className="relative overflow-hidden rounded-lg">
        <div className="aspect-square relative">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a2942]/70 to-transparent" />
        <h3 className="absolute bottom-6 left-6 text-3xl font-playfair text-white">{title}</h3>
      </div>
    </Link>
  )
}
