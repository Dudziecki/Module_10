import React, { FC, ReactNode } from "react";
import "./Footer.css";

type FooterPropsType = {
  children: ReactNode;
};

export const Footer: FC<FooterPropsType> = ({ children }) => {
  return <footer className="footer">{children}</footer>;
};
