import Carousel from "./Carousel";
import RestaurantList from "./RestaurantList";
import { useTheme } from "../context/ThemeContext";

const RestaurantPage = () => {
  const { theme } = useTheme();

  return (
    <div className={theme === 'dark' ? 'text-white' : 'text-dark'}>
      <div className="container mt-4">
        <Carousel />
      </div>
      <RestaurantList />
    </div>
  );
};

export default RestaurantPage;
