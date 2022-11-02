import axios from "axios"

export const API_URL = "http://localhost:5050/api"

export const $axiosInstance = axios.create({
	baseURL: API_URL,
	timeout: 1000
})

$axiosInstance.interceptors.request.use(config => {
	config.headers.Authorization = "Bearer " + localStorage.getItem("token")
	return config
})
