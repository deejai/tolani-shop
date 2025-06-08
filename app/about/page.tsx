import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-[#f5efe7] py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-playfair text-[#1a2942] mb-6">About L'Appar Kompan</h1>
          <p className="text-xl text-[#1a2942]/80 leading-relaxed">
            Crafting elegant Nigerian fashion that celebrates heritage while embracing modernity
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-playfair text-[#1a2942] mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Founded in Lagos, Nigeria, L'Appar Kompan began as a vision to create timeless fashion that honors our
                  rich cultural heritage while meeting the needs of the modern Nigerian woman and man.
                </p>
                <p>
                  Our founder, Tolan Helen, recognized a gap in the market for high-quality, locally-made fashion that
                  could compete on the global stage. With a background in fashion design and a passion for Nigerian
                  craftsmanship, she set out to create a brand that would make every Nigerian proud to wear.
                </p>
                <p>
                  Today, we work with local artisans and use premium materials to create pieces that are not just
                  beautiful, but also sustainable and ethically made. Every garment tells a story of Nigerian
                  excellence.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] relative overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg?height=600&width=480"
                  alt="Tolan Helen, Founder"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-[#d5a293] text-white p-6 rounded-lg">
                <p className="font-playfair text-lg">Est. 2020</p>
                <p className="text-sm">Lagos, Nigeria</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-[#1a2942] text-white py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-playfair text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#d5a293] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌍</span>
              </div>
              <h3 className="text-xl font-medium mb-3">Sustainability</h3>
              <p className="text-gray-300">
                We're committed to sustainable fashion practices, working with local suppliers and using eco-friendly
                materials wherever possible.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#d5a293] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✨</span>
              </div>
              <h3 className="text-xl font-medium mb-3">Quality</h3>
              <p className="text-gray-300">
                Every piece is crafted with attention to detail, using premium materials and traditional techniques
                passed down through generations.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#d5a293] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-medium mb-3">Community</h3>
              <p className="text-gray-300">
                We support local artisans and communities, creating jobs and preserving traditional Nigerian
                craftsmanship.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 bg-[#f5efe7]">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-playfair text-[#1a2942] text-center mb-12">Meet Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="aspect-square relative overflow-hidden rounded-lg mb-4">
                <Image src="/placeholder.svg?height=300&width=300" alt="Tolan Helen" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-medium text-[#1a2942]">Tolan Helen</h3>
              <p className="text-[#d5a293] mb-2">Founder & Creative Director</p>
              <p className="text-sm text-gray-600">
                Fashion design graduate with 10+ years experience in luxury fashion.
              </p>
            </div>
            <div className="text-center">
              <div className="aspect-square relative overflow-hidden rounded-lg mb-4">
                <Image src="/placeholder.svg?height=300&width=300" alt="Adebayo Okafor" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-medium text-[#1a2942]">Adebayo Okafor</h3>
              <p className="text-[#d5a293] mb-2">Head of Production</p>
              <p className="text-sm text-gray-600">
                Expert in textile manufacturing with deep knowledge of Nigerian fabrics.
              </p>
            </div>
            <div className="text-center">
              <div className="aspect-square relative overflow-hidden rounded-lg mb-4">
                <Image src="/placeholder.svg?height=300&width=300" alt="Kemi Adebisi" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-medium text-[#1a2942]">Kemi Adebisi</h3>
              <p className="text-[#d5a293] mb-2">Head of Marketing</p>
              <p className="text-sm text-gray-600">
                Digital marketing specialist passionate about promoting Nigerian fashion globally.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-playfair text-[#1a2942] mb-6">Join Our Journey</h2>
          <p className="text-xl text-gray-600 mb-8">
            Be part of the movement to put Nigerian fashion on the global map
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-[#1a2942] hover:bg-[#2a3952] text-white">
              <Link href="/shop">Shop Our Collection</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/contact">Get In Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
