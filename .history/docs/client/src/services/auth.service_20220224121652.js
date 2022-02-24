import Axios from "axios";

const API_URL = "http://localhost:8080/api/auth/";
const 
class AuthService {
    

    logout() {
        localStorage.removeItem("user");
    }

    register(username,email,password) {
        return Axios.post(API_URL+"signup", {
            username,
            email,
            password
        });
    }

    getCurrentUser() {
        return JSON.parse(localStorage.getItem("user"));
    }
}

export default new AuthService();