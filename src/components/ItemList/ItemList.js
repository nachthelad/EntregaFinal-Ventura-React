import React from "react";
import Item from "../Item/Item";
import { Box, Card } from "@mui/material";
const ItemList = ({ item }) => {
  return (
    <Box>
      {item.map((item) => (
        <Card
          key={item.id}
          sx={{
            maxHeight: 600,
            maxWidth: 600,
            display: "inline-block",
            mx: "2px",
            transform: "scale(0.9)",
            borderRadius: "15px",
            boxShadow: "5"
          }}>
          <Item item={item} />
        </Card>
      ))}
    </Box>
  );
};

export default ItemList;
