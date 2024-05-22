import React from "react";
import "./NotificationSubscriptionForm.css";

function NotificationSubscriptionForm() {
  return (
    <section className="signup-section FSN0001-signup-section" id="signup">
      <div className="container FSN0001-container">
        <div className="row justify-content-center align-items-center FSN0001-row">
          <div className="col-md-8 text-center FSN0001-col">
            <i className="far fa-paper-plane fa-5x mb-2 fa-inverse FSN0001-icon"></i>
            <h2 className="text-white mb-5 FSN0001-h2">Suscríbete para recibir novedades</h2>
            {/* Formulario de suscripción */}
            <form id="contactForm" className="FSN0001-form">
              <div className="input-group FSN0001-input-group">
                <input className="form-control FSN0001-form-control" id="emailAddress" type="email" placeholder="Ingresa tu correo electrónico..." aria-label="Ingresa tu correo electrónico..." />
                <button className="btn btn-primary FSN0001-btn text-center" type="submit">¡Suscribirme!</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NotificationSubscriptionForm;
