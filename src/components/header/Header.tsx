"use client";

import {
  MdSearch,
  MdFavorite,
  MdAccountCircle,
  MdShoppingCart,
} from "react-icons/md";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import Link from "next/link";
import LikesModal from "./LikesModal";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="bg-white p-4 shadow-md">
      <div className="max-w-screen-lg mx-auto">
        <div className="container mx-auto flex items-center justify-between">
          <div className="text-xl font-bold">
            <Link href="/" aria-label="Go to the homepage">
              <img
                src="/logo.png"
                className="object-contain h-28 w-auto"
                alt="Logo"
                loading="lazy"
              />
            </Link>
          </div>

          <div className="lg:hidden">
            <button aria-label="toggle mobile" onClick={toggleMobileMenu}>
              <FaBars className="text-gray-500" />
            </button>
          </div>

          <div className="lg:flex items-center bg-gray-200 rounded p-1 hidden lg:flex">
            <MdSearch className="text-gray-500" />
            <input
              type="text"
              placeholder="Procurar produtos"
              className="p-1 bg-gray-200 text-gray-700 rounded focus:outline-none w-80"
            />
          </div>

          <div className="hidden lg:flex items-center space-x-9 ml-4">
            <Link href="/favorites" aria-label="Go to the favorites page">
              <MdFavorite className="text-red-500 text-2xl cursor-pointer" />
            </Link>
            <MdAccountCircle className="text-gray-700 text-2xl cursor-pointer" />
            <MdShoppingCart className="text-gray-700 text-2xl cursor-pointer" />
          </div>
        </div>

        <div className="hidden lg:flex justify-center border-t mt-2 pt-4">
          <Link href="/" aria-label="Go to the homepage">
            <span className="text-gray-700 hover:text-gray-900">Início</span>
          </Link>
          <div className="border-l mx-2 h-4"></div>
          <Link href="/products"  aria-label="Go to the products page">
            <span className="text-gray-700 hover:text-gray-900">
              Lançamentos
            </span>
          </Link>
          <div className="border-l mx-2 h-4"></div>
          <Link href="/products"  aria-label="Go to the products page">
            <span className="text-gray-700 hover:text-gray-900">Coleções</span>
          </Link>
          <div className="border-l mx-2 h-4"></div>
          <Link href="/products"  aria-label="Go to the products page">
            <span className="text-gray-700 hover:text-gray-900">Papelaria</span>
          </Link>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden flex flex-col items-center mt-2 pt-4">
            <div className="flex space-x-6 mb-5">
              <Link href="/favorites"  aria-label="Go to the favorites page">
                <MdFavorite className="text-red-500 text-2xl cursor-pointer" />
              </Link>
              <MdAccountCircle className="text-gray-700 text-2xl cursor-pointer" />
              <MdShoppingCart className="text-gray-700 text-2xl cursor-pointer" />
            </div>

            <Link href="/"  aria-label="Go to the homepage">
              <span className="text-gray-700 hover:text-gray-900">Início</span>
            </Link>
            <div className="border-l mx-2 h-4"></div>
            <Link href="/products"  aria-label="Go to the products page">
              <span className="text-gray-700 hover:text-gray-900">
                Lançamentos
              </span>
            </Link>
            <div className="border-l mx-2 h-4"></div>
            <Link href="/products"  aria-label="Go to the products page">
              <span className="text-gray-700 hover:text-gray-900">
                Coleções
              </span>
            </Link>
            <div className="border-l mx-2 h-4"></div>
            <Link href="/products"  aria-label="Go to the products page">
              <span className="text-gray-700 hover:text-gray-900">
                Papelaria
              </span>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
