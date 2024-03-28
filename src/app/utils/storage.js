import { IS_LOGGED_IN, USER_ID, TOKEN } from "./constant";

export const storeItem = async (key, value)  => {
  try {
    localStorage.setItem(key, value);
  } catch (error) {
      console.error('Error setting item in local storage:', error);
  }
};

export const retrieveItem =  async (key) => {
  try {
      const storedData = localStorage.getItem(key);
      return storedData;
  } catch (error) {
      console.error('Error getting item from local storage:', error);
      return null;
  }
};

export const removeItem =  async (key) => {
  try {
      localStorage.removeItem(key);
  } catch (error) {
      console.error('Error removing item from local storage:', error);
  }
};


export const removeAllStorage = async () => {
  await removeItem(IS_LOGGED_IN);
  await removeItem(USER_ID);
  await removeItem(TOKEN);
}

