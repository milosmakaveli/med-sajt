import React, { useState } from "react";
import "./ProductCard.css"; 

const ProductCard = ({ product, addToCart }) => {
  const [quantity, setQuantity] = useState("1");

  const handleAdd = () => {
    const parsedQuantity = parseInt(quantity, 10);
    if (!parsedQuantity || parsedQuantity < 1) return;

    addToCart({ ...product, quantity: parsedQuantity });
    setQuantity("1");
  };

  return (
    <div className="product-card">
      <img
        src={product.image}
        alt={product.name}
        className="product-image"
      />

      <h3 className="product-title">{product.name}</h3>
      <p className="product-description">{product.description}</p>
      <p className="product-price">RSD {product.price.toFixed(2)}</p>

      <div className="quantity-controls">
        <label htmlFor={`qty-${product.id}`} className="quantity-label">
          Količina:
        </label>
        <input
          id={`qty-${product.id}`}
          type="number"
          inputMode="numeric"
          pattern="[0-9]*"
          min="1"
          value={quantity}
          onChange={(e) => {
            const value = e.target.value;
            if (value === "") {
              setQuantity("");
            } else {
              const parsed = parseInt(value, 10);
              if (!isNaN(parsed)) {
                setQuantity(String(parsed));
              }
            }
          }}
          className="quantity-input"
        />
      </div>

      <button className="add-to-cart-button" onClick={handleAdd}>
        Dodaj u korpu
      </button>
    </div>
  );
};

export default ProductCard;
