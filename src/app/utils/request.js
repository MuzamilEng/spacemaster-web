import Api from "../api";
import { USER_ID, TOKEN } from "./constant";

export async function getRequest(endpoint) {
	try {
		await generateNewToken();
		const res = await Api.get(endpoint);
		return res;
	} catch (error) {
		return { status: error.status };
	}
}

export async function postRequest(endpoint, params) {
	try {
		await generateNewToken();
		const res = await Api.post(endpoint, params);
		return res;
	} catch (error) {
		return error.response;
	}
}

export async function putRequest(endpoint, params) {
	try {
		await generateNewToken();
		const res = await Api.put(endpoint, params);
		return res;
	} catch (error) {
		return { status: error.status };
	}
}

export async function generateNewToken () {
	try {
		const id = localStorage.getItem(USER_ID);
		const token = localStorage.getItem(TOKEN);
		if (token) {
			const requestBody = { id };
			const response = await Api.put("/auth/token", requestBody); 
			if (response.status === 200) {
				localStorage.setItem("token", response.data.token);
			}
		}
	} catch (error) {
		throw new Error("Error! generate new token");
	}
	return;
}