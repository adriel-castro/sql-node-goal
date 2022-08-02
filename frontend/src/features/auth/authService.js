import axios from "axios";

// const url = "http://localhost:7000";
// const API_URL = `${url}/api/users/`;
const API_URL = `/api/users/`;

// Register user
const register = async (userData) => {
  const response = await axios.post(API_URL, userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

const authService = {
  register,
};

export default authService;
