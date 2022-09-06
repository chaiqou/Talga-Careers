import axiosInstance from "@/config/axios";

const getJobs = async () => {
  const response = await axiosInstance.get("api/jobs");
  return response.data.data;
};

export default getJobs;
