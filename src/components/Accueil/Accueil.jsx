import React, { useEffect, useState } from 'react';
import "./Accueil.scss";
import { FaLocationDot } from "react-icons/fa6";
import { images } from "../../autres/data.js";
import { motion, useMotionValue, animate } from "framer-motion";

const Counter = ({ value }) => {
  const count = useMotionValue(0);
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const animation = animate(count, value, {
      duration: 10
    });

    const unsubscribe = count.on("change", (latest) => {
      setDisplayValue(Math.round(latest));
    });

    return () => {
      animation.stop();
      unsubscribe();
    };
  }, [count, value]);

  return <strong>{displayValue}</strong>;
};

const Accueil = () => {

  return ( 
    <div className="accueil-grid">

      <div className="info">

        <h1>Découvrez la résidence de vos rêves</h1>

        <p>
          Trouvez une résidence n'a jamais été un tel plaisir, 
          naviguez au travers des meilleures résidences du pays.
        </p>

        <div className="conteneur-recherche">
          <input type="text" />
          <FaLocationDot className="icon"/>
          <span className="btn">Chercher</span> 
        </div>

        <div className="achievements">

          <div className="item">
            <h3>
              <span>+</span>
              <Counter value={9000} />
            </h3>
            <span>Résidences</span>
          </div>

          <div className="item">
            <h3>
              <span>+</span>
              <Counter value={3150} />
            </h3>
            <span>Clients satisfaits</span>
          </div>

          <div className="item">
            <h3>
              <span>+</span>
              <Counter value={421} />
            </h3>
            <span>Partenaires</span>
          </div>

        </div>
      </div>

      <div className="conteneur-image">
        <img src={images.home3} alt="" />
      </div>

    </div>
  );  
};

export default Accueil;


