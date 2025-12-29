import React from "react";
import { Navigate, Route, Routes } from "react-router";
import { useAuth } from "./contexts/AuthContext";

import { Home } from "./pages/Home/Home";
import { SignUp } from "./pages/SignUp/SignUp";
import { PageNotFound } from "./pages/PageNotFound/PageNotFound";
import { SignIn } from "./pages/SignIn/SignIn";
import { Profile } from "./pages/Profile/Profile";

import "./App.css";

export const RouterSetup: React.FC = () => {
  const { user } = useAuth();

  return (
    <>
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/pagenotfound" element={<PageNotFound />} />
          <Route
            path="/profile"
            element={user ? <Profile /> : <Navigate to="/signin" replace />}
          />

          <Route path="/*" element={<Navigate to="/pagenotfound" replace />} />
        </Routes>
      </main>
    </>
  );
};
