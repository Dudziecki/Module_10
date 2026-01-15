import React from "react";
import "./AuthLayout.css";

type AuthLayoutPropsType = {
  children: React.ReactNode;
};

export const AuthLayout = ({ children }: AuthLayoutPropsType) => {
  return (
    <div className="auth-page">
      <section className="auth-form-content">{children}</section>
    </div>
  );
};
