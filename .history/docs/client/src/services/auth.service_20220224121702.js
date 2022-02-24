import Axios from "axios";

const API_URL = "http://localhost:8080/api/auth/";
const login = (username, password) =>{
    return Axios
    .post(API_URL+"signin", {
        username,
        password
    })
    .then(response => {
        if (response.data.accessToken) {
            localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response.data;
    });
}
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