import type { Product } from "@/types/Products";
import { Button } from "@/components/ui/button";

const ProductDetailsAddToCartSection = ({ product }: { product: Product }) => {
  return (
    <div className="flex flex-col gap-4 p-4 ">
      <h2 className=" text-5xl">{product.title}</h2>
      <p className="font-bold mt-4 text-4xl text-blue-800">
        {product.price.toFixed(2)} лв.
      </p>
      <div className="flex flex-col gap-4">
        <label className="flex ">
          <h4 className="text-2xl">Количество:</h4>
          <input type="number" className="ml-4 p-2 rounded-lg" min={1}></input>
        </label>

        <Button size="lg" className="text-white">
          Добави в кошницата
        </Button>
      </div>
      <div>
        <h4 className="text-xl">Описание:</h4>
        <p className="text-xl">{product.description}</p>
      </div>
    </div>
  );
};

export default ProductDetailsAddToCartSection;
