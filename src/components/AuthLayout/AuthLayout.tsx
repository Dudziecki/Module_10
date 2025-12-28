import React from "react";
import "./AuthLayout.css";

type AuthLayoutPropsType = {
  children: React.ReactNode;
};

export const AuthLayout: React.FC<AuthLayoutPropsType> = ({ children }) => {
  return (
    <div className="auth-page">
      <section className="auth-form-content">{children}</section>
    </div>
  );
};
