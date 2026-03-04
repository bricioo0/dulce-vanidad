import { Search, Filter } from "lucide-react";

const BarraBusqueda = ({ busqueda, setBusqueda, filtroCategoria, setFiltroCategoria, filtroTalla, setFiltroTalla }) => {
  const categorias = ["todos", "conjuntos", "bralettes", "pijamas", "tangas", "bodies", "deportivos"];
  const tallas = ["todos", "S", "M", "L"];

  return (
    <div className="bg-white p-4 shadow-sm flex flex-col md:flex-row items-center gap-4">
      <div className="relative w-full md:w-1/2">
        <input
          type="text"
          placeholder="Buscar productos..."
          className="w-full p-2 pl-10 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />
        <Search className="absolute left-3 top-2.5 text-pink-400" size={20} />
      </div>
      <div className="flex gap-4 w-full md:w-auto">
        <div className="flex items-center gap-2">
          <Filter size={20} className="text-pink-600" />
          <select
            value={filtroCategoria}
            onChange={(e) => setFiltroCategoria(e.target.value)}
            className="p-2 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
          >
            {categorias.map((categoria) => (
              <option key={categoria} value={categoria}>
                {categoria.charAt(0).toUpperCase() + categoria.slice(1)}
              </option>
            ))}
          </select>
        </div>
        <div className="flex items-center gap-2">
          <select
            value={filtroTalla}
            onChange={(e) => setFiltroTalla(e.target.value)}
            className="p-2 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
          >
            {tallas.map((talla) => (
              <option key={talla} value={talla}>
                {talla.charAt(0).toUpperCase() + talla.slice(1)}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default BarraBusqueda;
