import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import ProductCategory from "@/components/product-category"
import FeaturedProducts from "@/components/featured-products"
import NewsletterSignup from "@/components/newsletter-signup"

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative flex flex-col md:flex-row">
        <div className="bg-[#f5efe7] md:w-1/2 p-8 md:p-16 flex items-center">
          <div className="max-w-xl">
            <h1 className="text-5xl md:text-7xl font-playfair font-medium text-[#1a2942] leading-tight">
              Elegant Apparel &amp; Accessories
            </h1>
            <p className="mt-6 text-[#1a2942]/80 text-lg">
              Discover our curated collection of premium Nigerian fashion, designed for the modern individual.
            </p>
            <Button
              asChild
              className="mt-8 bg-[#d5a293] hover:bg-[#c08e7f] text-white rounded-full px-8 py-6 font-montserrat"
            >
              <Link href="/shop">SHOP NOW</Link>
            </Button>
          </div>
        </div>
        <div className="md:w-1/2 bg-[#1a2942] relative min-h-[500px]">
          <Image
            src="/images/hero-model.jpg"
            alt="Model wearing elegant apparel"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute right-8 bottom-8 w-32 h-32 border-2 border-[#f5efe7] rounded-full hidden md:block"></div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="bg-[#f5efe7] py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-5xl font-playfair text-[#1a2942] mb-12">Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ProductCategory title="Clothing" image="/images/category-clothing.jpg" href="/shop/clothing" />
            <ProductCategory title="Fragrance" image="/images/category-fragrance.jpg" href="/shop/fragrance" />
            <ProductCategory title="Accessories" image="/images/category-accessories.jpg" href="/shop/accessories" />
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-playfair text-[#1a2942] mb-12">Featured Products</h2>
          <FeaturedProducts />
        </div>
      </section>

      {/* Newsletter Signup */}
      <NewsletterSignup />
    </div>
  )
}
