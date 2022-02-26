import http from "../http-common";

e{

    const create = data => {
        return http.post("/corpers", data);
    }
}


export { create };