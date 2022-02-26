import http from "../http-common";

module.exports ={
    const create = data => {
        return http.post("/corpers", data);
    }
}


export { create };