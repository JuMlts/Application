import '../App.css';
import Remember from './ConnxeionComponents/Remember';
import Email from './ConnxeionComponents/Email';
import Password from './ConnxeionComponents/Password';
import Connexion from './ConnxeionComponents/Connexion';
import HeaderLogin from './ConnxeionComponents/HeaderLogin';

function ConnexionForm({setEmail, setPassword, login}) {

    return(
        <>
            <HeaderLogin />
              
            <Email setEmail={setEmail} />

            <Password setPassword={setPassword} />

            <Remember />
          
            <Connexion login={login}/>
        </>
    )
}

export default ConnexionForm;