"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

interface GlobalContextProps {
  likedProducts: Product[];
  toggleLike: (product: Product) => void;
}

const GlobalContext = createContext<GlobalContextProps | undefined>(undefined);

interface GlobalProviderProps {
  children: ReactNode;
}

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

export const GlobalProvider: React.FC<GlobalProviderProps> = ({ children }) => {
  const [likedProducts, setLikedProducts] = useState<Product[]>([]);

  const toggleLike = (product: Product) => {
    setLikedProducts((prevLikedProducts) => {
      const isLiked = prevLikedProducts.some((p) => p.id === product.id);
      const updatedLikedProducts = isLiked
        ? prevLikedProducts.filter((p) => p.id !== product.id)
        : [...prevLikedProducts, product];

      localStorage.setItem(
        "likedProducts",
        JSON.stringify(updatedLikedProducts)
      );

      return updatedLikedProducts;
    });
  };

  useEffect(() => {
    const storedLikedProducts = localStorage.getItem("likedProducts");
    if (storedLikedProducts) {
      setLikedProducts(JSON.parse(storedLikedProducts));
    }
  }, []);

  useEffect(() => {
    console.log("LikedProducts updated:", likedProducts);
  }, [likedProducts]);

  return (
    <GlobalContext.Provider value={{ likedProducts, toggleLike }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("useGlobalContext must be used within a GlobalProvider");
  }
  return context;
};