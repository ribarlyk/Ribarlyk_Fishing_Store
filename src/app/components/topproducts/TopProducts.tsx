import ItemCard from "@/app/components/card/Card";
import { Product } from "@/types/Products";

function TopProducts({ products }: { products: Product[] }) {
  const productsList = structuredClone(products)
    .splice(0, 4)
    .map((product) => (
      <li key={product._id} className="pb-4">
        {product.images && product.images.length > 0 && (
          <ItemCard product={product} key={product._id} />
        )}
      </li>
    ));
  return (
    <>
      <div className="w-auto md:mx-72 border-b-2 border-blue-800 p-4">
        <h2 className="text-4xl">Най-продавани</h2>
      </div>
      <div className="w-auto flex justify-center">
        <div className="w-auto pt-4 pb-4 m-auto">
          <ul className="flex flex-col md:grid md:grid-cols-2 md:grid-rows-2 lg:flex lg:flex-row justify-center items-center gap-4">
            {productsList}
          </ul>
        </div>
      </div>
    </>
  );
}

export default TopProducts;
