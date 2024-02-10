const estadoInicial = {
  productos: [
    {
      id: 1,
      nombre: "Pistola de plasma - Modelo APEX",
      descripcion:
        "Una pistola futurista que dispara ráfagas de energía letales. Ideal para la defensa personal en entornos hostiles.",
    },
    {
      id: 2,
      nombre: "Traje de combate táctico - Serie XEON",
      descripcion:
        "Un traje blindado avanzado diseñado para resistir impactos balísticos y explosiones. Incluye visión nocturna y sistema de comunicaciones integrado.",
    },
    {
      id: 3,
      nombre: "Botiquín de supervivencia - Edición limitada WASTELAND",
      descripcion:
        "Kit completo para situaciones de emergencia en entornos desolados. Incluye suministros médicos, alimentos liofilizados y herramientas de supervivencia.",
    },
    {
      id: 4,
      nombre: "Mejora cerebral - NeuroBoost 3000",
      descripcion:
        "Implante neural que aumenta la capacidad cognitiva y la velocidad de procesamiento del cerebro. ¡Despierta tu genio interior con NeuroBoost 3000!",
    },
  ],

  carrito: [],
};

// Redicer es una función que recibe el estado actual y una acción, y devuelve un nuevo estado

const reducer = (estado = estadoInicial, accion) => {
  switch (accion.type) {
    case "AGREGAR_PRODUCTO_AL_CARRITO":
      const { idProductoAAgregar, nombre } = accion;
      if (estado.carrito.length === 0) {
        return {
          ...estado,
          carrito: [{ id: idProductoAAgregar, nombre: nombre, cantidad: 1 }],
        };
      } else {
        const nuevoCarrito = [...estado.carrito];

        const yaEstaEnCarrito =
          nuevoCarrito.filter((productoDeCarrito) => {
            return productoDeCarrito.id === idProductoAAgregar;
          }).length > 0;

        if (yaEstaEnCarrito) {
          nuevoCarrito.forEach((productoDeCarrito, index) => {
            if (productoDeCarrito.id === idProductoAAgregar) {
              const cantidad = nuevoCarrito[index].cantidad;
              nuevoCarrito[index] = {
                id: idProductoAAgregar,
                nombre: nombre,
                cantidad: cantidad + 1,
              };
            }
          });
        } else {
          nuevoCarrito.push({
            id: idProductoAAgregar,
            nombre: nombre,
            cantidad: 1,
          });
        }
        return {
          ...estado,
          carrito: nuevoCarrito,
        };
      }
      break;
    default:
      return estado;
  }
};

export default reducer;
