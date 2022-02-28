import Axios from "axios";

const API_URL = "http://localhost:3000/api/dashboard/secretarygeneral/";


class NoteDataService {

    create(data) {
        return http.post("notes", data);
    }

    getAll() {
        return http.get("notes")
    }

    get(id) {
        return http.get(`notes/${id}`)
    }

    update(id, data) {
        return http.get(`/notes/${id}`, data)
    }
}


export default new NoteDataService();