import React from "react";
import { styled } from "@mui/material/styles";
import { Box, Typography, Button } from "@mui/material";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const ItemDetail = ({ item }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid xs={7}>
          <Item sx={{ marginLeft: 30, marginTop: 10, maxWidth: 800 }}>
            <Box
              component="img"
              sx={{
                height: 633,
                width: 600,
                maxHeight: { xs: 633, md: 633 },
                maxWidth: { xs: 600, md: 600 },
              }}
              alt={item.nombre}
              src={item.imagen}
            />
          </Item>
        </Grid>
        <Grid xs={4} sx={{ marginTop: 20, maxWidth: 500 }}>
          <Item>
            <Typography variant='h4'>{item.nombre}</Typography>
            <Typography  variant='h6'>{item.descripcion}</Typography>
            <Typography  variant='h6'> ${item.precio}</Typography>
            <Typography  variant='button'> Cantidad: {item.stock}</Typography>
            <Button variant="contained" sx={{display: 'block', marginLeft: 23}}>Comprar</Button>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ItemDetail;
