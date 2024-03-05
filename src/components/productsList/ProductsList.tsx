"use client";

import Link from "next/link";
import { MdFavorite } from "react-icons/md";
import { useGlobalContext } from "../../context/GlobalContext";
import products from "../../app/data/products.json";

const ProductsList = () => {
  const { likedProducts, toggleLike } = useGlobalContext();

  return (
    <div className="container mx-auto mt-10">
      <h2 className="text-4xl font-bold mb-4 text-center">Nossos Produtos</h2>
      <hr className="border-t-2 border-pink-custom mx-auto w-1/6 mb-12" />
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {products.map((product) => (
          <li
            key={product.id}
            className="mb-8 bg-white rounded-lg overflow-hidden shadow-md flex flex-col"
          >
            <div className="relative h-64">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="p-6 flex-grow flex flex-col justify-between">
              <div>
                <p className="text-xl font-semibold mb-2">{product.name}</p>
                <p className="text-pink-custom text-lg font-bold">
                  R$ {product.price.toFixed(2)}
                </p>
              </div>
              <div className="flex justify-center items-center mt-4">
                <Link
                  aria-label="Go to the product details page"
                  href={`/products/update?id=${product.id}&name=${product.name}&image=${product.image}&price=${product.price}&description=${product.description}&link=${product.link}`}
                >
                  <button
                    aria-label="Visualizar"
                    className="bg-pink-custom text-white px-6 py-2 rounded-md hover:bg-pink-800"
                  >
                    Visualizar
                  </button>
                </Link>
              </div>
              <button
                onClick={() => toggleLike(product)}
                className={`text-2xl cursor-pointer ${
                  likedProducts.includes(product) ? "text-red-500" : ""
                }`}
                aria-label={
                  likedProducts.includes(product)
                    ? "Remover dos favoritos"
                    : "Adicionar aos favoritos"
                }
              >
                <MdFavorite />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsList;
