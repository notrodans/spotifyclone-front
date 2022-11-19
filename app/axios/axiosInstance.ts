import axios from "axios"
import * as nookies from "nookies"

export const API_URL = "http://localhost:5050/api"

export const $axiosInstance = axios.create({
	baseURL: API_URL,
	timeout: 1000,
	withCredentials: true
})

$axiosInstance.interceptors.request.use(config => {
	if (typeof window !== "undefined") {
		config.headers.Authorization = "Bearer " + nookies.parseCookies()?.token
	}
	return config
})
