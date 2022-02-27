import http from "../http-common";


class NoteDataService {

    create(data) {
        return http.post("/notes", data);
        
    }

    getAll() {
        return http.get("/notes")
    }

    get(id) {
        re
    }
}


export default new NoteDataService();