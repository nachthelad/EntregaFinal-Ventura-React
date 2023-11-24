import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge, Box, IconButton } from "@mui/material";
import { useCartContext } from "../Context/CartContext";

const CartWidget = () => {
  const { totalProducts } = useCartContext();
  const itemCount = totalProducts();

  return (
    <Box sx={{ display: { md: "flex" } }}>
      <IconButton size="large" color="inherit">
        {itemCount > 0 && (
          <Badge badgeContent={itemCount} color="error">
            <ShoppingCartIcon fontSize="inherit" />
          </Badge>
        )}
        {itemCount === 0 && <ShoppingCartIcon fontSize="inherit" />}
      </IconButton>
    </Box>
  );
};

export default CartWidget;
