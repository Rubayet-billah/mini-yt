import axiosInstance from "../../utils/axios";

const getQueryString = (id, tags) =>
  tags?.map((tag) => `tags_like=${tag}`).join("&") + `&ne=${id}&limit=${5}`;

export const fetchRelatedVideos = async ({ id, tags }) => {
  const res = await axiosInstance.get(`/videos?${getQueryString(id, tags)}`);
  return res.data;
};
