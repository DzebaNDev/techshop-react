import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";

function Header() {
  return (
    <header className="header">
      <div className="logo">TechStore</div>
      <nav className="nav">
        <Link to="/">Головна</Link>
        <Link to="/catalog">Каталог</Link>
        <Link to="/cart">Кошик</Link>
      </nav>
    </header>
  );
}

export default Header;
