import Axios from "axios";

const axios = Axios.create({
  baseURL: 'https://shychatapp.herokuapp.com', withCredentials: true,
});
const http = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  patch: axios.patch,
};

export default http;
