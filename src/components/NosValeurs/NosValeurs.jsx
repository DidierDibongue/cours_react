import React, { useState } from 'react';
import "./NosValeurs.scss";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import { FaChevronDown } from "react-icons/fa6";
import { MdVisibility } from "react-icons/md";
import { FaCarSide } from "react-icons/fa";
import { images } from "../../autres/data";

const NosValeurs = () => {
    const [activeItem, setActiveItem]=useState("un")
    const updateActiveItem = (valeur)=> {
        setActiveItem(valeur);
    };
  return (
    <div className="sous-conteneur-valeurs">
        <div className="grid">
            <div className="gauche">
                <img src={images.home1} alt="" />
            </div>
            <div className="droite">
                <span className="titre">Nos Valeurs</span>
                <h2 className="sous-titre">Ce en quoi nous croyons</h2>
                <p className="desc-valeurs">
                    Nous garantissons un niveau de qualité inégalé,
                    un magnifique et spacieux appartement 
                </p>
                    <div className="liste-valeurs">
                        <div className={activeItem === "un" ? "item active" : "item"}
                        onClick={()=>updateActiveItem("un")}>
                            <div className="head">
                                <IoShieldCheckmarkSharp className="valeur-icon"/>
                                <span>Qualité</span>
                                <FaChevronDown/>
                            </div>
                            <p className="description">
                                Nous garantissons un niveau de qualité inégalé,
                                un magnifique et spacieux appartement
                            </p>
                        </div>
                            <div className={activeItem === "deux" ? "item active" : "item"}
                        onClick={()=>updateActiveItem("deux")}>
                            <div className="head">
                                <MdVisibility className="valeur-icon"/>
                                <span>Visibilité</span>
                                <FaChevronDown/>
                            </div>
                            <p className="description">
                                Nous garantissons un niveau de qualité inégalé,
                                un magnifique et spacieux appartement
                            </p>
                        </div>
                            <div className={activeItem === "trois" ? "item active" : "item"}
                        onClick={()=>updateActiveItem("trois")}>
                            <div className="head">
                                <FaCarSide className="valeur-icon"/>
                                <span>Satisfaction</span>
                                <FaChevronDown/>
                            </div>
                            <p className="description">
                                Nous garantissons un niveau de qualité inégalé,
                                un magnifique et spacieux appartement
                            </p>
                        </div>
                    </div>
            </div>
        </div>
      
    </div>
  );
};

export default NosValeurs;
