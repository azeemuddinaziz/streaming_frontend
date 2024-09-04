import axios from "axios";

const toggleSubscription = async (channelId: string) => {
  try {
    const { data } = await axios.post(
      `http://localhost:8000/api/v1/subscription/subscribe/${channelId}`,
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

const getSubscriptionList = async (userId: string) => {
  try {
    const { data } = await axios.get(
      `http://localhost:8000/api/v1/subscription//channelList/${userId}`
    );
    return data.data;
  } catch (error) {
    //@ts-ignore
    return error.status;
  }
};

export { toggleSubscription, getSubscriptionList };
