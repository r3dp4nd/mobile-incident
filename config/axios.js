import axios from "axios";

const clientAxios = axios.create({
  baseURL: "http://192.168.1.103:4000/api",
});

export default clientAxios;