'use client'

import LikesModal from "@/components/header/LikesModal";
import { useGlobalContext } from "@/context/GlobalContext";

const FavoritesPage = () => {
  const { likedProducts } = useGlobalContext();

  return (
    <div className="container mx-auto my-8">
      <h1 className="text-3xl font-bold mb-4">Seus Favoritos</h1>

      {likedProducts.length === 0 ? (
        <p className="text-gray-600">Você ainda não adicionou favoritos.</p>
      ) : (
        <LikesModal />
      )}
    </div>
  );
};

export default FavoritesPage;
