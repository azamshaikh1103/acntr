import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { cakeData } from "./CakeDetails";

const CakeGallery = () => {
  const { theme } = useTheme();

  return (
    <div className={`container mt-4 p-4 ${theme === 'dark' ? 'text-white bg-secondary bg-opacity-10' : 'text-dark'}`}>
      <h2 className="mb-4">Cake Gallery</h2>
      
      <div className="row g-4">
        {Object.entries(cakeData).map(([id, cake]) => (
          <div key={id} className="col-sm-6 col-md-4 col-lg-3">
            <div className={`card h-100 rounded-0 border-0 ${theme === 'dark' ? 'bg-dark text-white border-secondary' : 'bg-white text-dark'}`}>
              <div className="card-body d-flex flex-column">
                <h5 className="card-title fw-bold mb-3">{cake.name}</h5>
                <div className="mb-auto">
                  <span className="badge bg-warning text-dark me-2 mb-2 fs-6">₹{cake.details.price}</span>
                  {cake.details.hasOffer && <span className="badge bg-danger rounded-0 mb-2">{cake.details.discount}</span>}
                </div>
                <Link to={`/cakedetails/${id}`} className={`btn rounded-0 mt-3 w-100 ${theme === 'dark' ? 'btn-outline-light' : 'btn-outline-primary'}`}>
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CakeGallery;
