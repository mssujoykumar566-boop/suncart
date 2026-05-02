import Category from "./Category";
import ProductsCard from "./ProductsCard";

const PopularProducts = async ({ searchParams }) => {
  const category = searchParams?.category;
  const res = await fetch("https://suncart-smoky.vercel.app/data.json");
  const data = await res.json();
  // console.log(data,'data')
  const products = data.slice(0, 3);

  const filteredProducts = category
    ? data.filter((product) => product.category === category)
    : products;
  // console.log(products)
  return (
    <div>
      <h1 className="text-2xl font-bold text-center my-5">Popular Products</h1>

      <Category />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredProducts.map((product) => (
          <ProductsCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default PopularProducts;
