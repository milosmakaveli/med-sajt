import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Pčelarsko gazdinstvo Marjanović.</p>
    </footer>
  );
}

export default Footer;
