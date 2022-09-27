import '../../App.css';
import eye from "../../visON.svg"
import React, { useState } from "react"

function Password({setPassword}) {

    const [visibility, setvisibility] = useState(false); 
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
      };

    return(
        <div class="mdp">
            <label class="label"> </label>
            <div class="input">
                <input class="input-mdp" type={visibility ? "text" : "password" } id="myInput" placeholder="Mot de passe" onChange={handlePasswordChange}/>
                <div class="check-mdp">
                    <div class="btn-check">
                        <div class="eye-check" >
                            <img src={eye} alt="eye" onClick={() => setvisibility(!visibility)}></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Password;