import React, { useContext } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Home } from "../screens/home";
import { ChatRoom } from "../screens/chatRoom";
import Signin from "../screens/Signin";
import Signup from "../screens/Signup";
import AuthProvider, { AuthContext } from "../context/auth";

const PrivateRoute: React.FC<{ element: React.ReactElement }> = ({ element }) => {
  const { user } = useContext(AuthContext);

  if (user) {
    return element;
  } else {
    return <Navigate to="/" />;
  }
};

const RoutesApp: React.FC = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route
            path="/home"
            element={<PrivateRoute element={<Home />} />}
          />
          <Route
            path="/chatroom/:_id/:name"
            element={<PrivateRoute element={<ChatRoom />} />}
          />
          <Route path="/" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<Signin />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default RoutesApp;
