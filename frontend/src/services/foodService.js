import axios from "axios";

export const getAll = async () => {
  const { data } = await axios.get(
    "https://foodaajareactapp.onrender.com/api/foods"
  );
  return data;
};

export const search = async (searchTerm) => {
  const { data } = await axios.get(
    "https://foodaajareactapp.onrender.com/api/foods/search/" + searchTerm
  );
  return data;
};

export const getById = async (foodId) => {
  const { data } = await axios.get(
    "https://foodaajareactapp.onrender.com/api/foods/" + foodId
  );
  return data;
};
