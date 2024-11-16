import Image from "next/image";
import React from "react";

// Define the type for the props passed to the page
interface ProductProps {
  products: {
    _id: string;
    title: string;
    quantity: number;
    images: string[];
  }[];
}

const ProductsPage = ({ products }: ProductProps) => {
  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product._id}>
            {product.title} {product.quantity}
            {product.images &&
              product.images.length > 0 &&
              product.images.map((image, index) => (
                <Image
                  src={image}
                  key={product._id + index}
                  alt="image"
                  width={200}
                  height={200}
                />
              ))}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsPage;
