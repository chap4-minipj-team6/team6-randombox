import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Mainpage from "../pages/Mainpage";
import MyPage from "../pages/MyPage";
import PasswordEdit from "../pages/PasswordEdit";
import Personal from "../pages/Personal";
import Request from "../pages/Request";
import Review from "../pages/Review";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        {/* <Route path="/SignUp/?:userId" element={<SignUp />} /> */}
        <Route path="/Mainpage" element={<Mainpage />} />
        <Route path="/MyPage" element={<MyPage />} />
        <Route path="/PasswordEdit" element={<PasswordEdit />} />
        <Route path="/Personal" element={<Personal />} />
        <Route path="/Request" element={<Request />} />
        <Route path="/Review" element={<Review />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
