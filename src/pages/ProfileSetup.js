import React, { useEffect, useRef, useState } from "react";
import "../css/Home.css";
import Button from "../components/Button";
import AppInput from "../components/AppInput";
import blankImage from "../assets/images/blankimg.webp";
import Camera from "../components/svgs/Camera";
import { ErrorToast } from "../components/Toast";
import { uploadImage, fetchImage } from "../Api";
const ProfileSetup = () => {
  const [user, setUser] = useState({ name: "", image: "" });
  const [loading, setLoading] = useState(false);
  const [fetch, setFetch] = useState(0);
  const inputElement = useRef();

  const onChange = (e) => {
    console.log(e);
  };
  const focusInput = () => {
    inputElement.current.click();
  };

  const ImageUpload = async (event) => {
    event.preventDefault();
    const file = event.target.files[0];
    var formData = new FormData();
    if ((file?.type).includes("image")) {
      formData.append("image", file);
      setLoading(true);
      let res = await uploadImage(formData);
      if (res.status === 200) {
        setFetch((prev) => prev + 1);
      }
      console.log({ formData });
    } else {
      ErrorToast("Please Upload Image Only");
    }
    setLoading(false);
  };

  const ImageFetch = async () => {
    setLoading(true);
    let res = await fetchImage();
    console.log({ res });
    if (res.status === 200) {
      const { name, image } = res.data;
      setUser((prev) => ({ ...prev, name: name, image: image }));
    }
    setLoading(false);
  };

  useEffect(() => {
    ImageFetch();
  }, [fetch]);
  return (
    <div className="bg-container">
      <div className="bg-userImage">
        <img
          src={user?.image ? user.image : blankImage}
          className="bg-UserImage"
        />
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

export default ProfileSetup;
