import toast from "react-hot-toast"
import api from "./axios/axios"

export const readyToJoinApi = async (formData) => {
    try {
        const result = await api.post("/ready-to-join", formData)
        toast.success(result.data.message)
        return result.data
    } catch (error) {
        const errorMessage = error.response?.data?.message

        toast.error(errorMessage)
        throw error.response.data
    }
}