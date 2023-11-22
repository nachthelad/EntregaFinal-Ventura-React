import React, { useContext } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge, Box, IconButton } from "@mui/material";
import { cartContext } from "../Context/CartContext";

const CartWidget = () => {
  const { cantidadEnCarrito} = useContext(cartContext);

  return (
    <Box sx={{ display: { md: "flex" } }}>
      <IconButton size="large" color="inherit">
          <Badge badgeContent={cantidadEnCarrito()} color="error">
          <ShoppingCartIcon size="large" fontSize="inherit" />
        </Badge>
      </IconButton>
    </Box>
  );
};

export default CartWidget;
