import React from "react";
import { Link } from "react-router-dom";

function GameDetail() {
  return (
    <div className="home">
      <div class="container">
        <Link to="/GameGuntingKertasBatu">
          <div class="row align-items-center my-5">
            <div class="col-lg-7">
              <img
                class="img-fluid rounded mb-4 mb-lg-0"
                src="https://www.istockphoto.com/id/foto/gunting-kertas-batu-gm547050606-98784627"
                alt=""
              />
            </div>
            <div class="col-lg-5">
              <h1 class="font-weight-light">This is games for kid</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default GameDetail;