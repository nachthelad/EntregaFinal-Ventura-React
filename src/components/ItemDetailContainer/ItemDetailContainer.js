import React from 'react'
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Products from '../json/Products'
import ItemDetail from '../ItemDetail/ItemDetail';
import { Box } from "@mui/material";

const ItemDetailCointainer = () => {

  const [item, setItem] = useState([]);
  const { id } = useParams();

  useEffect(() => {

        const promesa = new Promise((resolve) => {
          setTimeout(() => {
            resolve(Products.find(item => item.id === parseInt(id)));
          }, 2000);
        });
        promesa.then((data)=>{
          setItem(data)
        })

  }, [id]);
  return (
    <Box>
      <ItemDetail item={item} />
    </Box>
  )
}

export default ItemDetailCointainer