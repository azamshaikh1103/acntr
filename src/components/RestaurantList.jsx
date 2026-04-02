import RestaurantCard from "./RestaurantCard";

const restaurantData = [
  {
    id: 1,
    name: "Burger King",
    cuisine: "American, Fast Food",
    price: "₹ 500",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&q=80",
    eta: "30-45 mins",
    rating: "4.2"
  },
  {
    id: 2,
    name: "Sushi Zen",
    cuisine: "Japanese, Sushi",
    price: "₹ 1000",
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=400&q=80",
    eta: "45-60 mins",
    rating: "4.8"
  },
  {
    id: 3,
    name: "Pampa Churrascaria",
    cuisine: "Brazilian, Steakhouse",
    price: "₹ 2000",
    image: "https://images.unsplash.com/photo-1625631980820-fbdc8ca2e902?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MjQ0NjR8MHwxfHNlYXJjaHwxN3x8U2tld2VycyUyMFN0ZWFrfGVufDB8MHx8fDE3NTQxMDAxMzl8MA&ixlib=rb-4.1.0&q=80&w=1080&w=900",
    eta: "50-70 mins",
    rating: "4.5"
  },
  {
    id: 4,
    name: "Green Bowl",
    cuisine: "Healthy, Salads",
    price: "₹ 500",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&q=80",
    eta: "20-30 mins",
    rating: "4.0"
  }
];

const RestaurantList = () => {
  return (
    <div className="container mt-4">
      <h2 className="mb-4 text-start">Popular Restaurants</h2>
      <div className="row">
        {restaurantData.map((restaurant) => (
          <div className="col-12 col-md-6 mb-4" key={restaurant.id}>
            <RestaurantCard {...restaurant} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantList;
