import Axios from "axios";

const API_URL = "http://localhost:3000/api/dashboard/secretarygeneral/";


class NoteDataService {

    create(data) {
        return Axios.post(``"notes", data);
    }

    getAll() {
        return Axios.get("notes")
    }

    get(id) {
        return Axios.get(`notes/${id}`)
    }

    update(id, data) {
        return Axios.get(`notes/${id}`, data)
    }
}


export default new NoteDataService();