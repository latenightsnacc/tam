import http from "../http-common";


class NoteDataService {

    create(data) {
        return http.post("/notes", data);
        
    }

    getAll() {
        return http.get("/notes")
    }

    get(id) {
        return http.
    }
}


export default new NoteDataService();