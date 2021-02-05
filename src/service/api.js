import axios from 'axios';

const axiosCall = axios.create({
  baseURL: "https://fakerapi.it/api/v1/",
  headers: {
    Accept: "application/json",
  }
})

export default axiosCall;


