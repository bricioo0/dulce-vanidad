import { useState } from "react";
import Header from "../components/Header";
import BarraBusqueda from "../components/BarraBusqueda";
import Producto from "../components/Producto";
import Carrito from "../components/Carrito";

const productos = [
  {
    id: 1,
    nombre: "Conjunto Encaje Negro",
    precio: 25000,
    imagen: "https://via.placeholder.com/200?text=Encaje+Negro",
    categoria: "conjuntos",
    talla: "M",
    descripcion: "Conjunto de encaje negro con detalles en seda. Ideal para ocasiones especiales."
  },
  {
    id: 2,
    nombre: "Bralette Rosa Pastel",
    precio: 12000,
    imagen: "https://via.placeholder.com/200?text=Bralette+Rosa",
    categoria: "bralettes",
    talla: "S",
    descripcion: "Bralette cómodo en tono rosa pastel, con tiras ajustables."
  },
  {
    id: 3,
    nombre: "Pijama de Seda Dorado",
    precio: 35000,
    imagen: "https://via.placeholder.com/200?text=Pijama+Seda",
    categoria: "pijamas",
    talla: "L",
    descripcion: "Pijama elegante de seda con detalles en dorado."
  },
  {
    id: 4,
    nombre: "Tanga de Algodón",
    precio: 8000,
    imagen: "https://via.placeholder.com/200?text=Tanga+Algodón",
    categoria: "tangas",
    talla: "M",
    descripcion: "Tanga de algodón suave y transpirable."
  },
  {
    id: 5,
    nombre: "Body de Encaje Rojo",
    precio: 28000,
    imagen: "https://via.placeholder.com/200?text=Body+Encaje",
    categoria: "bodies",
    talla: "L",
    descripcion: "Body de encaje rojo con diseño moderno y ajustable."
  },
  {
    id: 6,
    nombre: "Conjunto Deportivo Rosa",
    precio: 18000,
    imagen: "https://via.placeholder.com/200?text=Conjunto+Deportivo",
    categoria: "deportivos",
    talla: "M",
    descripcion: "Conjunto deportivo en tono rosa, ideal para uso diario."
  }
];

const PaginaProductos = () => {
  const [carrito, setCarrito] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [filtroCategoria, setFiltroCategoria] = useState("todos");
  const [filtroTalla, setFiltroTalla] = useState("todos");
  const [mostrarCarrito, setMostrarCarrito] = useState(false);
  const [comprobante, setComprobante] = useState(null);
  const [mensajeCompra, setMensajeCompra] = useState("");
  const [compraFinalizada, setCompraFinalizada] = useState(false);

  const agregarAlCarrito = (producto) => {
    setCarrito([...carrito, producto]);
  };

  const eliminarDelCarrito = (id) => {
    setCarrito(carrito.filter((producto) => producto.id !== id));
  };

  const calcularTotal = () => {
    return carrito.reduce((total, producto) => total + producto.precio, 0);
  };

  const productosFiltrados = productos.filter((producto) => {
    const coincideBusqueda = producto.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
                            producto.descripcion.toLowerCase().includes(busqueda.toLowerCase());
    const coincideCategoria = filtroCategoria === "todos" || producto.categoria === filtroCategoria;
    const coincideTalla = filtroTalla === "todos" || producto.talla === filtroTalla;
    return coincideBusqueda && coincideCategoria && coincideTalla;
  });

  return (
    <div className="min-h-screen bg-pink-50 text-gray-800">
      <Header setMostrarCarrito={setMostrarCarrito} carrito={carrito} />
      <BarraBusqueda
        busqueda={busqueda}
        setBusqueda={setBusqueda}
        filtroCategoria={filtroCategoria}
        setFiltroCategoria={setFiltroCategoria}
        filtroTalla={filtroTalla}
        setFiltroTalla={setFiltroTalla}
      />
      <main className="p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {productosFiltrados.map((producto) => (
            <Producto
              key={producto.id}
              producto={producto}
              agregarAlCarrito={agregarAlCarrito}
            />
          ))}
        </div>
      </main>
      {mostrarCarrito && (
        <Carrito
          carrito={carrito}
          setMostrarCarrito={setMostrarCarrito}
          eliminarDelCarrito={eliminarDelCarrito}
          calcularTotal={calcularTotal}
          comprobante={comprobante}
          setComprobante={setComprobante}
          mensajeCompra={mensajeCompra}
          setMensajeCompra={setMensajeCompra}
          compraFinalizada={compraFinalizada}
          setCompraFinalizada={setCompraFinalizada}
        />
      )}
      <footer className="bg-white p-6 text-center text-gray-500 mt-10">
        <p>© 2026 Dulce Vanidad. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default PaginaProductos;
