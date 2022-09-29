import '../../App.css';

function Email({setEmail}) {
    
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
      };
    
    return(
        <div className="email">
            <label className="label">  </label>
            <div className="imput">
                <input className="input-email"  placeholder="Adresse email" type="email" onChange={handleEmailChange} />
            </div>
        </div>
    )
}

export default Email;
