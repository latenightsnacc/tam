import http from "../http-common";


class NoteDataService {

    create(data) {
        return http.post("/notes", data);
        
    }

    getAll() {
        return http.get("/notes")
    }

    get(id, data) {
        return http.get(`/notes/${id}`, data)
    }

    update(id, data) {
        return http.get(`/notes/`)
    }
}


export default new NoteDataService();