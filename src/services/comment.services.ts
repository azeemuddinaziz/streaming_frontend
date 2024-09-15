import axios from "axios";

const addCommentToVideo = async (videoId: string, content: string) => {
  try {
    const { data } = await axios.post(
      `http://localhost:8000/api/v1/comment/add/${videoId}`,
      {
        content,
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

const getVideoComments = async (videoId: string) => {
  try {
    const { data } = await axios.get(
      `http://localhost:8000/api/v1/comment/getVideoComments/${videoId}`,
      {
        withCredentials: true,
      }
    );
    return data.data.docs;
  } catch (error) {
    //@ts-ignore
    return error.status;
  }
};

const updateComment = async (commentId: string, content: string) => {
  try {
    const { data } = await axios.patch(
      `http://localhost:8000/api/v1/comment/update/${commentId}`,
      {
        content,
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

const deleteComment = async (commentId: string) => {
  try {
    const { data } = await axios.delete(
      `http://localhost:8000/api/v1/comment/delete/${commentId}`,
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

export { addCommentToVideo, getVideoComments, updateComment, deleteComment };
