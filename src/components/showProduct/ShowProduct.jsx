//? Импортируем React и React Router
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
//? Импортируем Material UI
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
//? Импортируем axios
import axios from "axios";
//? Импортируем модульный CSS
import styles from "../style.module.css";

const ShowProduct = ({ getOneProduct }) => {
  const { id } = useParams();
  const [prod, setProd] = useState(null);
  useEffect(() => {
    axios(`http://localhost:8000/products/${id}`).then((res) => {
      setProd(res.data);
    });
  }, [id]);
  return (
    <>
      <Link to={"/"}>
        {" "}
        <button type="button" className={styles.btnStyle}>
          Exit
        </button>
      </Link>
      <h1 className={styles.h1Titles}>Show Details</h1>
      {prod ? (
        <>
          <Card key={id} sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 295 }}
              image={prod.image}
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Название: {prod.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Описание: {prod.descr}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Цена: {prod.price}
              </Typography>
            </CardContent>
          </Card>
        </>
      ) : null}
    </>
  );
};

export default ShowProduct;
