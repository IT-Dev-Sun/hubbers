import axios from "axios"
import { API_BASE_URL } from './constants/defaultValues';


const token = localStorage.getItem('accessToken')

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 60000,
})

api.defaults.headers.common["Authorization"] = token

api.interceptors.response.use(
  response => response,
  error => Promise.reject(error)
)

export async function get(url, config = {}) {
  return await api.get(url, { ...config }).then(response => response.data)
}

export async function post(url, data, config = {}) {
  return await api
    .post(url, { ...data }, { ...config })
    .then(response => response.data)
}

export async function put(url, data, config = {}) {
  return api
    .put(url, { ...data }, { ...config })
    .then(response => response.data)
}

export async function del(url, config = {}) {
  return await api
    .delete(url, { ...config })
    .then(response => response.data)
}

export default api;