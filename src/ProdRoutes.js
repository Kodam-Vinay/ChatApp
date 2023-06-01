import React, { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Auth/Login";
import Chats from "./pages/Chats";
import { MainContext } from "./Context";
import OtpScreen from "./pages/Auth/Otp";

const ProdRoutes = () => {
  const { loginToken } = useContext(MainContext);
  return (
    <BrowserRouter>{loginToken ? <AppRoutes /> : <AuthRoutes />}</BrowserRouter>
  );
};

const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/otp" element={<OtpScreen />} />
    </Routes>
  );
};

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/chats" element={<Chats />} />
    </Routes>
  );
};

export default ProdRoutes;
