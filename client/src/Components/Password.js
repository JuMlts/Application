import '../App.css';
import eye from "../visON.svg"

function Password({setPassword}) {
    
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
      };

    return(
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
    )
}

export default Password;