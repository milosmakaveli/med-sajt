import React from "react";
import { Link } from "react-router-dom";
import "./Cart.css";

function Cart({ cart, removeFromCart, clearCart }) {
  // Calculate the total price, taking in acount the quantity also for each item
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart-page">
      {cart.length === 0 ? (
        <p className="empty-cart">
          Vaša korpa je prazna. <br /> <Link to="/products">Počnite kupovinu</Link>
        </p>
      ) : (
        <div>
          <div className="cart-order">
          <ul className="cart-items">
            {cart.map((item, index) => (
              <li key={index} className="cart-item">
                <div className="cart-item-info">
                  <img
                    src={item.image} 
                    alt={item.name}
                    className="cart-item-image"
                  />
                  <div className="cart-item-details">
                    <p>{item.name}</p>
                    <p>Količina: {item.quantity}</p>
                    <p>Cena: {(item.price * item.quantity).toFixed(2)} RSD</p>
                  </div>
                </div>
                <button className="remove-btn" onClick={() => removeFromCart(index)}>Ukloni</button>
              </li>
            ))}
          </ul>
          </div>
       
          <div className="cart-summary">
            <p>Ukupno: {total.toFixed(2)} RSD</p>
            <button className="clear-cart" onClick={clearCart}>
              Očisti sve stavke
            </button>
            <Link to="/checkout" className="checkout-button">
              Potvrdi porudžbinu
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
