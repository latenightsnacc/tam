import Axios from "axios";

const API_URL = "http://localhost:8080/api/dashboard/secretarygeneral/";


class NoteDataService {

    create(data) {
        return Axios.post(`${API_URL}notes`, data);
    }

    getAll() {
        return Axios.get(`${API_URL}notes`)
    }

    get(id) {
        return Axios.get(`notes/${id}`)
    }

    update(id, data) {
        return Axios.get(`notes/${id}`, data)
    }
}


export default new NoteDataService();