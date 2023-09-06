import axios from "axios";

const Api = axios.create({
    // Base url of server side rest apis
    baseURL: 'http://localhost:8001/api/',
    headers: {
        'Accept': 'application/json'
    }
});

export default Api;