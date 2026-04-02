import React, { useState, useEffect } from "react";
import axios from "axios";

const AddProducts = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    price: "",
    image: "",
  });

  const [message, setMessage] = useState({ type: "", text: "" });
  const [loading, setLoading] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const { title, description, category, price, image } = formData;
    const isValid =
      title.trim().length > 5 &&
      description.trim().length > 5 &&
      category.trim().length > 5 &&
      price.trim().length > 0 &&
      image.trim().length > 5;

    setIsFormValid(isValid);
  }, [formData]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ type: "", text: "" });

    try {
      const response = await axios.post(
        "https://dummyjson.com/products/add",
        formData,
      );
      if (response.status === 200 || response.status === 201) {
        setMessage({ type: "success", text: "Product added successfully!" });
        setFormData({
          title: "",
          description: "",
          category: "",
          price: "",
          image: "",
        });
      }
    } catch (error) {
      setMessage({
        type: "danger",
        text:
          error.response?.data?.message ||
          "Failed to add product. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="card-header bg-primary text-white">
              <h3 className="mb-0">Add New Product</h3>
            </div>
            <div className="card-body p-4">
              {message.text && (
                <div
                  className={`alert alert-${message.type} alert-dismissible fade show`}
                  role="alert"
                >
                  {message.text}
                  <button
                    type="button"
                    className="btn-close"
                    onClick={() => setMessage({ type: "", text: "" })}
                  ></button>
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="title" className="form-label fw-bold">
                    Title
                  </label>
                  <input
                    type="text"
                    className={`form-control ${formData.title.length > 0 && formData.title.length <= 5 ? "is-invalid" : ""}`}
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    placeholder="Enter product title"
                  />
                  {formData.title.length > 0 && formData.title.length <= 5 && (
                    <div className="invalid-feedback">
                      Title must be greater than 5 characters.
                    </div>
                  )}
                </div>

                <div className="mb-3">
                  <label htmlFor="description" className="form-label fw-bold">
                    Description
                  </label>
                  <textarea
                    className={`form-control ${formData.description.length > 0 && formData.description.length <= 5 ? "is-invalid" : ""}`}
                    id="description"
                    name="description"
                    rows="3"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Enter product description"
                  ></textarea>
                  {formData.description.length > 0 &&
                    formData.description.length <= 5 && (
                      <div className="invalid-feedback">
                        Description must be greater than 5 characters.
                      </div>
                    )}
                </div>

                <div className="mb-3">
                  <label htmlFor="category" className="form-label fw-bold">
                    Category
                  </label>
                  <input
                    type="text"
                    className={`form-control ${formData.category.length > 0 && formData.category.length <= 5 ? "is-invalid" : ""}`}
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    placeholder="e.g. electronics, apparel"
                  />
                  {formData.category.length > 0 &&
                    formData.category.length <= 5 && (
                      <div className="invalid-feedback">
                        Category must be greater than 5 characters.
                      </div>
                    )}
                </div>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="price" className="form-label fw-bold">
                      Price
                    </label>
                    <div className="input-group">
                      <span className="input-group-text">$</span>
                      <input
                        type="number"
                        min="0"
                        step="0.01"
                        className="form-control"
                        id="price"
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                        placeholder="0.00"
                      />
                    </div>
                  </div>

                  <div className="col-md-6 mb-4">
                    <label htmlFor="image" className="form-label fw-bold">
                      Image URL
                    </label>
                    <input
                      type="url"
                      className={`form-control ${formData.image.length > 0 && formData.image.length <= 5 ? "is-invalid" : ""}`}
                      id="image"
                      name="image"
                      value={formData.image}
                      onChange={handleChange}
                      placeholder="https://example.com/image.jpg"
                    />
                    {formData.image.length > 0 &&
                      formData.image.length <= 5 && (
                        <div className="invalid-feedback">
                          Image URL must be greater than 5 characters.
                        </div>
                      )}
                  </div>
                </div>

                <div className="d-grid gap-2">
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg"
                    disabled={!isFormValid || loading}
                  >
                    {loading ? (
                      <>
                        <span
                          className="spinner-border spinner-border-sm me-2"
                          role="status"
                          aria-hidden="true"
                        ></span>{" "}
                        Adding...
                      </>
                    ) : (
                      "Add Product"
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProducts;
