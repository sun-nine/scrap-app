import axios from "axios";

export const moveDownScrapThreadItem = async (
  scrapId: string,
  scrapThreadItemId: string
) => {
  const postData = {
    moveDirection: "down",
  };

  const headers = {
    "Content-Type": "application/json",
  };

  try {
    await axios.put(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/scraps/${scrapId}/items/${scrapThreadItemId}/move`,
      postData,
      {
        headers,
      }
    );
    console.log("PUT成功");
  } catch (error) {
    console.error("PUTエラー", error);
    throw error;
  }
};
