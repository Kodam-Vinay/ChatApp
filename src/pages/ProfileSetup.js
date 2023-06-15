import React, { useEffect, useRef, useState } from "react";
import "../css/Home.css";
import Button from "../components/Button";
import AppInput from "../components/AppInput";
import blankImage from "../assets/images/blankimg.webp";
import Camera from "../components/svgs/Camera";
import { ErrorToast } from "../components/Toast";
import { uploadImage, fetchImage, getImage } from "../Api";
import { Buffer } from "buffer";
import btoa from "btoa";
import { ClimbingBoxLoader, ClipLoader } from "react-spinners";
const ProfileSetup = () => {
  const [user, setUser] = useState({ name: "", image: "" });
  const [loading, setLoading] = useState(false);
  const [fetch, setFetch] = useState(0);
  const [imageUrl, setImageUrl] = useState("");
  const [imageLoading, setImageLoading] = useState(false);
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
    setImageLoading((prev) => true);
    if (fetch === 0) {
      let res = await fetchImage();
      console.log({ res });
      if (res.status === 200) {
        const { name, image } = res.data;
        setUser((prev) => ({ ...prev, name: name, image: image }));
      }
      let imgResp = await getImage();
      // let b64Response = btoa(imgResp);
      if (imgResp.status === 200) {
        let imgData = imgResp.data;

        setImageUrl((prev) => "data:image/png;base64," + imgData);
        setImageLoading((prev) => false);
        console.log(imgResp);
      }
    } else {
      setImageLoading((prev) => true);
      setTimeout(async () => {
        let response = await fetchImage();
        let imgResp = await getImage();
      }, 15000);
      setTimeout(async () => {
        let imgResp = await getImage();
        if (imgResp.status === 200) {
          let imgData = imgResp.data;
          setImageUrl((prev) => "data:image/png;base64," + imgData);
          console.log(imgResp);
          setImageLoading((prev) => false);
        }
      }, 20000);
    }
    // b64Response = Buffer.from(b64Response, "base64").toString("ascii");
    setLoading(false);
  };

  useEffect(() => {
    ImageFetch();
  }, [fetch]);
  return (
    <div className="bg-container">
      <div className="bg-userImage">
        {imageLoading && (
          <div className="loader-img">
            <ClipLoader color="#36d7b7" />
          </div>
        )}
        <img
          // src={user?.image ? user.image : blankImage}
          // className="bg-UserImage"
          src={imageUrl ? imageUrl : blankImage}
          className="bg-UserImage"
          style={{ opacity: imageLoading ? 0.25 : 1 }}
        />
        <div className="bg-Camera-div">
          <button
            className="bg-camera"
            onClick={focusInput}
            disabled={imageLoading}
          >
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
