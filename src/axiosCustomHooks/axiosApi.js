import axios from "axios";

/* eslint-disable no-unused-vars */
const API_KEY = import.meta.env.VITE_CAT_API_KEY;
const API_URL = import.meta.env.VITE_CAT_API_URL;
export const axiosCatApi = axios.create({
	baseURL: API_URL,
	headers: {
		"x-api-key": API_KEY,
	},
});

axiosCatApi.get();
