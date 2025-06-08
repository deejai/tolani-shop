import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#1a2942] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-playfair text-xl mb-4">L&apos;Appar Kompan</h3>
            <p className="text-sm text-gray-300 mb-4">
              Elegant Nigerian fashion for the modern individual. Quality fabrics, timeless designs.
            </p>
            <div className="flex space-x-4">
              <Link href="https://facebook.com" className="hover:text-[#d5a293]">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="https://instagram.com" className="hover:text-[#d5a293]">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="https://twitter.com" className="hover:text-[#d5a293]">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-4">Shop</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="/shop/clothing" className="hover:text-[#d5a293]">
                  Clothing
                </Link>
              </li>
              <li>
                <Link href="/shop/accessories" className="hover:text-[#d5a293]">
                  Accessories
                </Link>
              </li>
              <li>
                <Link href="/shop/fragrance" className="hover:text-[#d5a293]">
                  Fragrance
                </Link>
              </li>
              <li>
                <Link href="/shop/new-arrivals" className="hover:text-[#d5a293]">
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link href="/shop/sale" className="hover:text-[#d5a293]">
                  Sale
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="/about" className="hover:text-[#d5a293]">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#d5a293]">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-[#d5a293]">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-[#d5a293]">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-[#d5a293]">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>123 Fashion Street, Lagos</li>
              <li>Nigeria</li>
              <li>+234 123 456 7890</li>
              <li>info@apparkompan.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-sm text-gray-400">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>&copy; {new Date().getFullYear()} L&apos;Appar Kompan. All rights reserved.</p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <span>Payment Methods:</span>
              <span>OPay</span>
              <span>First Bank</span>
              <span>PayPal</span>
              <span>Bitcoin</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
