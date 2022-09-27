import '../App.css';

function Connexion({login}) {
    return(
        <div class="boutons">
            <button class="btn-connexion" type="submit" value="Connexion" onClick={() => login()}>
            <div class="btn-label">
                <span class="btn-connexion-label">Connexion</span>
            </div>
            </button>
        </div>
    )
}

export default Connexion;
