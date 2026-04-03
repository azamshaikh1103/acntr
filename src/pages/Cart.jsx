import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../store/cartSlice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const clearCartHandler = () => {
    dispatch(clearCart());
  };

  if (cartItems.length === 0) {
    return (
      <div className="container mt-5">
        <h1>Cart is empty, Add items to the cart</h1>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1>Cart</h1>
        <button className="btn btn-danger" onClick={clearCartHandler}>
          Clear Cart
        </button>
      </div>
      <div className="d-flex flex-wrap justify-content-center">
        {cartItems.map((product, index) => (
          <div key={index} className="card" style={{ width: "15rem", margin: "10px" }}>
            <img
              src={product.images[0] || product.thumbnail}
              className="card-img-top"
              alt={product.title}
              style={{ height: "12rem", objectFit: "cover" }}
            />
            <div className="card-body">
              <h5 className="card-title text-truncate">{product.title}</h5>
              <p className="card-text">Price: ${product.price}</p>
              <p className="card-text small text-muted text-capitalize">{product.category}</p>
              <p className="card-text">⭐ {product.rating}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
