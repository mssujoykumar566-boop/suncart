
import ProductsCard from "./ProductsCard";

const PopularProducts = async () => {
    const res = await fetch('https://suncart-smoky.vercel.app/data.json');
    const data = await res.json();
    // console.log(data,'data')
    const products = data.slice(0,3)
    // console.log(products)
    return (
        <div>
            <h1 className="text-2xl font-bold mt-5">Popular Products</h1>

            <div>
                {
                    products.map(product => <ProductsCard key={product.id}  product={product}/>
                      
                    )
                }
            </div>
        </div>
    );
};

export default PopularProducts;