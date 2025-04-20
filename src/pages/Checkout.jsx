import React, { useState } from "react";
import "./Checkout.css";

function Checkout({ cart }) {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Order placed successfully!\nTotal: RSD${total.toFixed(2)}`);
  };

  return (
    <div className="checkout-page">
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit} className="checkout-form">
        <label>
          Ime i Prezime:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label>
          Adresa:
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <div className="order-summary">
          <p>Total: RSD: {total.toFixed(2)}</p>
        </div>
        <button type="submit" className="submit-button">Izvrši Porudzbinu</button>
      </form>
    </div>
  );
}

export default Checkout;
