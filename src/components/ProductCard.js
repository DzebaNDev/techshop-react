import React from "react";
import "../styles/ProductCard.css";

function ProductCard({ product, onAddToCart }) {
  const { name, image, price, brand } = product;

  return (
    <div className="product-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>Бренд: {brand}</p>
      <p className="price">{price} грн</p>
      <button onClick={() => onAddToCart(product)}>Додати до кошика</button>
    </div>
  );
}

export default ProductCard;
