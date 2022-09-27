import './App.css';

function Email(props) {
    return(
        <div class="email">
            <label class="label">  </label>
            <div class="imput">
                <input class="input-email"  placeholder="Adresse email" type="email" onChange={props} />
            </div>
        </div>
    )
}

export default Email;
