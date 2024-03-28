import React from 'react';
import { USER_ID, IS_LOGGED_IN } from "./constant";
import { Navigate } from 'react-router-dom';

export function areAllFieldsComplete(params) {
	for (const key in params) {
		if (!params[key]) {
			return false;
		}
	}
	return true;
}

export function checkUserIsLoggedIn () {
	const isLoggedIn = localStorage.getItem(IS_LOGGED_IN);
	return isLoggedIn;
}

export function retrieveUserId () {
	const userId = localStorage.getItem(USER_ID);
	return userId;
}

export function capitalizeFirstLetter (string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}

export const handleAuthentication = (element, type="public") => {
	const isLoggedIn = checkUserIsLoggedIn();
	if (type == "private") {
		return isLoggedIn ? element : <Navigate to={"/"} />;

	} else if (type == "guest") {
		return isLoggedIn ? <Navigate to={"/home"} /> : element;
		
	} else {
		return element;
	}
}


export const generateRandomString = (length = 5) => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters.charAt(randomIndex);
  }
  return result;
}