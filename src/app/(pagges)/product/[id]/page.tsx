import Product from "@/models/Products";
import Image from "next/image";
import { notFound } from "next/navigation";

interface ProductPageProps {
  params: {
    id: string;
  };
}

async function ProductDetails({ params }: ProductPageProps) {
  const { id } = await params;

  let product = null;
  try {
    product = await Product.findById(id).lean();
    if (!product) {
      return notFound();
    }
  } catch (error) {
    console.error("Error fetching product:", error);
    return notFound();
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">{product.title}</h1>
      <Image
        src={product.images[0]}
        alt={product.title}
        width={600}
        height={400}
        className="object-cover mb-4"
      />
      <p className="text-lg">{product.description}</p>
      <p className="text-lg font-bold mt-4">Price: ${product.price}</p>
    </div>
  );
}

export default ProductDetails;
