import axios from "axios";

export interface FetchResponse<T> {
	count: number;
	results: T[];
}

export default axios.create({
	baseURL: "https://api.rawg.io/api",
	params: {
		key: "b22062a9fa144ca1a6d8b23d256ec7f6",
	},
});
