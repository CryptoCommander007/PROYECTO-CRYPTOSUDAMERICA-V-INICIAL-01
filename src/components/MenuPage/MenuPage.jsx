import "./MenuPage.css";
import React, { useState } from "react";

function MenuPage() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="menu-page">
      <header>
        <h6 id="namePage">CRYPTOSUDAMERICA.COM</h6>
        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>
      </header>
      <nav className={`menu ${isOpen ? "open" : ""}`}>
        <ul>
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Noticias</a></li>
          <li><a href="#">Mercado</a></li>
          <li><a href="#">Criptomonedas</a></li>
          <li><a href="#">Comprar Criptomonedas</a></li>
          <li><a href="#">Precios</a></li>
          <li><a href="#">Indices</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default MenuPage;
