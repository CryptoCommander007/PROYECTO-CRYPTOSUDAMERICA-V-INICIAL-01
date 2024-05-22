import "./FooterSection.css";
import React from "react";

function FooterSection() {
  return (
    <footer className="footer FPW0002-footer">
      <div className="container">
        <div className="footer-content FPW0002-footer-content">
          <div className="footer-column FPW0002-footer-column">
            <h4>Contacto</h4>
            <p>Email: cryptosamerica@info.com</p>
          </div>

          <div className="footer-column FPW0002-footer-column">
            <h4>Enlaces</h4>
            <ul>
              <li><a href="#">Inicio</a></li>
              <li><a href="#">Noticias</a></li>
              <li><a href="#">Mercados</a></li>
              <li><a href="#">Comprar Criptomonedas</a></li>
              <li><a href="#">Inteligencia Artificial</a></li>
              <li><a href="#">Precios</a></li>
              <li><a href="#">Indices</a></li>
            </ul>
          </div>

          <div className="footer-column FPW0002-footer-column">
            <h4>Información de interés</h4>
            <ul>
              <li><a href="#">Política de Cookies</a></li>
              <li><a href="#">Intercambios de Criptomonedas</a></li>
              <li><a href="#">Proyectos Blockchain</a></li>
              <li><a href="#">Coin Market Cap</a></li>
              <li><a href="#">Coin Gecko</a></li>
            </ul>
          </div>
          
          <div className="footer-column FPW0002-footer-column">
          <h4>Información de interés</h4>
            <ul>
              <li><a href="#">Proyectos Boomslag</a></li>
              <li><a href="#">¿Que es Bitcoin?</a></li>
              <li><a href="#">¿Que es Ethereum?</a></li>
              <li><a href="#">¿Que es Cardano?</a></li>
              <li><a href="#">Inteligencia Artifical</a></li>
            </ul>
          </div>

          <div className="footer-column FPW0002-footer-column">
            <h4>Información Legal</h4>
            <ul>
              <li><a href="#">Política de Cookies</a></li>
              <li><a href="#">Terminos y conodiciones</a></li>
              <li><a href="#">Contacto</a></li>
              <li><a href="#">cryptosudamerica.com</a></li>
            </ul>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12 text-center">
            <div className="FPW0002-footer-text-center">
              <p>&copy; 2024 CRYPTOSUDAMERICA.COM Todos los derechos reservados.</p>
            </div>
          </div>
        </div>  
      </div>
    </footer>
  );
}

export default FooterSection;
