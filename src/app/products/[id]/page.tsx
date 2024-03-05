"use client";
import { useSearchParams } from "next/navigation";

const ProductDetail = () => {
  const searchParams = useSearchParams();

  const idParam = searchParams.get("id");
  const nameParam = searchParams.get("name");
  const imgParam = searchParams.get("image");
  const priceParam = searchParams.get("price");
  const descParam = searchParams.get("description");

  const buyLink = searchParams.get("link") || "#";

  return (
    <div className="container mx-auto mt-8">
      <div className="max-w-md mx-auto bg-white p-8 rounded-md shadow-md">
        <h2 className="text-2xl font-semibold mb-4">{nameParam}</h2>

        <img
          src={imgParam!}
          alt={nameParam || "Image"}
          className="w-full mb-4"
          loading="lazy"
        />

        {descParam && <p className="text-gray-700 mb-4">{descParam}</p>}

        {priceParam && (
          <p className="text-gray-700 mb-4">Preço: R$ {priceParam}</p>
        )}

        <a
          target="_blank"
          rel="noopener noreferrer"
          href={buyLink}
          aria-label="Comprar"
          className="block w-full text-center bg-pink-custom text-white px-6 py-2 rounded-md hover:bg-pink-800 focus:outline-none focus:ring focus:border-blue-300"
        >
          Comprar
        </a>
      </div>
    </div>
  );
};

export default ProductDetail;
