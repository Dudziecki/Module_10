import React from 'react';
import './Button.css';

interface Props {
  children: React.ReactNode;
  type?: 'submit' | 'button' | 'reset';
  onClick?: () => void;
  className?: string;
}

export const Button: React.FC<Props> = ({
  children,
  type = 'button', // Значение по умолчанию
  onClick,
  className = '',
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`base-button-styles ${className}`} // Комбинируем базовые стили и внешние
    >
      {children}
    </button>
  );
};
