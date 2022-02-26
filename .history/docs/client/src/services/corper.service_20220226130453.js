import http from "../http-common";

class CorperService {

    const create = data => {
        return http.post("/corpers", data);
    }
}


export { create };