import React, { useRef, useState } from "react";
import "../css/Home.css";
import Button from "../components/Button";
import AppInput from "../components/AppInput";
import blankImage from "../assets/images/blankimg.webp";
import Camera from "../components/svgs/Camera";
import { ErrorToast } from "../components/Toast";
import { uploadImagem, fetchImage } from "../Api";
const Home = () => {
  const [user, setUser] = useState({ name: "", about: "" });
  const [loading, setLoading] = useState(false);
  const inputElement = useRef();

  const onChange = (e) => {
    console.log(e);
  };
  const focusInput = () => {
    inputElement.current.click();
  };

  const ImageUpload = async (event) => {
    // event.preventDefault();
    const file = event.target.files[0];
    var formData = new FormData();
    if ((file?.type).includes("image")) {
      formData.append("image", file);
      setLoading(true);
      let res = await uploadImage(formData);
      console.log({ formData });
    } else {
      ErrorToast("Please Upload Image Only");
    }
    setLoading(false);
  };

  const ImageFetch = async () => {
    let res = await fetchImage(formData);
  };
  return (
    <div className="bg-container">
      <div className="bg-userImage">
        <img src={blankImage} className="bg-UserImage" />
        <div className="bg-Camera-div">
          <button className="bg-camera" onClick={focusInput}>
            <Camera />
            <input
              type="file"
              id="bg-camera-id"
              hidden
              ref={inputElement}
              accept="image/*"
              onChange={ImageUpload}
            />
          </button>
        </div>
      </div>
      <AppInput placeholder="Your name" onChange={onChange} />

      <Button buttonText={"Save"} loading={loading} />
    </div>
  );
};

export default Home;
