import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, className, ...props }) => {
  return (
    <button
      className={`py-2 px-4 bg-blue-500 text-white rounded ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
