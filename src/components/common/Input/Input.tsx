import React from "react";
import "./Input.css";

export type InputProps = {
  id: string;
  label: string;
  icon?: React.ReactNode;
  error?: string;
  className?: string;
  type?:string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  disabled?: boolean;
};

export const Input = ({
  id,
  label,
  icon,
  error,
  className,
  ...props
}: InputProps) => {
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
