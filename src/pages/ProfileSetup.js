import React, { useState } from "react";
import "../css/Home.css";
import Button from "../components/Button";
import AppInput from "../components/AppInput";
import blankImage from "../assets/images/blankimg.webp";
import Camera from "../components/svgs/Camera";
const Home = () => {
  const [user, setUser] = useState({ name: "", about: "" });
  const onChange = (e) => {
    console.log(e);
  };
  return (
    <div className="bg-container">
      <div className="bg-userImage">
        <img src={blankImage} className="bg-UserImage" />
        <div className="bg-Camera-div">
          <button className="bg-camera">
            <Camera />
          </button>
        </div>
      </div>
      <AppInput placeholder="Your name" onChange={onChange} />

      <Button buttonText={"Save"} />
    </div>
  );
};

export default Home;
