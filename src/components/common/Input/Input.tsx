import React from "react";
import "./Input.css";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
  icon?: React.ReactNode;
  error?: string;
}

export const Input: React.FC<Props> = ({
  id,
  label,
  icon,
  error,
  className = "",
  ...props
}) => {
  return (
    <fieldset className={`auth-field ${className}`}>
      <label htmlFor={id} className="auth-label">
        {icon && <span className="label-icon">{icon}</span>}
        {label}
      </label>

      <div className={`input-wrapper ${error ? "has-error" : ""}`}>
        <input id={id} className="auth-input" {...props} />
      </div>

      {error && <span className="error-message">{error}</span>}
    </fieldset>
  );
};
