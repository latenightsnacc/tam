import Axios from 'axios';
import authHeader from '.'


class CorperDataService {

    create(data) {
        return http.post("/corpers", data);
        // console.log(`Corper Data Service: ${data}`);
    }
    
}


export default new CorperDataService();