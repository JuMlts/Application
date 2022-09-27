import './App.css';
import fond from "./background.png"
import React, { useState } from "react"
import Axios from 'axios'
import loadUserInfos from './loadUserInfos';
import ConnexionForm from './Components/ConnexionForm';

<title>Application</title>

function App() {

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  let refreshToken;

  const login = () => {
    Axios.post('http://localhost:3001/login', {
      email: email, 
      password: password
    }).then((response) => {
      console.log("success");
      Axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.accessToken}`;
      refreshToken = response.data.refreshToken;
      loadUserInfos(); 
    });
  }

  return (
    <body>
      <div class="home-page">
        <div class="menu">

          <form class="formulaire">

            <img src={fond} alt="fond"></img>

            <div class="connexion">

              <ConnexionForm setEmail={setEmail} setPassword={setPassword} login={login} />

            </div>

          </form>

        </div>
      </div>
    </body>
  );
}
export default App;
