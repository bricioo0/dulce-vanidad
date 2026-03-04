import { CheckCircle, Send, Upload } from "lucide-react";

const ALIAS_FIJO = "dulce.vanidad.pagos";
const CORREO_DUEÑO = "tucorreo@ejemplo.com";
const WHATSAPP_DUEÑO = "1112345678";

const Carrito = ({
  carrito,
  setMostrarCarrito,
  eliminarDelCarrito,
  calcularTotal,
  comprobante,
  setComprobante,
  mensajeCompra,
  setMensajeCompra,
  compraFinalizada,
  setCompraFinalizada,
}) => {
  const manejarSubirComprobante = (e) => {
    const file = e.target.files[0];
    if (file) {
      setComprobante(file.name);
    }
  };

  const manejarFinalizarCompra = () => {
    if (!comprobante) {
      setMensajeCompra("Por favor, sube el comprobante de transferencia.");
      return;
    }
    setCompraFinalizada(true);
    setMensajeCompra(
      `¡Transferencia confirmada! El comprobante ha sido enviado a ${CORREO_DUEÑO} y al WhatsApp ${WHATSAPP_DUEÑO}.`
    );
  };

  return (
    <div className="fixed top-0 right-0 h-full w-full md:w-96 bg-white shadow-lg p-6 overflow-y-auto z-50">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Carrito de Compras</h2>
        <button
          onClick={() => setMostrarCarrito(false)}
          className="text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>
      </div>
      {carrito.length === 0 ? (
        <p className="text-gray-500">No hay productos en el carrito.</p>
      ) : (
        <>
          <ul className="mb-6">
            {carrito.map((producto) => (
              <li key={producto.id} className="flex justify-between items-center mb-4 pb-4 border-b border-pink-100">
                <div>
                  <h3 className="font-semibold">{producto.nombre}</h3>
                  <p className="text-pink-600">${producto.precio}</p>
                </div>
                <button
                  onClick={() => eliminarDelCarrito(producto.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  Eliminar
                </button>
              </li>
            ))}
          </ul>
          <p className="font-bold text-xl mb-4">Total: ${calcularTotal()}</p>
          {!compraFinalizada ? (
            <>
              <div className="mb-6 p-4 bg-pink-50 rounded-lg">
                <h3 className="font-semibold mb-2">Instrucciones de pago:</h3>
                <p className="mb-2">
                  Transfiere el monto total (<strong>${calcularTotal()}</strong>) al siguiente alias:
                </p>
                <p className="font-mono bg-pink-100 p-2 rounded mb-4">{ALIAS_FIJO}</p>
                <p className="text-sm text-gray-600 mb-2">
                  Una vez realizada la transferencia, sube el comprobante aquí:
                </p>
                <label className="flex items-center gap-2 cursor-pointer mb-4">
                  <Upload size={20} className="text-pink-600" />
                  <span className="text-pink-600">{comprobante || "Seleccionar comprobante"}</span>
                  <input
                    type="file"
                    className="hidden"
                    onChange={manejarSubirComprobante}
                  />
                </label>
                <button
                  onClick={manejarFinalizarCompra}
                  className="w-full bg-pink-600 text-white py-2 rounded-lg hover:bg-pink-700 transition flex items-center justify-center gap-2"
                >
                  <Send size={18} /> Finalizar Compra
                </button>
              </div>
            </>
          ) : (
            <div className="text-center py-8">
              <CheckCircle size={48} className="text-green-500 mx-auto mb-4" />
              <p className="text-green-600 font-bold mb-2">{mensajeCompra}</p>
              <p className="text-gray-600">
                Pronto nos pondremos en contacto contigo para confirmar tu pedido.
              </p>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Carrito;
