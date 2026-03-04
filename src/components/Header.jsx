import { ShoppingCart } from "lucide-react";

const Header = ({ setMostrarCarrito, carrito }) => {
  return (
    <header className="bg-white p-4 shadow-sm flex justify-between items-center">
      <div className="flex items-center">
        <img
          src="/logo.svg"
          alt="Logo Dulce Vanidad"
          className="h-16"
        />
      </div>
      <button
        onClick={() => setMostrarCarrito(true)}
        className="relative p-2 text-pink-600 hover:text-pink-800"
      >
        <ShoppingCart size={28} />
        {carrito.length > 0 && (
          <span className="absolute -top-2 -right-2 bg-pink-600 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center">
            {carrito.length}
          </span>
        )}
      </button>
    </header>
  );
};

export default Header;
