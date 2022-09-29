import '../../App.css';
import eye from "../../visON.svg"
import React, { useState } from "react"

function Password({setPassword}) {

    const [visibility, setvisibility] = useState(false); 
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
      };

    return(
        <div className="mdp">
            <label className="label"> </label>
            <div className="input">
                <input className="input-mdp" type={visibility ? "text" : "password" } id="myInput" placeholder="Mot de passe" onChange={handlePasswordChange}/>
                <div className="check-mdp">
                    <div className="btn-check">
                        <div className="eye-check" >
                            <img src={eye} alt="eye" onClick={() => setvisibility(!visibility)}></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Password;