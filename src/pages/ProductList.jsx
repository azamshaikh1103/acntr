import React from "react";
import { Link } from "react-router-dom";

const ProductList = ({ product }) => {
  return (
    <div className="card m-2" style={{ width: "18rem" }}>
      <img src={product.thumbnail} className="card-img-top" alt={product.title} />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text">${product.price}</p>
        <p className="card-text"><small className="text-muted">{product.category}</small></p>
        <Link to={`/products/${product.id}`} className="btn btn-primary mt-auto">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ProductList;
