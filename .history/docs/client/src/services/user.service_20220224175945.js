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
getTreasurerDashboard = () => {
        return Axios.get(API_URL+"treasurer", {headers: authHeader() });
    }
getSecretaryGeneralDashboard = () => {
        return Axios.get(API_URL+"secretarygeneral", {headers: authHeader() });
    }
 getPresidentDashboard = () => {
        return Axios.get(API_URL+"president", {headers: authHeader() });
    }
 getCoordinatorDashboard = () => {
        return Axios.get(API_URL+"coordinator", {headers: authHeader() });
    }

}


export default new UserService();