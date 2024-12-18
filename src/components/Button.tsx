import React from 'react';

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
  icon,
  children,
  disabled = false,
  title,
  className = '',
}) => {

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
