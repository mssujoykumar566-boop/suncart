"use client";

import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import Link from "next/link";
import { useState } from "react";
import { MdSunnySnowing } from "react-icons/md";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  // const user = true; // পরে auth বসাবে
  const userData = authClient.useSession();
  // console.log(userData,'userData')
  const user = userData.data?.user;
  // console.log(users,'users')
  const handleSignout = async () => {
    await authClient.signOut();
  }

  return (
    <div className="sticky top-0 z-50 backdrop-blur bg-white/70 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-1.5">
          <Link href="/" className="text-2xl font-bold text-orange-500">
            SunCart
          </Link>
          <MdSunnySnowing className="text-yellow-400 w-9 h-9" />
        </div>

        {/* Desktop Menu */}

        <div className="hidden md:flex items-center gap-6 font-medium">
          <Link href="/" className="hover:text-orange-500">
            Home
          </Link>
          <Link href="/all-products" className="hover:text-orange-500">
            All Products
          </Link>
          <Link href="/profile" className="hover:text-orange-500">
            My Profile
          </Link>
        </div>

        <div className="flex gap-4">
          {!user && (
            <ul className="flex gap-4 items-center  text-sm">
              <li>
                <Link href={"/signup"}>SignUp</Link>
              </li>
              <li>
                <Link href={"/signin"}>SignIn</Link>
              </li>
            </ul>
          )}
          {user && (
            <div className="flex items-center gap-2">
              <Avatar size="sm">
                <Avatar.Image
                  alt="Jhon Doe"
                  src={user?.image}
                  referrerPolicy="no-referrer"
                />
                <Avatar.Fallback>{user?.name[0]}</Avatar.Fallback>
              </Avatar>
               <div className="">
          <h2 className=" sm:text-xs md:text-sm font-semibold">{user.name}</h2>
          <p className="text-xs text-gray-500">{user.email}</p>
        </div>
              <Button onClick={handleSignout} size="sm" variant="danger">SignOut</Button>
            </div>
          )}
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-2xl cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white shadow px-4 pb-4 space-y-3">
          <Link href="/" className="block">
            Home
          </Link>
          <Link href="/all-products" className="block">
            {" "}
            All Products
          </Link>
          <Link href="/profile" className="block">
            Profile
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
