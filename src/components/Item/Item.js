import React from "react";
import { Link } from "react-router-dom";
import { Typography, Card, Box, CardMedia } from "@mui/material";


const Item = ({ item }) => {
  return (
    <Link to={"/item/" + item.id}  style={{textDecoration: 'none'}}>
      <Card className="container">
        <Box>
          <CardMedia
            component="img"
            alt={item.nombre}
            height="400"
            image={item.imagen}
          />
          <Typography variant="h6" display="block" gutterBottom>
            {item.nombre} - {item.precio} ETH
          </Typography>
        </Box>
      </Card>
    </Link>
  );
};

export default Item;
