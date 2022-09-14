import Axios from 'axios';
import {env} from "../../env";


export const http = Axios.create({
    baseURL: env.apiGateway.URL,
    headers: {Authorization: env.apiGateway.Token},
});


http.interceptors.request.use(
    function (config) {
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);
// Add a response interceptor
http.interceptors.response.use(function (response) {
    return response;
}, async function (error) {
    return Promise.reject(error);
});
