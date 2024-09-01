import axios from "axios";

const getAllVideos = async () => {
  try {
    const response = await axios.get(
      "http://localhost:8000/api/v1/video/results"
    );
    return response.data.data.docs;
  } catch (error) {
    return error;
  }
};

export { getAllVideos };
