import http from "../http-common";

class CorperDataService {
    create(data) {
        return http.post("/corpers", data)
    }
}
const create = data => {
    return http.post("/corpers", data);
}

export { create };