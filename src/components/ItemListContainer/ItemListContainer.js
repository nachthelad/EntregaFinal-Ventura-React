import React from "react";
import { useState, useEffect } from "react";
import "./ItemListContainer.css";
import {
  getFirestore,
  collection,
  getDocs,
  where,
  query,
} from "firebase/firestore";
import ItemList from "../ItemList/ItemList";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ greeting, title }) => {
  const [item, setItem] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const queryDb = getFirestore();
    const queryCollection = collection(queryDb, "items");
    if (id) {
      const queryFilter = query(queryCollection, where("categoryId", "==", id));
      getDocs(queryFilter).then((res) =>
        setItem(res.docs.map((p) => ({ id: p.id, ...p.data() })))
        );
    } else {
      getDocs(queryCollection).then((res) =>
        setItem(res.docs.map((p) => ({ id: p.id, ...p.data() })))
      );
    }
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
