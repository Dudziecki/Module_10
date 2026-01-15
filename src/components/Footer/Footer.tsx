import React, { FC, ReactNode } from "react";
import "./Footer.css";

type FooterPropsType = {
  children: ReactNode;
};

export const Footer = ({ children }: FooterPropsType) => {
  return <footer className="footer">{children}</footer>;
};
