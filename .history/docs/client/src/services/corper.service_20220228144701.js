import Axios from 'axios';
import authHeader from './auth-header';
const API_URL = 'http://localhost:'


class CorperDataService {

    create(data) {
        return http.post("/corpers", data);
        // console.log(`Corper Data Service: ${data}`);
    }
    
}


export default new CorperDataService();