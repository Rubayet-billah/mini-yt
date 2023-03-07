import axiosInstance from "../../utils/axios";

export const fetchVideos = async () => {
  const res = await axiosInstance.get("/videos");
  return res.data;
};
