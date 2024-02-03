import Banner from "@/components/banner/Banner";
import InfoBar from "@/components/infobar/Infobar";
import ProductList from "@/components/productsList/ProductsList";

export default function Home() {
  return (
    <>
      <Banner />
      <InfoBar/>
      <ProductList/>
    </>
  );
}
