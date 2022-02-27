import http from "../http-common";

class CorperDataService {
    create
}
const create = data => {
    return http.post("/corpers", data);
}

export { create };