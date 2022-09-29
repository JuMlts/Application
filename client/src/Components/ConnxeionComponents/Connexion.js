import '../../App.css';

function Connexion({login}) {
    return(
        <div className="boutons">
            <button className="btn-connexion" type="submit" value="Connexion" onClick={() => login()}>
            <div className="btn-label">
                <span className="btn-connexion-label">Connexion</span>
            </div>
            </button>
        </div>
    )
}

export default Connexion;
