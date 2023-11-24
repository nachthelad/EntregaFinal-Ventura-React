import React from "react";
import ItemCart from "../ItemCart/ItemCart";
import { useCartContext } from "../Context/CartContext";
import { Link as RouterLink } from "react-router-dom";
import { Box, Typography, Button, Link, Container } from "@mui/material";

const Cart = () => {
  const { cart, totalPrice, clearCart } = useCartContext();

  const handleCheckout = () => {
    clearCart();
  };

  if (cart.length === 0) {
    return (
      <Container>
        <Typography variant="h5" sx={{ my: 2, color: 'white' }}>
          No hay elementos en el carrito
        </Typography>
        <Link component={RouterLink} to="/" underline="none">
          <Button variant="contained" color="primary">
            Volver al home
          </Button>
        </Link>
      </Container>
    );
  }

  return (
    <Container>
      <Box sx={{ my: 2 }}>
        {cart.map((product) => (
          <ItemCart key={product.id} product={product} />
        ))}
        <Typography variant="h6" sx={{ mt: 2, color: 'white' }}>
          Total: {totalPrice().toFixed(3)} ETH
        </Typography>
        <Link component={RouterLink} onClick={handleCheckout} to="/checkout" underline="none">
          <Button variant="contained" color="primary" sx={{ mt: 1 }}>
            Finalizar Compra
          </Button>
        </Link>
      </Box>
    </Container>
  );
};

export default Cart;
