import React from 'react'
import Typography from '@mui/material/Typography';
import './ItemListContainer.css'
import { Box } from '@mui/material';

const ItemListContainer = ({greeting}) => {
  return (
    <Box flexGrow={ 2 }>
      <Typography variant='h4' color={ '#fff' } marginTop={ 1 }>{greeting}</Typography>
    </Box>
  )
}

export default ItemListContainer