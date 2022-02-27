import http from "../http-common";
import Axios from "axios";

class CorperDataService {
    create(data) {
        return Axios.post("/corpers", data);
    }
}


export default new CorperDataService();