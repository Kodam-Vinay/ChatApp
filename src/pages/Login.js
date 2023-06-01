import BackgroundChatImage from "../components/svgs/BackgroundChatImage";
import CountryCodeImage from "../components/svgs/CountryCodeImage";
import Button from "../components/Button";
import "../css/Login.css";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Toast, { Success } from "../components/Toast";
import { sendOTP } from "../Api";

const Login = () => {
  const [user, setUser] = useState({ number: "", checked: false });
  const [loading, setLoading] = useState(false);
  const numberChange = (phone) => {
    console.log({ phone });
    setUser((prev) => ({ ...prev, number: phone }));
  };
  const checkedChange = () => {
    setUser((prev) => ({ ...prev, checked: !user.checked }));
  };
  const loginFn = async () => {
    if (user.number && user.checked) {
      //   Success();
      let Response = await sendOTP(user.number);
      console.log({ Response });
    }
  };
  return (
    <div className="login-bg-container">
      <h1 className="heading"> --Chat App--</h1>
      <BackgroundChatImage className="background-chat-image" />
      <div className="login-container">
        <PhoneInput
          country={"in"}
          value={user.phone}
          onChange={numberChange}
          onlyCountries={["in"]}
          disableCountryCode={true}
          containerClass="container-class"
        />
      </div>
      <div className="checkbox-container">
        <input
          type="checkbox"
          className="checkbox-element"
          defaultChecked={user.checked}
          onChange={checkedChange}
        />
        <p>Accept Terms & Conditions</p>
      </div>
      <Button
        buttonText={"Login"}
        className="button-element"
        onClick={loginFn}
        loading={loading}
      />
    </div>
  );
};
export default Login;
