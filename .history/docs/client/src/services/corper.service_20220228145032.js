import Axios from 'axios';
import authHeader from './auth-header';
const API_URL = 'http://localhost:3000/api/dashboard/';


class CorperDataService {

    getMemberDashboard() {
        return Axios.get(`${API_URL}member`, {headers: authHeader() });
    }
    
    getMemberDashboard() {
        return Axios.get(`${API_URL}member`, {headers: authHeader() });
    }

    // create(data) {
    //     return http.post("/corpers", data);
    //     // console.log(`Corper Data Service: ${data}`);
    // }
    
}


export default new CorperDataService();