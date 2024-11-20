import Image from "next/image";
import React from "react";
import ItemCard from "@/app/components/card/Card";
interface ProductProps {
  products: {
    _id: string;
    title: string;
    quantity: number;
    images: string[];
  }[];
}

const ProductsPage = ({ products }: ProductProps) => {
  const productsList = () =>
    products.map((product) => (
      <li key={product._id}>
        {product.images && product.images.length > 0 && (
          <ItemCard image={product.images[0]} key={product._id} />
        )}
      </li>
    ));

  return (
    <div className="w-full">
      <ul className="flex flex-row gap-4 flex-wrap p-4 justify-center">
        {productsList()}
      </ul>
    </div>
  );
};

export default ProductsPage;
