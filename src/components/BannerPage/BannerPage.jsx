import React from 'react';
import './BannerPage.css';
import img1 from './img1.png';
import img2 from './img2.png';
import img3 from './img3.png';
import img4 from './img4.png';
import img5 from './img5.png';

function BannerPage() {
  return (
    <div className="banner-container">
      <div className="carrusel">
        <div className="slide">
          <img src={img1} alt="Imagen 1" />
        </div>
        <div className="slide">
          <img src={img2} alt="Imagen 2" />
        </div>
        <div className="slide">
          <img src={img3} alt="Imagen 3" />
        </div>
        <div className="slide">
          <img src={img4} alt="Imagen 4" />
        </div>
        <div className="slide">
          <img src={img5} alt="Imagen 5" />
        </div>
      </div>
    </div>
  );
}

export default BannerPage;
