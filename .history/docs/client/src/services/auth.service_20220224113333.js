import Axios from "axios";

const API_URL = "http://localhost:8080/api/auth/";

class AuthService {
    login(username, password){
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

    
}