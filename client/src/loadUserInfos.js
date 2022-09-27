import './App.css';
import Axios from 'axios'

function loadUserInfos() {
    Axios.get('/me').then((response) => {
      console.log(response.data);
    }).catch((err) => {
      console.log(err.response.status);
});
}

export default loadUserInfos;