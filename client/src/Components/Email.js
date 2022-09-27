import '../App.css';

function Email({setEmail}) {
    
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
      };
    
    return(
        <div class="email">
            <label class="label">  </label>
            <div class="imput">
                <input class="input-email"  placeholder="Adresse email" type="email" onChange={handleEmailChange} />
            </div>
        </div>
    )
}

export default Email;
