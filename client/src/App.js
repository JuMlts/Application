import './App.css';
import fond from "./background.png"
import React, { useState, useEffect } from "react"
import Axios from 'axios'
import loadUserInfos from './loadUserInfos';
import ConnexionForm from './Components/ConnexionForm';

<title>Application</title>

function App() {

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  let refreshToken;
  const login = async () => {
    try {
          const response = await Axios.post('http://localhost:3001/login', {
            email: email, 
            password: password
          })
          if (response.status === 200){
            Axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.accessToken}`;
            refreshToken = response.data.refreshToken;
            loadUserInfos(); 
            alert.show("CONNECTE ! ");
          }            
    }
    catch (error) {
      alert.show("identifiants incorrects");
    }    
  };

  

  return (
      <div className="home-page">
        <div className="menu">

          <form className="formulaire">

            <img src={fond} alt="fond"></img>

            <div className="connexion">

              <ConnexionForm setEmail={setEmail} setPassword={setPassword} login={login} />

            </div>
          </form>
        </div>
      </div>
  );
}
export default App;
