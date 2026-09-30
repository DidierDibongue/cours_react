import React from "react";
import "./Produits.scss";
import { images } from "../../autres/data.js";

const produits = [
{
image: images.home4,
nom: "Rize de Sana",
prix: 1000,
},
{
image: images.home5,
nom: "Villa moderne",
prix: 1500,
},
{
image: images.home6,
nom: "Appartement luxe",
prix: 2000,
},
{
image: images.home7,
nom: "Résidence premium",
prix: 2500,
},
{
image: images.home8,
nom: "Maison familiale",
prix: 1800,
},
];

function CarteArticle({ produit }) {
return ( <div className="carte-article"> <img src={produit.image} alt={produit.nom} />

```
  <div className="details">
    <span className="prix">
      <span>$</span>
      {produit.prix}
    </span>

    <h4 className="nom">
      {produit.nom}
    </h4>

    <p className="desc">
      Un magnifique et spacieux appartement
      pour vous et votre famille
    </p>
  </div>
</div>


);
}

function Produits() {
return ( <div className="sous-conteneur-produits">


  <span className="titre">
    Les meilleures offres
  </span>

  <h2 className="sous-titre">
    Résidences les plus populaires
  </h2>

  <div className="conteneur-slide">

    <div className="suivi-slide">

      {/* Première série */}
      {produits.map((produit, index) => (
        <CarteArticle
          key={index}
          produit={produit}
        />
      ))}

      {/* Deuxième série pour créer le défilement infini */}
      {produits.map((produit, index) => (
        <CarteArticle
          key={`duplicate-${index}`}
          produit={produit}
        />
      ))}

    </div>

  </div>
</div>

);
}

export default Produits;
