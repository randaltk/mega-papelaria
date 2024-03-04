"use client";

import React, { useEffect } from "react";
import { useGlobalContext } from "@/context/GlobalContext";

const LikesModal = () => {
  const { likedProducts } = useGlobalContext();

  useEffect(() => {
    // console.log("Modal content updated with liked products:", likedProducts);
  }, [likedProducts]);

  return (
    <div className="mt-4">
      <h2 className="text-2xl font-bold mb-4">Favoritos</h2>
      <ul>
        {likedProducts.map((product) => (
          <li
            key={product.id}
            className="border rounded-md p-4 mb-4 flex items-center justify-between"
          >
            <div className="flex items-center">
              <img
                src={product.image}
                alt={product.name}
                className="w-16 h-16 object-cover rounded-md mr-4"
              />
              <div>
                <p className="text-lg font-bold">{product?.name}</p>
                <p className="text-gray-600">${product?.price.toFixed(2)}</p>
              </div>
            </div>
          
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LikesModal;
