import React from "react";
import "./Form.css";

type FormPropsType = {
  title: string;
  subtitle: string;
  onSubmit: (e: React.FormEvent) => void;
  children: React.ReactNode;
  className?: string;
};

export const Form: React.FC<FormPropsType> = ({
  title,
  subtitle,
  onSubmit,
  children,
  className = "",
}) => {
  return (
    <form onSubmit={onSubmit} className={`auth-form ${className}`}>
      <div className="form-header">
        <h4 className="form-title">{title}</h4>
        <h5 className="form-subtitle">{subtitle}</h5>
      </div>

      <div className="form-content">{children}</div>
    </form>
  );
};
