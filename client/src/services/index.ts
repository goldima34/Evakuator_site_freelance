import axios from "axios";

// створення з`єднання с сервером
const $api = axios.create({
    baseURL: process.env.REACT_APP_API_SERVER,
});

export default $api;