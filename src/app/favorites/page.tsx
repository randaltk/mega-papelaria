import LikesModal from "@/components/header/LikesModal";


const FavoritesPage = () => {
  return (
    <div className="container mx-auto mt-8">
        <h2 className="text-4xl font-bold mb-4 text-center">Lista de Desejos</h2>
      <hr className="border-t-2 border-pink-500 mx-auto w-1/6 mb-12" />
      <div className="bg-white p-8 rounded shadow-md">
        <LikesModal />
      </div>
    </div>
  );
};

export default FavoritesPage;
