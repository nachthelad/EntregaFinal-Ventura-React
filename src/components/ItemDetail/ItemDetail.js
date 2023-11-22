import React, { useState, useContext } from "react";
import { styled } from "@mui/material/styles";
import { Box, Typography, Button } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import ItemCount from "../ItemCount/ItemCount";
import { cartContext } from "../Context/CartContext";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const ItemDetail = ({ item }) => {
  const [goToCart, setGoToCart] = useState(false);
  const { agregarAlCarrito } = useContext(cartContext);

  const onAdd = (cantidad) => {
    setGoToCart(true);
    agregarAlCarrito(item, cantidad);
  };

  return (
    <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center" }}>
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid
          item
          xs={12}
          md={7}
          sx={{ display: "flex", justifyContent: "center" }}>
          <Item
            sx={{
              marginTop: 10,
              maxWidth: { xs: "100%", md: 500 },
              overflow: "hidden",
            }}>
            <Box
              component="img"
              sx={{
                height: { xs: "auto", md: 500 },
                width: "100%",
                objectFit: "contain",
                maxHeight: { md: 500 },
              }}
              alt={item.title}
              src={item.img}
            />
          </Item>
        </Grid>
        <Grid
          item
          xs={12}
          md={5}
          sx={{ display: "flex", justifyContent: "center" }}>
          <Item
            sx={{
              marginTop: { xs: 10, md: 0 },
              maxWidth: { xs: "100%", md: 400 },
            }}>
            <Typography variant="h4">{item.title}</Typography>
            <Typography variant="h6">{item.description}</Typography>
            <Typography variant="h6"> {item.price} ETH</Typography>
            <Typography variant="button"> Cantidad: {item.stock}</Typography>
            <Box
              variant="contained"
              sx={{ display: "block", margin: "0 auto", marginTop: 2 }}>
              {goToCart ? (
                <Button component={RouterLink} to="/cart">Ir al carrito</Button>
              ) : (
                <ItemCount item={item} stockItems={item.stock} addProduct={onAdd} />
              )}
            </Box>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ItemDetail;
