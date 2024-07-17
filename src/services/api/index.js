import axios from "axios";
import { get } from "lodash";
import storage from "../storage";
import config from "../../config";

const request = axios.create({
    baseURL: config.API_ROOT,
    params: {},
});

request.interceptors.request.use(
    (config) => {
        const token = get(JSON.parse(storage.get("settings")), "state.token", null);
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        console.log(error)
    }
);

request.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export { request };
