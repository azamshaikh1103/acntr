import React from "react";
import { useTheme } from "../context/ThemeContext";

const CakeGallery = () => {
  const { theme } = useTheme();

  return (
    <div className={`container mt-4 p-4 rounded ${theme === 'dark' ? 'text-white bg-secondary bg-opacity-10' : 'text-dark'}`}>
      <h2>Cake Gallery</h2>
      <p>Oops! I ate them all, I love big cakes.</p>
    </div>
  );
};

export default CakeGallery;
