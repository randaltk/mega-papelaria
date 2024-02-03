const Banner = () => {
  return (
    <div className="relative overflow-hidden h-64 md:h-96">
      <img
        src="/papelaria.jpg"
        alt="Papelaria"
        style={{ objectFit: "cover", objectPosition: "center" }}
      />
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="absolute inset-0 flex items-center justify-center text-white text-center">
        <div>
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            Ofertas Imperdíveis
          </h2>
          <p className="text-sm md:text-lg">
            Economize na sua papelaria favorita!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
