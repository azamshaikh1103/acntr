import React from 'react';
import { useParams, Link } from 'react-router-dom';

const cakeData = {
  1: {
    name: "Chocolate Truffle",
    details: {
      description: "Rich chocolate cake with smooth truffle layers.",
      price: 700,
      rating: 4.5,
      reviews: 120,
      weight: "1 Kg",
      deliveryTime: "2 Hours",
      isAvailable: true,
      hasOffer: true,
      discount: "10% OFF",
    },
  },
  2: {
    name: "Black Forest",
    details: {
      description: "Classic cake with cherries and whipped cream.",
      price: 600,
      rating: 4.7,
      reviews: 200,
      weight: "1 Kg",
      deliveryTime: "2 Hours",
      isAvailable: true,
      hasOffer: false,
    },
  },
  3: {
    name: "Red Velvet",
    details: {
      description: "Soft red velvet cake with cream cheese frosting.",
      price: 750,
      rating: 4.6,
      reviews: 150,
      weight: "1 Kg",
      deliveryTime: "3 Hours",
      isAvailable: false,
      hasOffer: true,
      discount: "20% OFF",
    },
  },
  4: {
    name: "White Truffle",
    details: {
      description: "Smooth white chocolate cake with creamy texture.",
      price: 650,
      rating: 4.0,
      reviews: 90,
      weight: "1 Kg",
      deliveryTime: "3 Hours",
      isAvailable: true,
      hasOffer: false,
    },
  },
  5: {
    name: "Coffee Cake",
    details: {
      description: "Coffee flavored soft sponge cake.",
      price: 700,
      rating: 4.2,
      reviews: 95,
      weight: "1 Kg",
      deliveryTime: "2.5 Hours",
      isAvailable: true,
      hasOffer: true,
      discount: "15% OFF",
    },
  },
  6: {
    name: "Pineapple Cake",
    details: {
      description: "Fresh pineapple cake with light cream.",
      price: 600,
      rating: 3.9,
      reviews: 85,
      weight: "1 Kg",
      deliveryTime: "2 Hours",
      isAvailable: false,
      hasOffer: true,
      discount: "10% OFF",
    },
  },
  7: {
    name: "Butterscotch Cake",
    details: {
      description: "Crunchy butterscotch cake with caramel flavor.",
      price: 650,
      rating: 4.1,
      reviews: 110,
      weight: "1 Kg",
      deliveryTime: "2 Hours",
      isAvailable: true,
      hasOffer: false,
    },
  },
  8: {
    name: "Rasmalai Cake",
    details: {
      description: "Fusion cake with rasmalai flavor.",
      price: 800,
      rating: 4.8,
      reviews: 220,
      weight: "1 Kg",
      deliveryTime: "3 Hours",
      isAvailable: true,
      hasOffer: true,
      discount: "25% OFF",
    },
  },
  9: {
    name: "Dark Chocolate Cake",
    details: {
      description: "Intense dark chocolate cake for chocolate lovers.",
      price: 700,
      rating: 4.3,
      reviews: 130,
      weight: "1 Kg",
      deliveryTime: "2 Hours",
      isAvailable: false,
      hasOffer: true,
      discount: "12% OFF",
    },
  },
  10: {
    name: "Blueberry Cheesecake",
    details: {
      description: "Creamy cheesecake topped with blueberries.",
      price: 850,
      rating: 4.4,
      reviews: 140,
      weight: "1 Kg",
      deliveryTime: "3 Hours",
      isAvailable: true,
      hasOffer: true,
      discount: "18% OFF",
    },
  },
  11: {
    name: "Burnt Vanilla Cheesecake",
    details: {
      description: "Classic burnt cheesecake with vanilla flavor.",
      price: 800,
      rating: 3.8,
      reviews: 75,
      weight: "1 Kg",
      deliveryTime: "3 Hours",
      isAvailable: false,
      hasOffer: false,
    },
  },
  12: {
    name: "Lotus Biscoff Cake",
    details: {
      description: "Delicious lotus biscoff flavored cake.",
      price: 900,
      rating: 4.9,
      reviews: 300,
      weight: "1 Kg",
      deliveryTime: "3 Hours",
      isAvailable: true,
      hasOffer: true,
      discount: "20% OFF",
    },
  },
  13: {
    name: "Dark Devil Fudge",
    details: {
      description: "Extra rich fudge cake with chocolate layers.",
      price: 750,
      rating: 4.4,
      reviews: 160,
      weight: "1 Kg",
      deliveryTime: "2 Hours",
      isAvailable: true,
      hasOffer: false,
    },
  },
  14: {
    name: "Nutella Crunch Cake",
    details: {
      description: "Crunchy cake loaded with Nutella flavor.",
      price: 850,
      rating: 3.7,
      reviews: 95,
      weight: "1 Kg",
      deliveryTime: "2.5 Hours",
      isAvailable: false,
      hasOffer: true,
      discount: "15% OFF",
    },
  },
  15: {
    name: "Nutty Almond Cake",
    details: {
      description: "Almond-rich cake with crunchy texture.",
      price: 700,
      rating: 4.2,
      reviews: 110,
      weight: "1 Kg",
      deliveryTime: "2 Hours",
      isAvailable: true,
      hasOffer: false,
    },
  },
  16: {
    name: "Oreo Cake",
    details: {
      description: "Creamy Oreo cake loved by kids.",
      price: 650,
      rating: 4.5,
      reviews: 170,
      weight: "1 Kg",
      deliveryTime: "2 Hours",
      isAvailable: true,
      hasOffer: true,
      discount: "10% OFF",
    },
  },
  17: {
    name: "Butter Almond Cake",
    details: {
      description: "Soft butter cake with almond toppings.",
      price: 700,
      rating: 3.9,
      reviews: 90,
      weight: "1 Kg",
      deliveryTime: "2.5 Hours",
      isAvailable: false,
      hasOffer: false,
    },
  },
  18: {
    name: "Ferrero Rocher Cake",
    details: {
      description: "Premium cake with Ferrero Rocher flavor.",
      price: 950,
      rating: 4.7,
      reviews: 210,
      weight: "1 Kg",
      deliveryTime: "3 Hours",
      isAvailable: true,
      hasOffer: true,
      discount: "22% OFF",
    },
  },
  19: {
    name: "Hazelnut Cake",
    details: {
      description: "Hazelnut flavored cake with creamy layers.",
      price: 800,
      rating: 4.6,
      reviews: 180,
      weight: "1 Kg",
      deliveryTime: "2 Hours",
      isAvailable: true,
      hasOffer: false,
    },
  },
  20: {
    name: "Caramel Almond Cake",
    details: {
      description: "Caramel cake with crunchy almonds.",
      price: 750,
      rating: 4.0,
      reviews: 100,
      weight: "1 Kg",
      deliveryTime: "2.5 Hours",
      isAvailable: false,
      hasOffer: true,
      discount: "15% OFF",
    },
  },
};

const CakeDetails = () => {
  const { id } = useParams();
  const cake = cakeData[id];

  if (!cake) {
    return (
      <div className="container mt-5 text-center">
        <h2>Cake not found!</h2>
        <p className="text-muted">No cake exists with ID: {id}</p>
        <Link to="/cakes" className="btn btn-primary mt-3">Back to Cakes</Link>
      </div>
    );
  }

  const { name, details } = cake;

  return (
    <div className="container mt-5">
      <Link to="/cakes" className="btn btn-outline-secondary mb-4">&larr; Back to Cakes</Link>
      <div className="card shadow-lg border-0" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <div className="card-header bg-dark text-white p-4">
          <div className="d-flex justify-content-between align-items-center">
            <h2 className="mb-0">{name}</h2>
            <span className="badge bg-warning text-dark fs-5">₹{details.price}</span>
          </div>
        </div>
        <div className="card-body p-4">
          <p className="lead border-bottom pb-3 text-muted">{details.description}</p>
          
          <div className="row g-4 mt-2">
            <div className="col-md-6">
              <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between align-items-center bg-transparent">
                  <strong>Weight</strong>
                  <span>{details.weight}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center bg-transparent">
                  <strong>Delivery Time</strong>
                  <span>{details.deliveryTime}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center bg-transparent">
                  <strong>Rating</strong>
                  <span>⭐ {details.rating} ({details.reviews} reviews)</span>
                </li>
              </ul>
            </div>
            
            <div className="col-md-6 d-flex flex-column justify-content-center align-items-center">
              {details.isAvailable ? (
                <span className="badge bg-success p-2 px-3 fs-6 mb-3 w-75 text-center">In Stock</span>
              ) : (
                <span className="badge bg-danger p-2 px-3 fs-6 mb-3 w-75 text-center">Out of Stock</span>
              )}
              
              {details.hasOffer && (
                <div className="alert alert-info py-2 w-75 text-center mb-0 border-info">
                  <strong>Special Offer:</strong> {details.discount}
                </div>
              )}
            </div>
          </div>
          
          <div className="mt-5 text-center">
            <button className="btn btn-lg btn-primary px-5" disabled={!details.isAvailable}>
              {details.isAvailable ? 'Order Now' : 'Currently Unavailable'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CakeDetails;
