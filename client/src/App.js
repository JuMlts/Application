import './App.css';
import fond from "./background.png"
import React, { useEffect,useState } from "react"
import Axios from 'axios'
import loadUserInfos from './loadUserInfos';
import Remember from './Remember';
import Email from './Email';
import Password from './Password';
import Connexion from './Connexion';

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
      Axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.accessToken}`;
      refreshToken = response.data.refreshToken;
      loadUserInfos();
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

              <Email data={handleEmailChange}/>

              <Password data={handlePasswordChange}/>

              <Remember />
          
              <Connexion data={login}/>

            </div>

          </form>

        </div>
      </div>
    </body>
  );
}
export default App;
