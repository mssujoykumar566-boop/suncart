"use client";

import Link from "next/link";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-center">
        
        {/* Logo + About */}
        <div className="flex flex-col items-center md:items-center">
          <h2 className="text-2xl font-bold text-white mb-3">
            SunCart ☀️
          </h2>
          <p className="text-sm">
            Your one-stop summer essentials store. Discover trendy fashion,
            skincare & beach accessories.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-col items-center md:items-center">
          <h3 className="text-white font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:text-orange-400">Home</Link>
            </li>
            <li>
              <Link href="/products" className="hover:text-orange-400">Products</Link>
            </li>
            <li>
              <Link href="/profile" className="hover:text-orange-400">My Profile</Link>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div className="flex flex-col items-center md:items-center">
          <h3 className="text-white font-semibold mb-3">Support</h3>
          <ul className="space-y-2 text-sm">
            <li><a className="hover:text-orange-400">Contact Us</a></li>
            <li><a className="hover:text-orange-400">FAQ</a></li>
            <li><a className="hover:text-orange-400">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Social */}
        <div className="flex flex-col items-center md:items-center">
          <h3 className="text-white font-semibold mb-3">Follow Us</h3>
          <div className="flex gap-4 text-xl justify-center md:justify-center">
            <a className="hover:text-orange-400"><FaFacebook /></a>
            <a className="hover:text-orange-400"><FaGithub /></a>
            <a className="hover:text-orange-400"><FaLinkedin /></a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 text-center py-4 text-sm">
        © 2026 SunCart. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;