import axiosInstance from "../../utils/axios";

export const fetchVideo = async (id) => {
  const res = await axiosInstance.get(`/videos/${id}`);
  return res.data;
};
