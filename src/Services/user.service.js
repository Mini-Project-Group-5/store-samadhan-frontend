import axios from "axios";

import { GET_USER_URL } from "../Utils/Constants/APIConstants";

export const getUser = async (accessToken) => {
  try {
    const { data } = await axios.get(GET_USER_URL, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return data;
  } catch (err) {
    throw err;
  }
};