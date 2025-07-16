"use client";

import { useCartStore } from "@/app/utils/cart-store";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./Button";
import {
  ShoppingCartIcon,
  Bars3Icon,
  XMarkIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

export const Navbar = () => {
  // to save items of shoppingCart
  const { items } = useCartStore();

  // total items that has been added to cart
  const cartCount = items.reduce((acc, item) => acc + item.quantity, 0);

  // to handle mobile navbar
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  useEffect(() => {
    const handleRezise = () => {
      if (window.innerWidth >= 768) {
        setMobileOpen(false);
      }
    };
    window.addEventListener("resize", handleRezise);
    return () => window.removeEventListener("resize", handleRezise);
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/LK_logo.png" // Make sure your logo.png is in the public folder
            alt="My Ecommerce Logo"
            width={40}
            height={16}
            priority //loads image faster for important assets
          />
        </Link>

        {/* navbar items */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-blue-600">
            Home
          </Link>
          <Link href="/products" className="hover:text-blue-600">
            Products
          </Link>
          <Link href="/checkout" className="hover:text-blue-600">
            Checkout
          </Link>
          <Link href="/admin" className="hover:text-blue-600">
            Admin
          </Link>
        </div>

        {/* shooping cart icon */}
        <div className="flex items-center space-x-4">
          {/* shoppingCart Icon */}
          <Link href="/checkout" className="relative">
            <ShoppingCartIcon className="h-6 w-6" />
            {cartCount > 0 && (
              <span className="absolute -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                {cartCount}
              </span>
            )}
          </Link>

          {/*  User icon link */}
          <Link href="/admin" className="hover:text-blue-600">
            <UserIcon className="h-6 w-6" />
          </Link>

          {/* //onmclick set open to opposite it is */}
          <Button
            // variant="ghost"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="md:hidden hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50"
          >
            {mobileOpen ? (
              <XMarkIcon className="text-black h-6 w-6" />
            ) : (
              <Bars3Icon className="text-black h-6 w-6" />
            )}
          </Button>
        </div>
      </div>
      {mobileOpen && (
        <nav className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col p-4 space-y-2">
            <li>
              <Link href="/" className="block hover:text-blue-600">
                Home
              </Link>
            </li>
            <li>
              <Link href="/products" className="block hover:text-blue-600">
                Products
              </Link>
            </li>
            <li>
              <Link href="/checkout" className="block hover:text-blue-600">
                Checkout
              </Link>
            </li>
            <li>
              <Link href="/admin" className="block hover:text-blue-600">
                Admin
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </nav>
  );
};
