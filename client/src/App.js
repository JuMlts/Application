import './App.css';
import fond from "./background.png"
import React, { useEffect,useState } from "react"
import Axios from 'axios'
import loadUserInfos from './loadUserInfos';
import Remember from './Components/Remember';
import Email from './Components/Email';
import Password from './Components/Password';
import Connexion from './Components/Connexion';

<title>Application</title>

function App() {

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [confPassword, setConfPassword] = useState("");

  let refreshToken;

  const login = () => {
    Axios.post('http://localhost:3001/login', {
      email: email, 
      password: password
    }).then((response) => {
      console.log("success");
      /*Axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.accessToken}`;
      refreshToken = response.data.refreshToken;
      loadUserInfos(); */
    });
  }

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

              <Email setEmail={setEmail} />

              <Password setPassword={setPassword} />

              <Remember />
          
              <Connexion login={login}/>

            </div>

          </form>

        </div>
      </div>
    </body>
  );
}
export default App;
