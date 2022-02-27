// import http from "../http-common";
// import Axios from "axios";

class CorperDataService {
    create(data) {
        // return Axios.post("http://localhost:8080/api/corpers", data);
        console.log(`Cor${data}`);
    }
}


export default new CorperDataService();