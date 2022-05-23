import React from "react";
import"../Game/Game.css";

function Landing(){
  return(
    <div>
      <nav class="navbar">
        <div class="container-fluid">
            <a class="navbar-brand m-0 p-0" href="index.html">
                <button class="backButton d-flex justify-content-center align-items-center"> 
                    <p class="text-center"> </p>
                </button>
            </a>
            <img src="../Game/assets/logo.png" alt="" class="d-inline-block" />
            <p class="brandName d-inline-block m-0">ROCK PAPER SCISSORS</p> 
        </div>
    </nav>

    <div class="playerName container-fluid row">
        <div class="player1 col-sm-3 offset-2 text-center">
            <p>PLAYER 1</p>
        </div>
        <div class="col-sm-2"></div>
        <div class="computer col-sm-3 text-center">
            <p>COM</p>
        </div>
    </div>

    <div class="Action container-fluid row">
        <div class="player col-sm-3 offset-2 d-flex flex-column justify-content-sm-around align-items-center">
            <button>
                <img src="../Game/assets/Rock.png" alt="Rock" class="rock"/>
            </button>
            <button>
                <img src="../Game/assets/Paper.png" alt="Paper" class="paper"/>  
            </button>
            <button>
                <img src="../Game/assets/Scissors.png" alt="Scissors" class="scissors"/>
            </button>    
        </div>

        <div class="status col-sm-2 d-flex align-items-center justify-content-center text-center">
            VS
        </div>

        <div class="computer col-sm-3 d-flex flex-column justify-content-sm-around align-items-center">
            <button>
                <img src="../Game/assets/Rock.png" alt="Rock" class="rock"/>
            </button>
            <button>
                <img src="../Game/assets/Paper.png" alt="Paper" class="paper"/> 
            </button>
            <button>
                <img src="../Game/assets/Scissors.png" alt="Scissors" class="scissors"/>
            </button>  
        </div>
    </div>

    <div class="refresh container-fluid row">
        <div class="resetButton col-sm-12 text-center">
            <button>
                <img src="../Game/assets/refresh.png" alt="" />
            </button>
            
        </div>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script>
    <script src="../Game/Game.js"></script>
    </div>
    
  )
}

export default Landing