import { formInputs } from "@/components/organisms/forms/CreateScrap";
import axios from "axios";

export const postScrap = async (data: formInputs) => {
  const postData = {
    title: data.title,
  };

  const headers = {
    "Content-Type": "application/json",
  };

  try {
    await axios.post(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/scraps`,
      postData,
      {
        headers,
      }
    );
    console.log("POST成功");
  } catch (error) {
    console.error("POSTエラー", error);
    throw error;
  }
};
