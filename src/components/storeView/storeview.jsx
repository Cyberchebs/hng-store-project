import React from "react";
import "./storeview.css";
import dataStore from "../../data";
import ProductTile from "../product-tile/productTile";

const Storeview = () => {
  return (
    <div>
      <div>
        <ul>
          <li>
            <a href="">Funiture</a>
          </li>
          <li className="shop">
            <a href="">Shop</a>
          </li>
          <li>
            <a href="">cartpage</a>
          </li>
          <li>
            <a href="">checkout</a>
          </li>
        </ul>
      </div>
      <div className="container">
        <div className="grid-container">
          {dataStore && dataStore.length > 0
            ? dataStore.map(dataItem => <ProductTile data={dataItem} />)
            : null}
        </div>
      </div>
    </div>
  );
};

export default Storeview;
