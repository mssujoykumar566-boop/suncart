import Category from '@/components/Category';
import ProductsCard from '@/components/ProductsCard';


const AllProductsPage = async ({searchParams}) => {
    const {category} = await searchParams;
    console.log(category,'category')
    const res = await fetch('https://suncart-smoky.vercel.app/data.json');
    const products = await res.json()
    // console.log(products,'products')
    

    
  const filteredProducts = category
    ? products.filter((product) => product.category.toLowerCase() === category.toLowerCase())
    : products;
//   console.log(filteredProducts, "filteredProducts");
    return (
        <div>
            <h1 className='text-2xl font-bold m-4'>All Products</h1>

              <Category />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    filteredProducts.map(product => <ProductsCard key={product.id} product={product}/>)
                }
            </div>
        </div>
    );
};

export default AllProductsPage;