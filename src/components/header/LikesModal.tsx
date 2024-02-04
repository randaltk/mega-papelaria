import React, { useEffect } from "react";
import { useGlobalContext } from "@/context/GlobalContext";

const LikesModal = () => {
  const { likedProducts } = useGlobalContext();

  useEffect(() => {
    console.log("Modal content updated with liked products:", likedProducts);
  }, [likedProducts]);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Liked Product IDs</h2>
      <ul>
        {likedProducts.map((productId) => (
          <>
            <li key={productId}>{productId}</li>
          </>
        ))}
      </ul>
    </div>
  );
};

export default LikesModal;
