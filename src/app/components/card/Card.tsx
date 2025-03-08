"use client";

import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { Product } from "@/types/Products";
import Link from "next/link";
import LazyImage from "@/app/components/lazyloader/LazyImage";

export default function ItemCard({ product }: { product: Product }) {
  const [imageSrc, setImageSrc] = useState(product.images[0]);

  const handleMouseEnter = () => {
    if (product.images.length > 1) setImageSrc(product.images[1]);
  };

  const handleMouseLeave = () => {
    setImageSrc(product.images[0]);
  };

  return (
    <Card
      className="max-w-[250px] flex flex-col hover:p-2 hover:shadow-lg hover:border hover:border-gray-300 cursor-pointer relative group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link href={`/product/${product._id}`}>
        <CardContent>
          <LazyImage
            placeholder="data:image/webp;base64,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"
            src={imageSrc}
            alt={product.title}
            width={300}
            height={200}
          />
        </CardContent>
        <CardHeader className="flex justify-center">
          <CardTitle className="pb-2 text-xl">{product.title}</CardTitle>
          <div className="flex flex-row justify-center items-center gap-2">
            <CardDescription className="text-red-600 font-semibold">
              {product.price + ",90" + "лв."}
            </CardDescription>
            <CardDescription className="font-semibold">
              <s>{(product.price * 1.2).toFixed(2) + "лв."}</s>
            </CardDescription>
          </div>
        </CardHeader>
      </Link>
      <CardFooter className="hidden lg:flex justify-center">
        <Button
          className="flex-1 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out bg-opacity-75"
          variant="default"
          onClick={(e) => {
            e.stopPropagation();
            console.log("Add to cart");
          }}
        >
          Добави в кошницата
        </Button>
      </CardFooter>
    </Card>
  );
}
