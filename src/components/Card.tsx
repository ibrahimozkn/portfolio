import React from "react";

function Card() {
  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">Gatsot - Smart Shopping Assistant</h2>
        <ul>
          <li>
            <strong>Category:</strong> E-Commerce
          </li>
          <li>
            <strong>Technologies:</strong> Flutter, Firebase, ML Kit
          </li>
          <li>
            <strong>Description:</strong> A smart shopping assistant that helps
            you find the best deals and discounts on products you love.
          </li>
        </ul>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
