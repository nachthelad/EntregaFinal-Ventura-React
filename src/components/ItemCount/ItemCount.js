import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const ItemCount = ({ item, stockItems, addProduct }) => {
    const [counter, setCounter] = useState(1);

    const incrementarStock = () => {
        if (counter < stockItems) {
            setCounter(counter + 1);
        } 
    }

    const decrementarStock = () => {
        if (counter > 1) {
            setCounter(counter - 1);
        }
    }

    const handleAddProduct = () => {
        try {
            addProduct(item, counter);
            setCounter(1);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <IconButton onClick={decrementarStock} color="primary" disabled={stockItems <= 1} aria-label="Restar">
                    <RemoveCircleOutlineIcon />
                </IconButton>
                <Typography variant="h6">{counter}</Typography>
                <IconButton onClick={incrementarStock} color="primary"  disabled={stockItems <= 1} aria-label="Sumar">
                    <AddCircleOutlineIcon />
                </IconButton>
            </Box>
            <Button 
                variant="contained"  
                onClick={handleAddProduct}
            >
                Agregar al carrito
            </Button>
        </Box>
    );
}

export default ItemCount;
