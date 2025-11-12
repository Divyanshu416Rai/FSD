import React from "react";

function RotateImage({ onRotate }) {
  return (
    <div style={{ marginTop: "20px" }}>
      <h3>Image Rotation</h3>
      <button onClick={onRotate}>Rotate 90°</button>
    </div>
  );
}

export default RotateImage;
