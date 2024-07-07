import React from "react";
import "./cta.css";

const Cta = () => {
  return (
    <div className="call-order">
      <div className="order">
        <h3>Get Free $100 Indoor Delivery Service Upgrade!</h3>
        <p>And, be the first to know our latest deals.</p>
      </div>

      <div className="subscribe">
        <input type="text" placeholder="Enter your email" />
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default Cta;
