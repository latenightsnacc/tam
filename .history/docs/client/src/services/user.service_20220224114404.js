import Axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/api/dashboard/";

class UserService {
    getPublicContent() {
        return Axios.get(API_URL+"all");
    }

    getMemberDashboard() {
        return Axios.get(API_URL+"member", {headers: authHeader() });
    }
}

export default new UserService();