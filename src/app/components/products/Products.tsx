import React from "react";
import ItemCard from "@/app/components/card/Card";
import type { Product } from "@/types/Products";

const ProductsPage = ({ products }: { products: Product[] }) => {
  const productsList = products.map((product) => (
    <li key={product._id}>
      {product.images && product.images.length > 0 && (
        <ItemCard product={product} key={product._id} />
      )}
    </li>
  ));

  return (
    <div className="w-auto md:mx-72">
      <ul className="flex flex-row gap-4 flex-wrap p-4 justify-center">
        {productsList}
      </ul>
    </div>
  );
};

export default ProductsPage;
