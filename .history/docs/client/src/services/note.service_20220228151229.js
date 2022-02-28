import Axios from "axios";

const API_URL = "http://localhost:3000/api/dashboard/secretarygeneral/";


class NoteDataService {

    create(data) {
        return A.post("notes", data);
    }

    getAll() {
        return A.get("notes")
    }

    get(id) {
        return A.get(`notes/${id}`)
    }

    update(id, data) {
        return A.get(`notes/${id}`, data)
    }
}


export default new NoteDataService();