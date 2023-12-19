//? Импортируем React и React Router
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
//? Импортируем Material UI
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
//? Импортируем модульный CSS
import styles from "../style.module.css";

const ProductList = ({ readProducts, products, deleteProduct }) => {
  useEffect(() => {
    readProducts();
  }, []);
  return (
    <>
      <Link to={"/add"}>
        {" "}
        <button type="button" className={styles.btnStyle}>
          Add Product
        </button>
      </Link>
      <h1 className={styles.h1Titles}>Product List</h1>{" "}
      <div className={styles.cardContainer}>
        {products.map((elem, index) => (
          <Card key={index} sx={{ maxWidth: 345 }} className={styles.cardStyle}>
            <CardMedia
              sx={{ height: 275 }}
              image={elem.image}
              title="green iguana"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                className={styles.cardName}
              >
                Название: {elem.title}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                className={styles.cardDescr}
              >
                Описание: {elem.descr}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                className={styles.cardPrice}
              >
                Цена: {elem.price}
              </Typography>
            </CardContent>
            <CardActions className={styles.cardBtns}>
              <Link to={`show/${elem.id}`}>
                <Button size="small" className={styles.actionBtn}>
                  Show
                </Button>
              </Link>
              <Link to={`edit/${elem.id}`}>
                <Button size="small" className={styles.actionBtn}>
                  Edit
                </Button>
              </Link>
              <Button
                size="small"
                className={styles.actionBtn}
                onClick={() => deleteProduct(elem.id)}
              >
                Delete
              </Button>
            </CardActions>
          </Card>
        ))}
      </div>
    </>
  );
};

export default ProductList;
