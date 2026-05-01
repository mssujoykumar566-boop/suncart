import ProductsCard from '@/components/ProductsCard';


const AllProductsPage = async () => {
    const res = await fetch('https://suncart-smoky.vercel.app/data.json');
    const products = await res.json()
    // console.log(products,'products')
    return (
        <div>
            <h1 className='text-2xl font-bold m-4'>All Products</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    products.map(product => <ProductsCard key={product.id} product={product}/>)
                }
            </div>
        </div>
    );
};

export default AllProductsPage;