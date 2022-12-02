import React from 'react';
import { Hero } from '../components';
import backImage from '../assets/image/Contact-hero.png';
import useTitle from '../useTitle';

const ContactScreen = () => {
  useTitle('Contattaci');
  return (
    <>
      <Hero img={backImage} disableOverlay>
        <div className="contact-hero container">
          <div className="contact-hero-text">
            <div className="contact-hero-title">
              <h2 className="contact-title">
                Vorresti Aggiungere un Cocktail?
              </h2>
              <h4 className="contact-subtitle">
                Il nostro team è sempre disponibile per valutere
                ricette ed aggiungerle al nostro database.
              </h4>
            </div>
          </div>
          <div className="contact-form-container container">
            <form className="contact-form container">
              <div className="form-group">
                <label htmlFor="nome">Nome</label>
                <input
                  type="text"
                  id="nome"
                  name="name"
                  className="input"
                  placeholder="Daniele"
                />
                <hr />
              </div>
              <div className="form-group">
                <label htmlFor="cognome">Cognome</label>
                <input
                  type="text"
                  id="cognome"
                  name="cogname"
                  className="input"
                  placeholder="Tamarillo"
                />
                <hr />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="input"
                  placeholder="daniele@esempio.com"
                />
                <hr />
              </div>
              <div className="form-group">
                <label htmlFor="cellulare">Telefono</label>
                <input
                  type="cel"
                  id="cellulare"
                  name="cellulare"
                  className="input"
                  placeholder="555 555-5555"
                />
                <hr />
              </div>
              <div className="form-group">
                <label htmlFor="ricetta">La tua ricetta</label>
                <input
                  type="text"
                  id="ricetta"
                  name="ricetta"
                  className="input"
                  placeholder="Descrivi la tua ricetta"
                />
                <hr />
              </div>
              <button className="btn btn-primary">
                Invia Ricetta
              </button>
            </form>
          </div>
        </div>
      </Hero>
    </>
  );
};

export default ContactScreen;
