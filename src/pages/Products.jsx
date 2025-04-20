import React from "react";
import products from "../data/products";
import ProductCard from "../components/ProductCard";
import "./Products.css";  // Importing the CSS for the Products page

function Products({ addToCart }) {
  return (
    <div className="products-page">
      <h2 className="products-title">Proizvodi u ponudi</h2>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>
    </div>
  );
}

export default Products;
