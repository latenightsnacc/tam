import http from "../http-common";

class CorperDataService {
    
}
const create = data => {
    return http.post("/corpers", data);
}

export { create };