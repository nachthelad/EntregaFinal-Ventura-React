import React, { useContext } from 'react';
import { cartContext } from "../Context/CartContext";
import { Box, Typography, Card, CardMedia, CardContent, Button, Grid } from '@mui/material';

const ItemCart = ({ product }) => {
    const { quitarDelCarrito } = useContext(cartContext);

    return (
        <Card sx={{ display: 'flex', marginBottom: 2, backgroundColor: 'transparent' }}>
            <CardMedia
                component="img"
                sx={{ width: 151, padding: 1 }}
                image={product.img}
                alt={product.title}
            />
            <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1, color: 'white' }}>
                <CardContent sx={{ flex: '1 0 auto', padding: 2 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={3}>
                            <Typography variant="subtitle1">
                                Título: {product.title}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <Typography variant="subtitle1">
                                Cantidad: {product.cantidad}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <Typography variant="subtitle1">
                                Precio unitario: {product.price} ETH
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <Typography variant="subtitle1">
                                Subtotal: {product.cantidad * product.price} ETH
                            </Typography>
                        </Grid>
                    </Grid>
                </CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', paddingRight: 2, paddingBottom: 1 }}>
                    <Button 
                        variant="contained" 
                        color="secondary" 
                        onClick={() => quitarDelCarrito(product.id)}>
                        Eliminar
                    </Button>
                </Box>
            </Box>
        </Card>
    );
};

export default ItemCart;
