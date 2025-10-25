import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', className, ...props }) => {
  const baseClasses = "inline-block px-10 py-4 text-lg font-semibold rounded-lg shadow-lg hover:-translate-y-0.5 transform transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-700";
  
  const variantClasses = {
    primary: 'bg-green-800 text-white hover:bg-green-700',
    secondary: 'bg-white text-green-800 border border-green-800 hover:bg-green-50',
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${className || ''}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
