import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

const Carrito = ({ carrito }) => {
  return (
    <div>
      <TituloCarrito>Carrito de compras</TituloCarrito>
      {carrito.length > 0 ? (
        carrito.map((producto, index) => {
          return (
            <Producto key={index}>
              <NombreProducto>{producto.nombre}</NombreProducto>
              cantidad: {producto.cantidad}
            </Producto>
          );
        })
      ) : (
        <NoProducto>No hay productos en el carrito</NoProducto>
      )}
    </div>
  );
};

const Producto = styled.p`
  padding: 10px;
  border-bottom: 1px solid #ebeef3;
  font-size: 14px;
  justify-content: center;
`;

const NombreProducto = styled.p`
  font-weight: bold;
  font-size: 16px;
  color: #000;
`;

const TituloCarrito = styled.h3`
  font-size: 24px;
  margin-bottom: 20px;
  text-align: center;
`;

const NoProducto = styled.p`
  font-size: 16px;
  color: rgba(0, 0, 0, 0.5);
  text-align: center;
`;

const mapStateToProps = (estado) => {
  return {
    carrito: estado.carrito,
  };
};

export default connect(mapStateToProps)(Carrito);
