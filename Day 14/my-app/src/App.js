import React, { useState } from "react";
import "./App.css";
import Counter from "./counter";
import RotateImage from "./RotateImage";

function App() {
  const images = [
    "https://picsum.photos/id/1018/300/200",
    "https://picsum.photos/id/1015/300/200",
    "https://picsum.photos/id/1019/300/200",
  ];

  const [current, setCurrent] = useState(0);
  const [rotation, setRotation] = useState(0);

  const nextImage = () => {
    setCurrent((prev) => (prev + 1) % images.length);
    setRotation(0); 
  };

  const prevImage = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
    setRotation(0);
  };

  const handleRotate = () => {
    setRotation((prev) => (prev + 90) % 360);
  };

  return (
    <>
      <div className="container">
        <h2>Image Slider</h2>
        <div className="slider">
          <img
            src={images[current]}
            alt="slider"
            className="slider-img"
            style={{ transform: `rotate(${rotation}deg)` }}
          />
        </div>
        <div className="btn-box">
          <button onClick={prevImage}>Left</button>
          <button onClick={nextImage}>Right</button>
        </div>

        <RotateImage onRotate={handleRotate} />
      </div>

      <Counter />
    </>
  );
}

export default App;
