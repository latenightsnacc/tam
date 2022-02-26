import http from "../http-common";

const create = data => {
    return http.post("/corpers", data);
}

export default {create};