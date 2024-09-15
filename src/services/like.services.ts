import axios from "axios";

const toggleLikeVideo = async (videoId: string) => {
  try {
    const { data } = await axios.post(
      `http://localhost:8000/api/v1/like/toggleLikeVideo/${videoId}`,
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

const getLikedVideos = async () => {
  try {
    const { data } = await axios.get(
      `http://localhost:8000/api/v1/like/getLikedVideos/`,
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

export { toggleLikeVideo, getLikedVideos };
