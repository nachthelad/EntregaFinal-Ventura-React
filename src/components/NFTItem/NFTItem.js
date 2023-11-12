import React from "react";
import { Link } from "react-router-dom";
import { Typography, Card, Box, CardMedia } from "@mui/material";


const NFTItem = ({ item }) => {
  return (
    <Link to={"/item/" + item.id}  style={{textDecoration: 'none'}}>
      <Card className="container">
        <Box>
          <CardMedia
            component="img"
            alt={item.title}
            height="400"
            image={item.img}
          />
          <Typography variant="h6" display="block">
            {item.title} - {item.price} ETH
          </Typography>
        </Box>
      </Card>
    </Link>
  );
};

export default NFTItem;
