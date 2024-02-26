import React, { useState } from "react";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
const ImageSlider = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="flex ">
      <button onClick={prevImage}>
        <span>
          <FaArrowCircleLeft className="w-10 h-10" />
        </span>
      </button>
      <img src={images[currentImageIndex]} className="w-96 h-96" />

      <button onClick={nextImage}>
        <span>
          <FaArrowCircleRight className="w-10 h-10" />
        </span>
      </button>
    </div>
  );
};
export default ImageSlider;
