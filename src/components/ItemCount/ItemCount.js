import React, { useEffect, useState } from "react";
import IconButton from '@mui/material/IconButton';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const ItemCount = ({ initial, stock, onAdd }) => {
	const [count, setCount] = useState(parseInt(initial));
	const decrease = () => {
		setCount(count - 1);
	};

	const increase = () => {
		setCount(count + 1);
	};

	useEffect(() => {
		setCount(parseInt(initial));
	}, [initial]);

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <IconButton onClick={decrease} color="primary" disabled={count <= 1} aria-label="Restar">
                    <RemoveCircleOutlineIcon />
                </IconButton>
                <Typography variant="h6">{count}</Typography>
                <IconButton onClick={increase} color="primary"  disabled={count >= stock} aria-label="Sumar">
                    <AddCircleOutlineIcon />
                </IconButton>
            </Box>
            <Button 
                variant="contained"  
                disabled={stock <= 0} 
                onClick={() => onAdd(count)}
            >
                Agregar al carrito
            </Button>
        </Box>
    );
}

export default ItemCount;
