import axios from "axios";

const api = axios.create({
	// baseURL: "http://localhost:3001"
	baseURL: "https://user-list-api-two.vercel.app"
});

export default api;