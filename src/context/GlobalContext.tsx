"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

interface GlobalContextProps {
  likedProducts: number[];
  toggleLike: (productId: number) => void;
}

const GlobalContext = createContext<GlobalContextProps | undefined>(undefined);

interface GlobalProviderProps {
  children: ReactNode;
}

export const GlobalProvider: React.FC<GlobalProviderProps> = ({ children }) => {
  const [likedProducts, setLikedProducts] = useState<number[]>([]);

  const toggleLike = (productId: number) => {
    setLikedProducts((prevLikedProducts) => {
      const isLiked = prevLikedProducts.includes(productId);
      const updatedLikedProducts = isLiked
        ? prevLikedProducts.filter((id) => id !== productId)
        : [...prevLikedProducts, productId];
      console.log("att context", updatedLikedProducts);
      localStorage.setItem(
        "likedProducts",
        JSON.stringify(updatedLikedProducts)
      );

      return updatedLikedProducts;
    });
  };

  useEffect(() => {
    // Fetch likedProducts from local storage on component mount
    const storedLikedProducts = localStorage.getItem("likedProducts");
    if (storedLikedProducts) {
      setLikedProducts(JSON.parse(storedLikedProducts));
    }
  }, []);

  useEffect(() => {
    // This will run whenever likedProducts is updated
    console.log("LikedProducts updated:", likedProducts);

    // You can add more logic here if needed

  }, [likedProducts]); // Run when likedProducts changes

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
