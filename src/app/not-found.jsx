import { Button } from "@heroui/react";
import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <div className="text-center space-y-4">
        
        {/* <h1 className="text-4xl md:text-6xl font-bold text-orange-500">404</h1> */}

        <div>
          <img
            src="https://static.vecteezy.com/system/resources/previews/004/639/366/non_2x/error-404-not-found-text-design-vector.jpg"
            alt="not found"
            className="mx-auto w-64 opacity-80"
          />
        </div>
      
        <h2 className="text-2xl md:text-3xl font-semibold">
          Oops! Page Not Found
        </h2>

        <p className="text-gray-500 max-w-md mx-auto">
          The page you are looking for doesn’t exist or has been moved.
        </p>

       
        <Link href="/">
          <Button className="btn btn-primary mt-4">Go Back Home</Button>
        </Link>

       
      </div>
    </div>
  );
};

export default NotFound;
