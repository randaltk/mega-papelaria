import { GlobalProvider } from "@/context/GlobalContext";
import ProductsList from "@/components/productsList/ProductsList";


const Products = () => {
  return (
    <GlobalProvider>
      <ProductsList />
    </GlobalProvider>
  );
};

export default Products;
