import http from "../http-common";


class NoteDataService {

    create(data) {
        return http.post("http://localhost:8080/api/notes", data);
        
    }

    getAll() {
        return http.get
    }
}


export default new NoteDataService();