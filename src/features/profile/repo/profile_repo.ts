import axiosInstance from "@/api/axios_instance";
import { Profile } from "../models/profile";

interface GetProfileReturn {
  data?: Profile;
  error?: string;
}

export async function getProfile(): Promise<GetProfileReturn> {
  return await axiosInstance
    .get(`/v1/users/profile`)
    .then(function (response) {
      return { data: response.data };
    })
    .catch((error) => {
      if (error.response) {
        return { error: error.response.data };
      }
      return { error: "Something went wrong" };
    });
}
