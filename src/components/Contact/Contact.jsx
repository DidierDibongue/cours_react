import React from "react";
import "./Contact.scss";
import {images} from "../../autres/data";

const Contact = () => {
  return (
    <div className="sous-conteneur-contact">
      <span className="titre">Contact</span>

      <h2 className="sous-titre">
        Envoyez nous un message
      </h2>

      <div className="grid">

        {/* Conteneur gauche : formulaire */}
        <div className="gauche">
          <form>
            <div className="nom">
              <label htmlFor="">Nom</label>
              <input type="text"/>
            </div>
            <div className="email">
              <label htmlFor="">Email</label>
              <input type="email"/>
            </div>
            <div className="message">
              <label htmlFor="">Message</label>
              <textarea rows={5}></textarea>
            </div>

            <button type="submit">Envoyer</button>
          </form>
        </div>

        {/* Conteneur droite : images */}
        <div className="droite">
          <div className="conteneur-images">
            <div className="image-un">
              <img src={images.home3} alt="" />
            </div>
            <img
              src={images.home5}
              alt=""
              className="image-deux"
            />
            <img
              src={images.home6}
              alt=""
              className="image-trois"
            />

          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;

