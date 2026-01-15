import React from "react";
import "./Button.css";

type ButtonPropsType = {
  children: React.ReactNode;
  type?: "submit" | "button" | "reset";
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
};

export const Button = ({
  children,
  type = "button",
  onClick,
  className = "",
  disabled,
}: ButtonPropsType) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`base-button-styles ${className}`}
    >
      {children}
    </button>
  );
};
