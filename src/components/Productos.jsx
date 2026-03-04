const Producto = ({ producto, agregarAlCarrito }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
      <img
        src={producto.imagen}
        alt={producto.nombre}
        className="w-full h-60 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-1">{producto.nombre}</h2>
        <p className="text-pink-600 font-bold mb-2">${producto.precio}</p>
        <p className="text-gray-600 text-sm mb-3">{producto.descripcion}</p>
        <button
          onClick={() => agregarAlCarrito(producto)}
          className="w-full bg-pink-100 text-pink-600 py-2 rounded-lg hover:bg-pink-200 transition"
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default Producto;
