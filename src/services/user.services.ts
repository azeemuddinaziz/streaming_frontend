import axios from "axios";

const loginUser = async (username: String, password: String) => {
  try {
    const response = await axios.post(
      "http://localhost:8000/api/v1/users/login",
      {
        username,
        password,
      },
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        withCredentials: true,
      }
    );
    return response.data.data.user;
  } catch (error) {
    return error;
  }
};

export { loginUser };
