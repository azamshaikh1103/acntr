import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../store/cartSlice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1>Shopping Cart</h1>
        {cartItems.length > 0 && (
          <button className="btn btn-danger" onClick={handleClearCart}>
            Clear Cart
          </button>
        )}
      </div>

      {cartItems.length === 0 ? (
        <div className="alert alert-info">Your cart is empty.</div>
      ) : (
        <div className="row">
          <div className="col-md-8">
            {cartItems.map((item, index) => (
              <div key={index} className="card mb-3 shadow-sm">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src={item.thumbnail}
                      className="img-fluid rounded-start"
                      alt={item.title}
                      style={{ height: "150px", objectFit: "cover", width: "100%" }}
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">{item.title}</h5>
                      <p className="card-text text-muted small">{item.category}</p>
                      <p className="card-text font-weight-bold h5">${item.price}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="col-md-4">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Order Summary</h5>
                <hr />
                <div className="d-flex justify-content-between mb-2">
                  <span>Total Items:</span>
                  <span>{cartItems.length}</span>
                </div>
                <div className="d-flex justify-content-between mb-2">
                  <span className="h5">Total Price:</span>
                  <span className="h5">${cartItems.reduce((acc, item) => acc + item.price, 0).toFixed(2)}</span>
                </div>
                <button className="btn btn-primary w-100 mt-3" disabled>
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
