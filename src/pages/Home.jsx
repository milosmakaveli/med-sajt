import React from "react";
import { Link } from "react-router-dom";
import clip from '../assets/clip.mp4'
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="content">
        <h2>Otkrijte čist prirodan med</h2>
        <p>
          <strong>
          Dobrodošli u svet pčelarskog gazdinstva Marjanović, gde tradicija duga 50 godina i priroda
          stvaraju čist med, pun ljubavi i kvaliteta. Uživajte u svakom zalogaju.
          </strong>
        </p>
        <Link to="/products" className="shop-button">Kupi sad</Link>
      </div>

      <div className="video-container">
        <video src={clip} autoPlay muted loop/>
      </div>
    </div>
  );
}

export default Home;
