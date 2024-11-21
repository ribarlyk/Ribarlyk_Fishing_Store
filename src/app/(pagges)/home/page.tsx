import dbConnect from "@/app/utils/db_connect";
import Product from "@/models/Products";
import ProductsPage from "@/app/components/products/Products";

export default async function Home() {
  await dbConnect();

  let products = [];
  try {
    products = await Product.find({}).lean();
    products = JSON.parse(JSON.stringify(products));
  } catch (error) {
    console.error("Error fetching products:", error);
  }

  return (
    <div className="bg-white">
      <ProductsPage products={products} />
    </div>
  );
}
