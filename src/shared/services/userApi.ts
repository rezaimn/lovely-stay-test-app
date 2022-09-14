import {http} from "./Api";
import {IUserRepository} from "../models/User";

export function getUserListBySearchKeyAPI(url: string, params?: any): Promise<any> {
    return http
        .get(url, {
            params,
        })
        .then((res) => res.data)
        .catch((error) => {
            return Promise.reject(error);
        });
}

export function getUserDetailsAPI(url: string, params?: any): Promise<any> {
    return http
        .get(url, {
            params,
        })
        .then((res) => res.data)
        .catch((error) => {
            return Promise.reject(error);
        });
}


export function getUserRepositoriesAPI(url: string, params?: any): Promise<any> {
    return http
        .get(url, {
            params,
        })
        .then((res) => res.data)
        .catch((error) => {
            return Promise.reject(error);
        });
}