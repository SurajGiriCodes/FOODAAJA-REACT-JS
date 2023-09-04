import axios from "axios";

export const CreateOrder = async (order) => {
  try {
    const { data } = axios.post(
      "https://foodaajareactapp.onrender.com/api/orders/create",
      order
    );
    return data;
  } catch (error) {}
};

export const getNewOrderForCurrentUser = async () => {
  const { data } = await axios.get(
    "https://foodaajareactapp.onrender.com/api/orders/newOrderForCurrentUser"
  );
  return data;
};
