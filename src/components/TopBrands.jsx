import { Card } from "@heroui/react";
import Image from "next/image";

const TopBrands = async () => {
  const res = await fetch("https://suncart-smoky.vercel.app/data.json");
  const data = await res.json();
  const products = data.slice(0, 4);

  return (
    <div className="my-16 px-4 md:px-10">
      
      <h2 className="text-3xl font-bold text-center mb-2">
       Top Brands
      </h2>

      <p className="text-center text-gray-500 mb-8">
        Trusted summer collections
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

        {products.map((brand) => (
          <Card
            key={brand.id}
            className="group p-5 rounded-2xl shadow-md hover:shadow-xl transition text-center"
          >
            {/* Image */}
            <div className="relative w-24 h-24 mx-auto mb-3 overflow-hidden rounded-xl">
              <Image
                src={brand.image}
                alt={brand.name}
                fill
                className="object-cover transition duration-300 group-hover:scale-110"
              />
            </div>

            {/* Name */}
            <h2 className="font-semibold text-gray-700 group-hover:text-orange-500 transition">
              {brand.brand}
            </h2>

          </Card>
        ))}

      </div>
    </div>
  );
};

export default TopBrands;