import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Accueil from "./components/Accueil/Accueil";
import Produits from "./components/Produits/Produits";
import NosValeurs from "./components/NosValeurs/NosValeurs";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
  <div className="app">
  <section className="conteneur-accueil">
    <div className="accueil">
      <Navbar/>
      <Accueil/>
    </div>
  </section>
  <section className="conteneur-produits">
    <div className="produits">
      <Produits/>
    </div>
  </section>
  <section className="conteneur-valeurs">
    <div className="valeurs">
      <NosValeurs />
    </div>
  </section>
  <section className="conteneur-contact">
   <div className="contact">
    <Contact />
   </div> 
  </section>
  <section className="conteneur-footer">
   <div className="footer">
    <Footer />
    </div> 
  </section>
</div>
  );
}

export default App;
