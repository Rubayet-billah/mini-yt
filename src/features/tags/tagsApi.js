import axiosInstance from "../../utils/axios";

export const fetchTags = async () => {
  const res = await axiosInstance.get("/tags");
  return res.data;
};
