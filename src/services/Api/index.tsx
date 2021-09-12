import axios from "axios";

const api = axios.create({
  baseURL: 'http://192.168.0.105:7000'
});
console.log('API ==>', api);

export default api;