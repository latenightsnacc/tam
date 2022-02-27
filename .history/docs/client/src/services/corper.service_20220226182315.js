import http from "../http-common";


class CorperDataService {
    create(data) {
        return http.post("http://localhost:8080/api/corpers", data);
        // console.log(`Corper Data Service: ${data}`);
    }
}


export default new CorperDataService();