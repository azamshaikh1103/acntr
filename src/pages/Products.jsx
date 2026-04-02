import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductList from "./ProductList";
import Loader from "./Loader";

const Products = () => {
  let [products, setProducts] = useState([]);
  let [error, setError] = useState("");

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/products");
        console.log(response.data.products);
        setProducts(response.data.products);
      } catch (err) {
        console.log("Error", err);
        setError(err.message);
      }
    };

    fetchdata();
  }, []);

  if (products.length == 0) {
    return <Loader />;
  }

  if (error) {
    return <h1>{error}</h1>;
  }
  
  return (
    <div className="container mt-4">
      <h1>Products</h1>
      <div className="d-flex flex-wrap justify-content-center">
        {products.map((product) => {
          return <ProductList product={product} key={product.id} />;
        })}
      </div>
    </div>
  );
};

export default Products;
