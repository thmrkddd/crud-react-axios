//? Импортируем React и React Router
import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
//? Импортируем наши компоненты
import ProductList from "./components/productList/ProductList";
import AddProduct from "./components/addProduct/AddProduct";
import EditProduct from "./components/editProduct/EditProduct";
import ShowProduct from "./components/showProduct/ShowProduct";
//? Импортируем axios
import axios from "axios";

const App = () => {
  const API = "http://localhost:8000/products";
  const [products, setProducts] = useState([]);
  const [oneProduct, setOneProduct] = useState(null);

  async function readProducts() {
    const { data } = await axios(API);
    setProducts(data);
  }
  async function getOneProduct(id) {
    let { data } = await axios(`${API}/${id}`);
    setOneProduct(data);
  }
  async function createProduct(newProduct) {
    await axios.post(API, newProduct);
    readProducts();
  }
  async function deleteProduct(id) {
    await axios.delete(`${API}/${id}`);
    readProducts();
  }
  async function editProduct(id, editedProduct) {
    await axios.patch(`${API}/${id}`, editedProduct);
    readProducts();
  }
  return (
    <>
      {" "}
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <ProductList
                readProducts={readProducts}
                products={products}
                deleteProduct={deleteProduct}
              />
            }
          />
          <Route
            path="/add"
            element={<AddProduct createProduct={createProduct} />}
          />
          <Route
            path="/edit/:id"
            element={
              <EditProduct
                getOneProduct={getOneProduct}
                oneProduct={oneProduct}
                editProduct={editProduct}
              />
            }
          />
          <Route
            path="/show/:id"
            element={<ShowProduct getOneProduct={getOneProduct} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
