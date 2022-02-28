import http from "../http-common";


class CorperDataService {

    create(data) {
        return http.post("/corpers", data);
        // console.log(`Corper Data Service: ${data}`);
    }
    c
}


export default new CorperDataService();