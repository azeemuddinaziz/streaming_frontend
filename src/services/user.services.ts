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

const getCurrentUser = async () => {
  try {
    const { data } = await axios.get(
      "http://localhost:8000/api/v1/users/currentUser",
      {
        withCredentials: true,
      }
    );
    return data.data;
  } catch (error) {
    //@ts-ignore
    return error.status;
  }
};

const getUserByUsername = async (username: string) => {
  try {
    const { data } = await axios.get(
      `http://localhost:8000/api/v1/users/channel/${username}`
    );
    return data.data;
  } catch (error) {
    //@ts-ignore
    return error.status;
  }
};

const getChannelByChannelName = async (channelname: string) => {
  try {
    const { data } = await axios.get(
      `http://localhost:8000/api/v1/users/channel/${channelname}`,
      {
        withCredentials: true,
      }
    );
    return data.data;
  } catch (error) {
    //@ts-ignore
    return error.status;
  }
};

const logOutUser = async () => {
  try {
    const { data } = await axios.post(
      `http://localhost:8000/api/v1/users/logout`,
      {},
      {
        withCredentials: true,
      }
    );
    return data.data;
  } catch (error) {
    //@ts-ignore
    return error.status;
  }
};

export {
  registerUser,
  loginUser,
  getCurrentUser,
  getUserByUsername,
  getChannelByChannelName,
  logOutUser,
};
