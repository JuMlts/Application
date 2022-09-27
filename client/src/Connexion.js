import './App.css';

function Connexion(props) {
    return(
        <div class="boutons">
            <button class="btn-connexion" type="submit" value="Connexion" onClick={props}>
            <div class="btn-label">
                <span class="btn-connexion-label">Connexion</span>
            </div>
            </button>
        </div>
    )
}

export default Connexion;
