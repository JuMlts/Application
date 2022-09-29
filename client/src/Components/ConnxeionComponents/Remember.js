import '../../App.css';

function Remember()  {
   
        return(
            <div className="remember-me">
                <div className="remember-btn">
                    <input className="btn-remember-me" type="checkbox" id="exampleUniq" />
                 </div>
                <label className="rm-label" htmlFor="exampleUniq">Se souvenir de moi</label>
            </div>
        )
}

export default Remember;



