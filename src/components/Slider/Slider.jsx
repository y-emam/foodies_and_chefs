import "./styles.css";
import { useEffect, useState } from "react";

const ChefSlider = ({ chefs, visibleImages }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleChefClick = (index) => {};

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < chefs.length - visibleImages) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div className="slider-container">
      {/* Images Wrapper */}
      <div
        className="slider"
        style={{
          transform: `translateX(-${(currentIndex * 100) / visibleImages}%)`,
        }}
      >
        {chefs.map((chef, index) => (
          <div
            onClick={() => handleChefClick(index)}
            className="chef"
            key={index}
          >
            <img src={chef.image} alt="chef" />
            <h3>{chef.name}</h3>
            <h4>{chef.location}</h4>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={handlePrev}
        className="prev-btn"
        disabled={currentIndex === 0}
      >
        ‹
      </button>
      <button
        onClick={handleNext}
        className="next-btn"
        disabled={currentIndex >= chefs.length - visibleImages}
      >
        ›
      </button>
    </div>
  );
};

export default ChefSlider;
