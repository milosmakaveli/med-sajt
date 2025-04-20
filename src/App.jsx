import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Checkout from './pages/Checkout';



function App() {
  // Load from localStorage on initial render
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const [message, setMessage] = useState(""); // State for storing the success message

  // Save to localStorage whenever cart changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart([...cart, product]);
    setMessage(`${product.name} uspešno dodat u korpu!`); 
    setTimeout(() => setMessage(""), 3000); 
  };

  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  const clearCart = () => {
    setCart([]);
  };


  return (
    <BrowserRouter basename='/med-sajt'>
    <Header />
    <main className="main-content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} clearCart={clearCart} />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/checkout" element={<Checkout cart={cart} />} />
      </Routes>
    </main>
    <Footer />
    {message && <div className="success-message">{message}</div>}
  </BrowserRouter>
  )
}

export default App
