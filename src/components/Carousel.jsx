const Carousel = () => {
  return (
    <div id="carouselExampleControlsNoTouching" className="carousel slide" data-bs-touch="false">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80" className="d-block w-100" style={{ height: '300px', objectFit: 'cover' }} alt="Food Image 1" />
        </div>
        <div className="carousel-item">
          <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80" className="d-block w-100" style={{ height: '300px', objectFit: 'cover' }} alt="Food Image 2" />
        </div>
        <div className="carousel-item">
          <img src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80" className="d-block w-100" style={{ height: '300px', objectFit: 'cover' }} alt="Food Image 3" />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
