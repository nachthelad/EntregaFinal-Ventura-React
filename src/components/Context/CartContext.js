import { createContext, useState } from "react";

export const cartContext = createContext({ cart: [] });

const { Provider } = cartContext;

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const agregarAlCarrito = (producto, cantidad) => {
    cantidad = parseInt(cantidad, 10);
    const existeEnCarrito = cart.find(item => item.id === producto.id);

    if (existeEnCarrito) {
      setCart(cart.map(item => 
        item.id === producto.id 
          ? { ...item, cantidad: item.cantidad + cantidad } 
          : item
      ));
    } else {
      setCart([...cart, { ...producto, cantidad }]);
    }
  };

  const cantidadEnCarrito = () => {
    return cart.reduce((acumulado, actual) => {
      return acumulado + (actual.cantidad || 0); 
    }, 0);
  };

  const precioTotal = () => {
    return cart.reduce((total, producto) => {
        return total + producto.cantidad * producto.price;
    }, 0);
};

  const quitarDelCarrito = (id) => {
    const nuevoCarrito = cart.filter((item) => item.id !== id);
    setCart(nuevoCarrito);
  };

  return (
    <Provider
      value={{ cart, agregarAlCarrito, cantidadEnCarrito, quitarDelCarrito, precioTotal }}>
      {children}
    </Provider>
  );
}

export default CartProvider;
