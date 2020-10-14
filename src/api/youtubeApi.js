import axios from 'axios';

const API_KEY = "AIzaSyD_Xg_ziHWWJNdHT8uW2PjrFMKwDZTeIJ8";

const instance = axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {
		part: "snippet",
		key: API_KEY,
	}
});

export default instance;