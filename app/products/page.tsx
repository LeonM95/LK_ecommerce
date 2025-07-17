import React from "react";
import { ProductCard } from "@/components/ProductCard";
import type { Product } from "@/components/ProductCard";

// to get products
// async function getProducts(): Promise<Product[]> {
//   const response = await fetch("APIURL", {
//     next: { revalidate: 60 },
//   });
//   if (!response.ok) throw new Error("Failed to fetch products");

//   return response.json();
// }

async function getProducts(): Promise<Product[]> {
  // Dummy products array matching your Product interface
  return [
    {
      name: "Test Product 1",
      images: ["/LK_logo.png"],
      price: 19.99,
    },
    {
      name: "Test Product 2",
      images: ["/LK_logo.png"],
      price: 29.99,
    },
    {
      name: "Test Product 3",
      images: ["/LK_logo.png"],
      price: 39.99,
    },
  ];
}

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <div className="container mx-auto my-8">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product, idx) => (
          <ProductCard key={idx} product={product} />
        ))}
      </div>
    </div>
  );
}
