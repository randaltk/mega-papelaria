import { FaCreditCard, FaGlobeAmericas, FaLock, FaTruck } from "react-icons/fa";

const InfoBar = () => {
  return (
    <div className="bg-gray-200 p-4 text-center shadow-md">
      <div className="flex flex-wrap justify-around">
        <div className="flex items-center mb-4 sm:mb-0">
          <FaCreditCard className="text-2xl sm:text-3xl text-pink-500" />
          <div className="ml-1 sm:ml-2">
            <p className="text-xs sm:text-sm font-semibold">Parcele em até</p>
            <p className="text-sm sm:text-base font-bold">3x sem juros</p>
          </div>
        </div>

        <div className="flex items-center mb-4 sm:mb-0">
          <FaGlobeAmericas className="text-2xl sm:text-3xl text-pink-500" />
          <div className="ml-1 sm:ml-2">
            <p className="text-xs sm:text-sm font-semibold">Entrega para todo</p>
            <p className="text-sm sm:text-base font-bold">Território Nacional</p>
          </div>
        </div>

        <div className="flex items-center mb-4 sm:mb-0">
          <FaTruck className="text-2xl sm:text-3xl text-pink-500" />
          <div className="ml-1 sm:ml-2">
            <p className="text-xs sm:text-sm font-semibold">Frete Grátis a partir</p>
            <p className="text-sm sm:text-base font-bold">de R$ 300,00</p>
          </div>
        </div>

        <div className="flex items-center">
          <FaLock className="text-2xl sm:text-3xl text-pink-500" />
          <div className="ml-1 sm:ml-2">
            <p className="text-xs sm:text-sm font-semibold">Pagamento 100%</p>
            <p className="text-sm sm:text-base font-bold">Seguro</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoBar;
