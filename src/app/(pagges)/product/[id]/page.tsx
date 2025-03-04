import Product from "@/models/Products";
import ProductDetailsImageSection from "@/app/components/productDetails/ProductDetailsImageSection";
import ProductDetailsAddToCartSection from "@/app/components/productDetails/ProductDetailsAddToCartSection";
import { notFound } from "next/navigation";

import type { Product as ProductType } from "@/types/Products";
import TopProducts from "@/app/components/topproducts/TopProducts";
import dbConnect from "@/app/utils/db_connect";

interface ProductPageProps {
  params: {
    id: string;
  };
}

async function ProductDetails({ params }: ProductPageProps) {
  await dbConnect();

  let products = null;
  try {
    products = await Product.find({}).lean();
    products = JSON.parse(JSON.stringify(products));
  } catch (error) {
    console.error("Error fetching products:", error);
  }
  const { id } = await params;

  let product = null;
  let serializedProduct: ProductType | null = null;

  try {
    product = await Product.findById(id).lean();
    if (!product) {
      return notFound();
    }

    serializedProduct = {
      ...product,
      _id: product!._id.toString(),
      category: product!.category.toString(),
    };
  } catch (error) {
    console.error("Error fetching product:", error);
    return notFound();
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:my-30 md:mx-40 m-8">
        <ProductDetailsImageSection product={serializedProduct} />
        <ProductDetailsAddToCartSection product={serializedProduct} />
      </div>
      <TopProducts products={products} />
    </>
  );
}

export default ProductDetails;
