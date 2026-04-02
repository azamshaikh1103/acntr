import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Loader from "./Loader";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProductDetails = async () => {
        try {
            const response = await axios.get(`https://dummyjson.com/products/${id}`);
            setProduct(response.data);
        } catch (err) {
            console.log("Error", err);
            setError(err.message);
        }
    };
    
    fetchProductDetails();
  }, [id]);

  if (error) {
    return <div className="container mt-4"><h3 className="text-danger">{error}</h3></div>;
  }

  if (!product) {
    return <Loader />;
  }

  return (
    <div className="container mt-4">
      <div className="card mx-auto" style={{ maxWidth: '600px' }}>
        <img src={product.thumbnail} className="card-img-top" alt={product.title} style={{ height: '300px', objectFit: 'contain', backgroundColor: '#f8f9fa' }} />
        <div className="card-body">
          <h2 className="card-title">{product.title}</h2>
          <span className="badge bg-primary mb-2">{product.category}</span>
          <p className="card-text fs-4 text-success">${product.price}</p>
          <p className="card-text">{product.description}</p>
          <div className="d-flex justify-content-between">
            <span><strong>Rating:</strong> ⭐ {product.rating}</span>
            <span><strong>Stock:</strong> {product.stock} available</span>
          </div>
          <hr />
          <Link to="/products" className="btn btn-secondary">
            Back to Products
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
