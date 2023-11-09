import axios from "axios";

export const httpService = axios.create({
    baseURL: 'https://63b7a42f4f17e3a931d89449.mockapi.io/api/v1'
})