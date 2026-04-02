const RestaurantCard = ({ name, cuisine, price, image, eta, rating }) => {
  return (
    <div className="card mb-3" style={{ maxWidth: '540px' }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img src={image} className="img-fluid rounded-start" alt={name} style={{ height: '100%', objectFit: 'cover' }} />
        </div>
        <div className="col-md-8">
          <div className="card-body text-start">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{cuisine}</p>
            <p className="card-text"><small className="text-body-secondary">{price} • {eta}</small></p>
            <p className="card-text fw-bold">{rating} <span>★</span></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
