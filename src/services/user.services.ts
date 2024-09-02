import axios from "axios";

const registerUser = async (
  fullname: String,
  username: String,
  email: String,
  password: String,
  avatar: String,
  coverImage: String
) => {
  try {
    const { data } = await axios.post(
      "http://localhost:8000/api/v1/users/register",
      {
        fullname,
        username,
        email,
        password,
        avatar,
        coverImage,
      },
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    return data.statusCode.data;
  } catch (error) {
    return error;
  }
};

const loginUser = async (username: String, password: String) => {
  try {
    const { data } = await axios.post(
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

    return data.data.user;
  } catch (error) {
    //@ts-ignore
    return error.status;
  }
};

export { registerUser, loginUser };
