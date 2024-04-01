import axios from "axios";

const get = async (url) => {

  const response = await axios.get(url, {
    headers: {
      Accept: "application/json",
    //  "Accept-Encoding": "identity",
      Authorization: `Bearer ${process.env.TOKEN_SECRET}`
    }
  });
  return response.data;
};

export default { get };