

import axios  from "axios";

const isProductions = import.meta.env.MODE === 'productions';

const apiURL = isProductions ? import.meta.env.VITE_API_URL_PRODUCTIONS : import.meta.env.VITE_API_URL_DEVELOPMENT;

const api = axios.create(
    { baseURL : apiURL }
);

export default api;