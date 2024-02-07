import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../screens/home";
import Signin from "../screens/Signin";
import Signup from "../screens/Signup";

const RoutesApp: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<Signin />} />
      </Routes>
    </BrowserRouter>
  );
};



export default RoutesApp;
