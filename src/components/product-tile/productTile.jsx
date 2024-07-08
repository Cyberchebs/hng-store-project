import React from "react";
import "./producttile.css";

const ProductTile = ({ data }) => {
  return (
    <div className="grid-box">
      <div className="image-box">
        <img src={data.image} alt="" />
        <div className="overlay"></div>
      </div>
      <div className="description">
        <p>{data.description}</p>
        <p>{data.price}</p>
      </div>
    </div>
  );
};

export default ProductTile;
