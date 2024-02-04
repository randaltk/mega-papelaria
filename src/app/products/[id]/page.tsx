"use client";
import { useSearchParams } from "next/navigation";

const ProductDetail = () => {
  const searchParams = useSearchParams();

  const idParam = searchParams.get("id");
  const nameParam = searchParams.get("name");
  const imgParam = searchParams.get("image");
  const priceParam = searchParams.get("price");

  return (
    <div className="container mx-auto mt-8">
      <div className="max-w-md mx-auto bg-white p-8 rounded-md shadow-md">
        <h2 className="text-2xl font-semibold mb-4">{nameParam}</h2>

        <img
          src={imgParam!}
          alt={nameParam || "Image"}
          className="w-full mb-4"
        />

        {priceParam && (
          <p className="text-gray-700 mb-4">Preço: R$ {priceParam}</p>
        )}

        <button className="bg-pink-500 text-white px-6 py-2 rounded-md hover:bg-pink-600">
          Adicionar ao Carrinho
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
