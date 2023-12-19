//? Импортируем React и React Router
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
//? Импортируем модульный CSS
import styles from "../style.module.css";

const EditProduct = ({ getOneProduct, oneProduct, editProduct }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [descr, setDescr] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    getOneProduct(id);
  }, []);

  useEffect(() => {
    if (oneProduct) {
      setTitle(oneProduct.title);
      setPrice(oneProduct.price);
      setDescr(oneProduct.descr);
      setImage(oneProduct.image);
    }
  }, [oneProduct]);
  function handleSaveChanges() {
    let editedProduct = { title, price, descr, image };
    if (!title || !price || !descr || !image) return;
    editProduct(id, editedProduct);
    navigate("/");
  }
  return (
    <>
      <Link to={"/"}>
        {" "}
        <button type="button" className={styles.btnStyle}>
          Exit
        </button>
      </Link>
      <h1 className={styles.h1Titles}>Edit Product</h1>

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
          onClick={handleSaveChanges}
          className={styles.btnStyle}
        >
          Save
        </button>
      </div>
    </>
  );
};

export default EditProduct;
