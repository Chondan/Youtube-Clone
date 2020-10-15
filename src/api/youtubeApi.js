import axios from 'axios';

const API_KEY = "";

const instance = axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {
		part: "snippet",
		key: API_KEY,
	}
});

export default instance;
