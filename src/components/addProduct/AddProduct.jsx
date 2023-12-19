//? Импортируем React и React Router
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
//? Импортируем модульный CSS
import styles from "../style.module.css";

const AddProduct = ({ createProduct }) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [descr, setDescr] = useState("");
  const [image, setImage] = useState("");
  const navigate = useNavigate();

  function handleAppProduct() {
    if (!title || !price || !image || !descr) {
      return;
    }
    let newProduct = { title, price, descr, image };
    createProduct(newProduct);
    setTitle("");
    setPrice("");
    setDescr("");
    setImage("");
    navigate("/");
  }

  return (
    <>
      <Link to={"/"}>
        {" "}
        <button type="button" className={styles.btnStyle}>
          Exit
        </button>
      </Link>{" "}
      <h1 className={styles.h1Titles}>Add Product</h1>{" "}
      <div className={styles.addProdStyle}>
        <input
          className={styles.inpStyle}
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <input
          className={styles.inpStyle}
          type="text"
          placeholder="Description"
          value={descr}
          onChange={(e) => {
            setDescr(e.target.value);
          }}
        />
        <input
          className={styles.inpStyle}
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => {
            setPrice(e.target.value);
          }}
        />
        <input
          className={styles.inpStyle}
          type="text"
          placeholder="Image"
          value={image}
          onChange={(e) => {
            setImage(e.target.value);
          }}
        />
        <button
          type="button"
          onClick={handleAppProduct}
          className={styles.btnStyle}
        >
          Add
        </button>
      </div>
    </>
  );
};

export default AddProduct;
