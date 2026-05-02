import { Button } from '@heroui/react';
import Link from 'next/link';
import React from 'react';

const Category = async () => {
       const res = await fetch('https://suncart-smoky.vercel.app/data.json');
    const categories = await res.json();
    return (
       <div className="mb-5 flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4">
  {
  categories.map((category) => (
   <Link  key={category.id} href={`?category=${category.name.toLowerCase()}`}>
    <Button
    size='sm'
     
      className="px-4 py-2 text-sm sm:text-base bg-orange-500 text-white rounded-full hover:bg-orange-600 transition"
    >
      {category.name}
    </Button>
   </Link>
  ))}
</div>
    );
};

export default Category;