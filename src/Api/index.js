import axios from "axios";

const baseUrl = "https://chat-api.cyclic.app/api/";
export const sendOTP = async (number) => {
  let res = await axios.post(baseUrl);
  console.log("Response", res);
};
