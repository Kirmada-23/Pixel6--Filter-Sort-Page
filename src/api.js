import axios from "axios";

const API_URL = "https://dummyjson.com/users";

export const fetchUsers = async (limit, skip) => {
  try {
    const response = await axios.get(API_URL, {
      params: {
        limit,
        skip,
      },
    });

    return response.data;
  } catch (err) {
    console.log("Error fetching Users: ", err);
    throw err; // Rethrow the error to handle it in the calling function
  }
};
