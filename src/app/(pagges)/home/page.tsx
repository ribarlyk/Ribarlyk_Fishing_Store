import dbConnect from "@/app/utils/db_connect";
import Product from "@/models/Products";
import InfoBar from "@/app/components/info/InfoBar";
import Carousel from "@/app/components/carousel/Carousel";
import Sections from "@/app/components/sections/Sections";
import TopProducts from "@/app/components/topproducts/TopProducts";
import Lift from "@/app/components/lift/Lift";

export default async function Home() {
  await dbConnect();

  let products = null;
  try {
    products = await Product.find({}).lean();
    products = JSON.parse(JSON.stringify(products));
  } catch (error) {
    console.error("Error fetching products:", error);
  }

  return (
    <div className="bg-white">
      <Carousel />
      <InfoBar />
      <Sections />
      <TopProducts products={products} />
      <Lift />
    </div>
  );
}
