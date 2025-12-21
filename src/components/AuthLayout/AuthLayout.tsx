import React from 'react';
import './AuthLayout.css';

interface Props {
  children: React.ReactNode;
}

export const AuthLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className="auth-page">
      <section className="auth-form-content">{children}</section>
    </div>
  );
};
