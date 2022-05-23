import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";

import "../pages/pages.css";
import List from "./List.js";
import { getInitialData, genNextData } from "./data";

function GamePage() {

  const [data, setData] = useState(getInitialData());
  
  useEffect(() => {
    const timer = setInterval(() => setData(genNextData()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="home">
      <div class="container">
        <Link to="/GameGuntingKertasBatu">
          <div class="kotak">
          <div class="row align-items-center my-5">
            <div class="col-lg-7">
              <img
                class="img-fluid rounded"
                src="https://images.app.goo.gl/efvdk71r7FpVdfiN6"
                alt="ini foto"
              />
            </div>
            <div class="col-lg-5">
              <h1 class="font-weight-light">Gunting Kertas Batu</h1>
              <p class="justify">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
          </div>
        </Link>
      </div>  
      <div class="container">
        <div class="Leaderboard">
          <table align="center">
          <h2>Leaderboard</h2>
          <List data={data} />
          </table>
        </div>
      </div>
    </div>
  );
}

export default GamePage;