import axios from "axios";

const createPlaylist = async (name: string, description: string) => {
  try {
    const { data } = await axios.post(
      `http://localhost:8000/api/v1/playlist/create`,
      {
        name,
        description,
      },
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

const getUserPlaylist = async (userId: string) => {
  try {
    const { data } = await axios.get(
      `http://localhost:8000/api/v1/playlist/getUsersPlaylists/${userId}`
    );
    return data.data;
  } catch (error) {
    //@ts-ignore
    return error.status;
  }
};

const getPlaylistById = async (playlistId: string) => {
  try {
    const { data } = await axios.get(
      `http://localhost:8000/api/v1/playlist/getPlaylistById/${playlistId}`
    );
    return data.data;
  } catch (error) {
    //@ts-ignore
    return error.status;
  }
};

const updatePlaylistDetails = async (
  name: string,
  description: string,
  playlistId: string
) => {
  try {
    const { data } = await axios.patch(
      `http://localhost:8000/api/v1/playlist/updatePlaylist/${playlistId}`,
      {
        name,
        description,
      },
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

const removeVideoFromPlaylist = async (playlistId: string, videoId: string) => {
  try {
    const { data } = await axios.patch(
      `http://localhost:8000/api/v1/playlist/removeVideo/${playlistId}/${videoId}`,
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

const addVideoToPlaylist = async (playlistId: string, videoId: string) => {
  try {
    const { data } = await axios.patch(
      `http://localhost:8000/api/v1/playlist/addVideo/${playlistId}/${videoId}`,
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
  createPlaylist,
  getUserPlaylist,
  getPlaylistById,
  updatePlaylistDetails,
  removeVideoFromPlaylist,
  addVideoToPlaylist,
};
