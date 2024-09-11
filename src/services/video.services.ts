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

const uploadVideo = async (
  title: string,
  description: string,
  video: string,
  thumbnail: string
) => {
  try {
    const { data } = await axios.post(
      "http://localhost:8000/api/v1/video/publishVideo",
      {
        title,
        description,
        video,
        thumbnail,
      },
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      }
    );
    console.log(data);

    return data.statusCode.data;
  } catch (error) {
    return error;
  }
};

export { getAllVideos, getVideoById, uploadVideo };
