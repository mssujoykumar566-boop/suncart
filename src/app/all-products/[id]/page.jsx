
import Loader from "@/components/Loader";
import { Button, Chip } from "@heroui/react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { FaStar } from "react-icons/fa";

const ProductsDetailsPage = async ({ params }) => {
  const { id } = await params;
  // console.log(id,'id')
  const res = await fetch("https://suncart-smoky.vercel.app/data.json");
 
  const products = await res.json();
 
  // console.log(products,'products')
  const product = products.find((p) => p.id == id);
  // console.log(product,'product')
  if (!product) {
    notFound();
  }

  

  // const data = await res.json();

 

  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center p-5">
      <div className="max-w-5xl w-full bg-white shadow-xl rounded-2xl overflow-hidden grid md:grid-cols-2">
        
        <div className="relative w-full aspect-square">
               <Image
                 src={product.image}
                 alt={product.name}
                 fill
                 className=" object-cover group-hover:scale-110 transition duration-300 rounded-xl"
               />
               <Chip className="absolute right-2 top-2">{product.category}</Chip>
             </div>

       
        <div className="p-6 space-y-4">
        
          <h1 className="text-3xl font-bold">{product.name}</h1>

       
          <p className="text-gray-500">Brand: {product.brand}</p>

          
          <div className="flex gap-1 items-center">
            <FaStar className="text-yellow-500" />
            <p className="text-yellow-500">{product.rating}</p>
          </div>

      
          <h2 className="text-2xl text-orange-500 font-semibold">
            ${product.price}
          </h2>

        
          <p className="text-sm">
            Stock:{" "}
            <span className="font-semibold text-green-600">
              {product.stock} available
            </span>
          </p>

          
          <p className="text-gray-600">{product.description}</p>

          {/* Buttons */}
          <div className="flex gap-3 pt-3">
            <Button className="btn btn-primary">Buy Now</Button>
            <Button className="btn btn-outline">Add to Cart</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsDetailsPage;
