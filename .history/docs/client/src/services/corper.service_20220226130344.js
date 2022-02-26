import http from "../http-common";

const CorperService = {
    
}
const create = data => {
    return http.post("/corpers", data);
}

export { create };