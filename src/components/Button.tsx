import React from 'react';
// import classNames from 'classnames';

interface ButtonProps {
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary' | 'ghost' | 'disabled';
  size?: 'small' | 'medium' | 'large';
  icon?: React.ReactNode;
  children?: React.ReactNode;
  disabled?: boolean;
  className?: string;
  title?: string;
}

export const Button: React.FC<ButtonProps> = ({
  onClick,
  type = 'button',
  variant = 'primary',
  size = 'medium',
  icon,
  children,
  disabled = false,
  title,
  className = '',
}) => {
  const baseClasses = 'flex items-center gap-2 rounded-md transition-colors focus:outline-none';
  const sizeClasses = {
    small: 'px-2 py-1 text-sm',
    medium: 'px-4 py-2 text-base',
    large: 'px-6 py-3 text-lg',
  };
  const variantClasses = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg',
    secondary: 'bg-gray-100 text-gray-700 hover:bg-gray-200',
    ghost: 'hover:bg-gray-100 text-gray-700',
    disabled: 'bg-blue-400 text-white cursor-not-allowed',
  };

  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled || variant === 'disabled'}
      className={className}
      title={title}
    >
      {icon && <span>{icon}</span>}
      {children}
    </button>
  );
};
