import Axios from "axios";

const API_URL = "http://localhost:3000/api/dashboard/secretarygeneral/";


class NoteDataService {

    create(data) {
        return .post("notes", data);
    }

    getAll() {
        return .get("notes")
    }

    get(id) {
        return .get(`notes/${id}`)
    }

    update(id, data) {
        return .get(`notes/${id}`, data)
    }
}


export default new NoteDataService();