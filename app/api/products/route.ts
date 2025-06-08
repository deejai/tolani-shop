import { NextResponse } from "next/server"
import { products } from "@/lib/data"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const category = searchParams.get("category")
  const featured = searchParams.get("featured")
  const search = searchParams.get("search")

  let filteredProducts = products

  if (category) {
    filteredProducts = filteredProducts.filter((product) => product.category === category)
  }

  if (featured === "true") {
    filteredProducts = filteredProducts.filter((product) => product.featured)
  }

  if (search) {
    filteredProducts = filteredProducts.filter(
      (product) =>
        product.name.toLowerCase().includes(search.toLowerCase()) ||
        product.description.toLowerCase().includes(search.toLowerCase()),
    )
  }

  return NextResponse.json(filteredProducts)
}
