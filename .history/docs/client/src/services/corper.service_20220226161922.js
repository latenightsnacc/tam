import http from "../http-common";
import Axios from "axios";

class CorperDataService {
    create(data) {
        return Axios.post("http://localhost:/corpers", data);
    }
}


export default new CorperDataService();