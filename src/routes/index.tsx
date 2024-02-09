import React,{useContext} from "react";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import {Home} from "../screens/home";
import Signin from "../screens/Signin";
import Signup from "../screens/Signup";
import indexPage from "../screens/Signup";
import AuthProvider,{AuthContext} from "../context/auth";

const Private =({Item}) =>{
  const signed = true;

  return signed ? <Item/> : <Signin/>
}
const RoutesApp: React.FC = () => {
  return (
    <BrowserRouter>
     <AuthProvider>
     <Routes>
    <Route path="/home" element={<Private Item={Home}  />}>
  <Route index element={<Home />} />
</Route>
        <Route path="/" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<Signin />} />
      </Routes>
  </AuthProvider>
     
    </BrowserRouter>
  );
};



export default RoutesApp;
