import axios from "axios";

export const getData = async (url: string) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.log(`ERROR received from ${url}: ${error}\n`);
  }
};
