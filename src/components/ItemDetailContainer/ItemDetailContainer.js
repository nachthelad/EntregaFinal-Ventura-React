import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import ItemDetail from "../ItemDetail/ItemDetail";
import { Box } from "@mui/material";

const ItemDetailCointainer = () => {
  const [item, setItem] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const queryDb = getFirestore();
    const queryDoc = doc(queryDb, "items", id);
    getDoc(queryDoc).then((res) => setItem({ id: res.id, ...res.data() }));
  }, [id]);
  return (
    <Box>
      <ItemDetail item={item} />
    </Box>
  );
};

export default ItemDetailCointainer;
