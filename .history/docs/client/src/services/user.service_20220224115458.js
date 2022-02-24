import Axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/api/dashboard/";


const getPublicContent = () => {
        return Axios.get(API_URL+"all");
}

const  getMemberDashboard =() => {
        return Axios.get(API_URL+"member", {headers: authHeader() });
    }
const getTreasurerDashboard = () => {
        return Axios.get(API_URL+"treasurer", {headers: authHeader() });
    }
const getSecretaryGeneralDashboard = () => {
        return Axios.get(API_URL+"secretarygeneral", {headers: authHeader() });
    }
const  getPresidentDashboard = () => {
        return Axios.get(API_URL+"president", {headers: authHeader() });
    }
const  getCoordinatorDashboard = () => {
        return Axios.get(API_URL+"coordinator", {headers: authHeader() });
    }


export default {
    getPublicContent,
    get
};