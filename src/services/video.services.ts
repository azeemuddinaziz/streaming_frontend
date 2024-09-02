import axios from "axios";

const getAllVideos = async (query: String = "") => {
  try {
    const { data } = await axios.get(
      `http://localhost:8000/api/v1/video/results?query=${query}`
    );
    return data.data.docs;
  } catch (error) {
    return error;
  }
};

const getVideoById = async (videoId: String) => {
  try {
    const { data } = await axios.get(
      `http://localhost:8000/api/v1/video/search/${videoId}`
    );
    return data.data.video;
  } catch (error) {
    return error;
  }
};

export { getAllVideos, getVideoById };
