import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import ProductGrid from "@/components/product-grid"

export default function ShopPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-playfair text-[#1a2942] mb-8">Shop</h1>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Filters */}
        <div className="w-full md:w-64 space-y-6">
          <div>
            <h3 className="font-medium mb-3">Search</h3>
            <div className="flex">
              <Input placeholder="Search products..." className="rounded-r-none" />
              <Button className="rounded-l-none">Search</Button>
            </div>
          </div>

          <div>
            <h3 className="font-medium mb-3">Categories</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <input type="checkbox" id="clothing" className="mr-2" />
                <label htmlFor="clothing">Clothing</label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="accessories" className="mr-2" />
                <label htmlFor="accessories">Accessories</label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="fragrance" className="mr-2" />
                <label htmlFor="fragrance">Fragrance</label>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-medium mb-3">Price Range</h3>
            <div className="flex items-center space-x-2">
              <Input type="number" placeholder="Min" className="w-20" />
              <span>to</span>
              <Input type="number" placeholder="Max" className="w-20" />
              <Button variant="outline" size="sm">
                Apply
              </Button>
            </div>
          </div>
        </div>

        {/* Products */}
        <div className="flex-1">
          <div className="flex justify-between items-center mb-6">
            <p className="text-sm text-gray-500">Showing 24 products</p>
            <Select defaultValue="newest">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Newest</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="popular">Most Popular</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <ProductGrid />

          <div className="mt-8 flex justify-center">
            <div className="flex space-x-1">
              <Button variant="outline" size="icon" disabled>
                1
              </Button>
              <Button variant="outline" size="icon">
                2
              </Button>
              <Button variant="outline" size="icon">
                3
              </Button>
              <Button variant="outline" size="icon">
                4
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
