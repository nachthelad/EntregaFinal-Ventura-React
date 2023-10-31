import React from "react";
import { styled } from "@mui/material/styles";
import { Box, Typography, Button } from "@mui/material";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(1),
  },
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(2),
  }
}));

const ItemDetail = ({ item }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={7}>
          <Item sx={{ marginLeft: { xs: 0, md: 30 }, marginTop: 10, maxWidth: 800 }}>
            <Box
              component="img"
              sx={{
                height: { xs: 'auto', md: 633 },
                width: { xs: '90%', md: 600 },
              }}
              alt={item.nombre}
              src={item.imagen}
            />
          </Item>
        </Grid>
        <Grid item xs={12} md={4} sx={{ marginTop: { xs: 0, md: 20 }, maxWidth: { xs: '100%', md: 500 } }}>
          <Item>
            <Typography variant='h4'>{item.nombre}</Typography>
            <Typography variant='h6'>{item.descripcion}</Typography>
            <Typography variant='h6'> {item.precio} ETH</Typography>
            <Typography variant='button'> Cantidad: {item.stock}</Typography>
            <Button variant="contained" sx={{display: 'block', margin: '0 auto'}}>Comprar</Button>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ItemDetail;
