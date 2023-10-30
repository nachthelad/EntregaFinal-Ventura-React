import React from "react";
import { useState, useEffect } from "react";
import "./ItemListContainer.css";
import Products from "../json/Products";
import ItemList from "../ItemList/ItemList";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ greeting, title }) => {
  const [item, setItem] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await new Promise((resolve) => {
          setTimeout(() => {
            resolve(
              id ? Products.filter((item) => item.categoria === id) : Products
            );
          }, 1000);
        });
        setItem(data);
      } catch (error) {
        console.log("Error", error);
      }
    };
    fetchData();
  }, [id]);

  return (
    <div>
      <Box flexGrow={2}>
        <Typography variant="h4" color={"#fff"} marginTop={1} marginBottom={2}>
          {greeting}
        </Typography>
        <Typography variant="h6" color={"#fff"} marginTop={1} marginBottom={1}>
          {title}
        </Typography>
        <ItemList item={item} />
        </Box>
    </div>
  );
};

export default ItemListContainer;
