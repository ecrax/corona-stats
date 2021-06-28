import axios from "axios";

export const getData = async () => {
  const url: string = "https://disease.sh/v3/covid-19/countries";

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.log(`ERROR received from ${url}: ${error}\n`);
  }
};
