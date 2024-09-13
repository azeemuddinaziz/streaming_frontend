import axios from "axios";

const getTweetsByUserId = async (userId: string) => {
  try {
    const { data } = await axios.get(
      `http://localhost:8000/api/v1/tweet/getUserTweets/${userId}`,
      {
        withCredentials: true,
      }
    );

    return data.data;
  } catch (error) {
    //@ts-ignore
    return error;
  }
};

const createTweet = async (content: string) => {
  try {
    const { data } = await axios.post(
      `http://localhost:8000/api/v1/tweet/create`,
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
    return error;
  }
};

const deleteTweet = async (tweetId: string) => {
  try {
    const { data } = await axios.delete(
      `http://localhost:8000/api/v1/tweet/delete/${tweetId}`,
      {
        withCredentials: true,
      }
    );

    return data.data;
  } catch (error) {
    //@ts-ignore
    return error;
  }
};

const updateTweet = async (content: string, tweetId: string) => {
  console.log(tweetId);
  try {
    const { data } = await axios.patch(
      `http://localhost:8000/api/v1/tweet/update/${tweetId}`,
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
    return error;
  }
};

export { getTweetsByUserId, createTweet, deleteTweet, updateTweet };
