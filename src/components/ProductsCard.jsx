import { Button, Card, Chip } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";

const ProductsCard = ({ product }) => {
  // console.log(product)
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden group">
      <div className="relative w-full aspect-square">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className=" object-cover group-hover:scale-110 transition duration-300 rounded-xl"
        />
        <Chip className="absolute right-2 top-2">{product.category}</Chip>
      </div>

      <div className="p-4 space-y-2">
        <h2 className="text-lg font-semibold text-gray-800">{product.name}</h2>

        <div className="flex gap-1 items-center">
          <FaStar className="text-yellow-500" />
          <p className="text-yellow-500">{product.rating}</p>
        </div>

        <p className="text-xl font-bold text-purple-600">${product.price}</p>

        {/* Button */}
      <Link  href={`/all-products/${product.id}`}>
              <Button
         
          className="block w-full text-center mt-3 bg-purple-500 text-white py-2 rounded-lg hover:bg-purple-600 transition"
        >
          View Details
        </Button>
      </Link>
      </div>
    </div>
  );
};

export default ProductsCard;
