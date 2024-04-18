import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL

const axiosInstace = axios.create({
    baseURL: API_URL,
})

export default axiosInstace