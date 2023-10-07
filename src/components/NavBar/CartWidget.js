import React from 'react'
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {Badge, Box, IconButton} from "@mui/material";

const CartWidget = () => {
  return (
    <Box sx={{ display: { md: "flex" } }}>
    <IconButton
      size="large"
      color="inherit">
      <Badge badgeContent={2} color="error">
        <ShoppingCartIcon size='large' fontSize='inherit'/>
      </Badge>
    </IconButton>
  </Box>
  )
}

export default CartWidget