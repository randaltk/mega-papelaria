"use client";

import {
  MdSearch,
  MdFavorite,
  MdAccountCircle,
  MdShoppingCart,
} from "react-icons/md";
import { useState } from "react";
import { FaBars } from "react-icons/fa";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="bg-white p-4 shadow-md">
      <div className="max-w-screen-lg mx-auto">
        <div className="container mx-auto flex items-center justify-between">
          <div className="text-xl font-bold ">
            <span>Mega Papelaria</span>
          </div>

          <div className="lg:hidden">
            <button onClick={toggleMobileMenu}>
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

          <div className="lg:flex items-center space-x-9 ml-4">
            <MdFavorite className="text-red-500 text-2xl cursor-pointer" />
            <MdAccountCircle className="text-gray-700 text-2xl cursor-pointer" />
            <MdShoppingCart className="text-gray-700 text-2xl cursor-pointer" />
          </div>

          
        </div>

        <div className="hidden lg:flex justify-center border-t mt-2 pt-4">
          <a href="#" className="text-gray-700 hover:text-gray-900">
            Início
          </a>
          <div className="border-l mx-2 h-4"></div>
          <a href="#" className="text-gray-700 hover:text-gray-900">
            Lançamentos
          </a>
          <div className="border-l mx-2 h-4"></div>
          <a href="#" className="text-gray-700 hover:text-gray-900">
            Coleções
          </a>
          <div className="border-l mx-2 h-4"></div>
          <a href="#" className="text-gray-700 hover:text-gray-900">
            Papelaria
          </a>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden flex flex-col items-center mt-2 pt-4">
            <a href="#" className="text-gray-700 hover:text-gray-900">
              Início
            </a>
            <div className="border-l mx-2 h-4"></div>
            <a href="#" className="text-gray-700 hover:text-gray-900">
              Lançamentos
            </a>
            <div className="border-l mx-2 h-4"></div>
            <a href="#" className="text-gray-700 hover:text-gray-900">
              Coleções
            </a>
            <div className="border-l mx-2 h-4"></div>
            <a href="#" className="text-gray-700 hover:text-gray-900">
              Papelaria
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
