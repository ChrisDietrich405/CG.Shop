import axios from "axios"

export const api = axios.create({
    baseURL: "http://localhost:8000" //localhost 8000 simulates a backend server
// and it's not considered an endpoint, but it is considered an api host

})