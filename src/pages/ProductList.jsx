import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem } from "../store/cartSlice";

const ProductList = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div className="card m-2" style={{ width: "18rem" }}>
      <img src={product.thumbnail} className="card-img-top" alt={product.title} />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text">${product.price}</p>
        <p className="card-text">
          <small className="text-muted">{product.category}</small>
        </p>
        <div className="d-flex justify-content-between mt-auto">
          <Link to={`/products/${product.id}`} className="btn btn-primary">
            View Details
          </Link>
          <button className="btn btn-success" onClick={() => handleAddItem(product)}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
