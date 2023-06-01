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
  if (res.status === 200) {
    SuccessToast(res.message);
  } else {
    ErrorToast(res.message);
  }
  return res;
};

export const verifyOtp = async (number, otp) => {
  let res = await ApiCall.post(`user/auth/verify-otp`);
  console.log("Response", res);
  return res;
};
