import toast from "react-hot-toast";
import api from "./axios/axios";

export const GetNotifiedApi = async (formData) => {
  try {
    const result = await api.post("/get-notified", formData);

    toast.success(result.data.message);

    return result.data;

  } catch (error) {
    console.log("Error sending message:", error);

    const errorMessage = error.response?.data?.message;

    toast.error(errorMessage);

    throw error.response?.data;
  }
};