import axios from "axios";

const getAllVideos = async (query: String) => {
  try {
    const response = await axios.get(
      `http://localhost:8000/api/v1/video/results?query=${query}`
    );
    return response.data.data.docs;
  } catch (error) {
    return error;
  }
};

const getVideoById = async (videoId: String) => {
  try {
    const response = await axios.get(
      `http://localhost:8000/api/v1/video/search/${videoId}`
    );
    return response.data.data.video;
  } catch (error) {
    return error;
  }
};

export { getAllVideos, getVideoById };
