import React from 'react';
import './HomepageCover.css';

function HomepageCover() {
  return (
    <section className="container-fluid SDP0001-container-fluid">
      <div className="SDP0001-flex-container">
        {/* ***************************** IMAGEN PORTADA ******************************************************* */}
        <div className="col-lg-8 SDP0001-item">
          <a href="#">
            <div className="card mb-4 SDP0001-card">
              <div className="position-relative">
                <img src="https://via.placeholder.com/1280x720" className="card-img-top SDP0001-card-img-top" alt="Imagen de referencia" />
                <div className="card-category SDP0001-card-category">Noticias</div>
              </div>
              <div className="card-body SDP0001-card-body">
                <h5 className="card-title SDP0001-card-title">Título de la Noticia</h5>
                <p className="card-text SDP0001-card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat vel nisi id commodo. Fusce sed urna et est ultricies fringilla.</p>
                <a href="#" className="btn btn-primary SDP0001-btn-primary">Leer más</a>
              </div>
            </div>
          </a>
        </div>
        <div className="col-lg-4 SDP0001-item">
          {/* ***************************** CARRUSEL 1 ******************************************************* */}
          <div className="carousel-container SDP0001-carousel-container">
            <div id="carouselExampleControls1" className="carousel slide mb-4 SDP0001-carousel" data-ride="carousel" data-interval="6200" data-pause="hover">
              <div className="carousel-inner SDP0001-carousel-inner">
                <div className="carousel-item active">
                  <a href="#"><img src="https://via.placeholder.com/1280x720" className="d-block w-100" alt="Publicidad 1" /></a>
                </div>
                <div className="carousel-item">
                  <a href="#"><img src="https://via.placeholder.com/1281x720" className="d-block w-100" alt="Publicidad 2" /></a>
                </div>
                <div className="carousel-item">
                  <a href="#"><img src="https://via.placeholder.com/1281x722" className="d-block w-100" alt="Publicidad 3" /></a>
                </div>
                <div className="carousel-item">
                  <a href="#"><img src="https://via.placeholder.com/1281x723" className="d-block w-100" alt="Publicidad 4" /></a>
                </div>
                <div className="carousel-item">
                  <a href="#"><img src="https://via.placeholder.com/1281x724" className="d-block w-100" alt="Publicidad 5" /></a>
                </div>
              </div>
            </div>
          </div>
          {/* ***************************** CARRUSEL 2 ******************************************************* */}
          <div className="carousel-container SDP0001-carousel-container">
            <div id="carouselExampleControls2" className="carousel slide SDP0001-carousel" data-ride="carousel" data-interval="4200" data-pause="hover">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <a href="#"><img src="https://via.placeholder.com/1281x721" className="d-block w-100" alt="Publicidad 6" /></a>
                </div>
                <div className="carousel-item">
                  <a href="#"><img src="https://via.placeholder.com/1281x722" className="d-block w-100" alt="Publicidad 7" /></a>
                </div>
                <div className="carousel-item">
                  <a href="#"><img src="https://via.placeholder.com/1281x722" className="d-block w-100" alt="Publicidad 8" /></a>
                </div>
                <div className="carousel-item">
                  <a href="#"><img src="https://via.placeholder.com/1281x722" className="d-block w-100" alt="Publicidad 9" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomepageCover;
