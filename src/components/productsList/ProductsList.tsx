const products = [
  { id: 1, name: "Caneta", price: 2.5, image: "/pen.jpg" },
  { id: 2, name: "Bloco de Notas", price: 5.0, image: "/bloco.jpg" },
  { id: 3, name: "Lápis", price: 1.0, image: "/pencil.jpg" },
  { id: 4, name: "Caneta", price: 2.5, image: "/pen.jpg" },
  { id: 5, name: "Bloco de Notas", price: 5.0, image: "/bloco.jpg" },
  { id: 6, name: "Lápis", price: 1.0, image: "/pencil.jpg" },
  { id: 7, name: "Lápis", price: 1.0, image: "/pencil.jpg" },
  { id: 8, name: "Lápis", price: 1.0, image: "/pencil.jpg" },
];

const ProductList: React.FC = () => {
  return (
    <div className="container mx-auto mt-10">
      <h2 className="text-4xl font-bold mb-4 text-center">Nossos Produtos</h2>
      <hr className="border-t-2 border-pink-500 mx-auto w-1/6 mb-12" />
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {products.map((product) => (
          <li
            key={product.id}
            className="mb-8 bg-white rounded-lg overflow-hidden shadow-md"
          >
            <div className="relative h-64">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <p className="text-xl font-semibold mb-2">{product.name}</p>
              <p className="text-pink-500 text-lg font-bold">
                R$ {product.price.toFixed(2)}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
