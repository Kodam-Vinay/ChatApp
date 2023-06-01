import axios from "axios";
import { ErrorToast, SuccessToast } from "../components/Toast";

const baseUrl = "https://chat-api.cyclic.app/api/";

export const ApiCall = axios.create({
  baseURL: baseUrl,
  timeout: 10000,
  validateStatus: (status) => status < 500,
  headers: { "Content-Type": "application/json" },
});

export const sendOTP = async (number) => {
  let res = await ApiCall.post(`/user/auth`, { number });
  console.log("Response", res);
  const { data } = res;
  if (data.status == 200) {
    SuccessToast(data.message);
  } else {
    ErrorToast(data.message);
  }
  return data;
};

export const verifyOtp = async (number, otp) => {
  let res = await ApiCall.post(`user/auth/verify-otp`, { number, otp });
  const { data } = res;
  if (data.status == 200) {
    SuccessToast(data.message);
  } else {
    ErrorToast(data.message);
  }
  return data;
};
