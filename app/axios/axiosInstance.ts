import axios from "axios"
import * as nookies from "nookies"

export const $axiosInstance = axios.create({
	baseURL: process.env.NEXT_PUBLIC_API_URL,
	timeout: 1000,
	withCredentials: true
})

$axiosInstance.interceptors.request.use(config => {
	config.headers.Authorization = "Bearer " + nookies.parseCookies()?.token
	return config
})
