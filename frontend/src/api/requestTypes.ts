import axios from "axios";

const BACKEND_ENDPOINT = process.env.REACT_APP_BACKEND_ENDPOINT;

const instance = axios.create({
    baseURL: BACKEND_ENDPOINT,
    timeout: 5000,
});

const postRequest = (url: string, data = {}) => {
    return instance.post(url, data);
};

const getRequest = (url: string, params = {}) => {
    return instance.get(url, { params });
};
  
const patchRequest = (url: string, data = {}) => {
    return instance.patch(url, data);
};
  
const deleteRequest = (url: string, params = {}) => {
    return instance.delete(url, { params });
};


export const RequestTypes = {
    postRequest,
    getRequest,
    patchRequest,
    deleteRequest,
}
