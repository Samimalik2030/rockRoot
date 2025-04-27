import { Notifications } from "@mantine/notifications";
import api from "../api";

export default  async function handleImageUpload(file: File) {
    try {
      const formData = new FormData();
      formData.append("image", file);

      const response = await api.post("/images", formData, {
        headers: {
          Accept: "application/json",
          "Content-Type": "multipart/form-data",
        },
      });

    return response.data
    } catch (error) {
      Notifications.show({
        message: "Error in uploading image",
        color: "red",
      });
    }
  }