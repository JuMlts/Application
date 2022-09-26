import './App.css';
import fond from "./background.png"
import eye from "./visON.svg"
import React, { useEffect,useState } from "react"
import Axios from 'axios'


<title>Application</title>


function App() {

   const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [confPassword, setConfPassword] = useState("");

  const login = () => {
    Axios.post('http://localhost:3001/login', {
      email: email, 
      password: password
    }).then(() => {
      console.log("success");
    });
  }

  // function to update state of email with value

  // enter by user in form

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  // function to update state of password with

  // value enter by user in form

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // function to update state of confirm password

  // with value enter by user in form

  const handleConfPasswordChange = (e) => {
    setConfPassword(e.target.value);
  };

  // below function will be called when user

  // click on submit button .

  return (
    <body>
      <div class="home-page">
        <div class="menu">

          <form class="formulaire">

            <img src={fond} alt="fond"></img>

            <div class="connexion">

              <div class="title">
                <h1 class="title1">Bienvenue,</h1>
                <h2 class="title2">Connectez vous à votre compte</h2>
              </div>

              <div class="email">
                <label class="label">  </label>
                <div class="imput">
                  <input class="input-email"  placeholder="Adresse email" type="email" onChange={handleEmailChange} />
                </div>
              </div>

              <div class="mdp">
                <label class="label"> </label>
                <div class="input">
                  <input class="input-mdp" type="password" id="myInput" placeholder="Mot de passe" onChange={handlePasswordChange}/>
                  
                    <div class="check-mdp">
                      <button class="btn-check">
                        <button class="eye-check">
                          <img src={eye} alt="eye"></img>
                        </button>
                      </button>
                    </div>
                  
                </div>
              </div>

              <div class="remember-me">
                <div class="remember-btn">
                  <input class="btn-remember-me" type="checkbox" id="exampleUniq" />
                </div>
                <label class="rm-label" for="exampleUniq">Se souvenir de moi</label>
              </div>
          
              <div class="boutons">
                <button class="btn-connexion" type="submit" value="Connexion" onClick={login}>
                  <div class="btn-label">
                    <span class="btn-connexion-label">Connexion</span>
                  </div>
                </button>
              </div>

            </div>

          </form>

        </div>
      </div>
    </body>
  );
}
export default App;
