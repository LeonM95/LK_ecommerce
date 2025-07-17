import Link from "next/link";
import { Card, CardHeader, CardTitle, CardContent } from "./shared/card";
import Image from "next/image";
import { Button } from "./shared/Button";

export interface Product {
  name: string;
  images: string[];
  price: number;
  // You can add other fields like id, price, etc.
}

interface Props {
  product: Product;
}

export const ProductCard = ({ product }: Props) => {
  return (
    <Link href={`/product/`} className="block h-full">
      <Card className=" group hover:shadow-2xl transition duration-300 py-0 h-full flex flex-col border-gray-300 gap-0">
        {product.images && product.images[0] && (
          <div className="relative h-60 w-full">
            <Image
              src={product.images[0]}
              alt={product.name}
              layout="fill"
              objectFit="scale-down"
              className="group-hover:opacity-90 transition-opacity duration-300 rounded-t-lg"
            />
          </div>
        )}
        <CardHeader className="p-4">
          <CardTitle className="text-xl font-bold text-gray-800">
            {product.name}
          </CardTitle>
          <CardContent className="p-4 flex-grow flex flex-col justify-between">
            {product.price && (
              <p className="text-lg font-semibold text-gray-900">
                ${product.price.toFixed(2)}
              </p>
            )}
            <Button className="mt-4 bg-black text-white">View Details</Button>
          </CardContent>
        </CardHeader>
      </Card>
    </Link>
  );
};
