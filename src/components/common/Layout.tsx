import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
}

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'elevated' | 'outlined';
  padding?: 'sm' | 'md' | 'lg';
}

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  background?: 'primary' | 'secondary' | 'gradient';
  padding?: 'sm' | 'md' | 'lg' | 'xl';
}

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

export const Container: React.FC<ContainerProps> = ({
  children,
  className = '',
  size = 'lg'
}) => {
  const sizeStyles = {
    sm: 'max-w-2xl',
    md: 'max-w-4xl',
    lg: 'max-w-6xl',
    xl: 'max-w-7xl',
    full: 'max-w-full'
  };

  const combinedClassName = `container mx-auto px-4 ${sizeStyles[size]} ${className}`;

  return (
    <div className={combinedClassName}>
      {children}
    </div>
  );
};

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  variant = 'default',
  padding = 'md'
}) => {
  const baseStyles = 'rounded-lg';
  
  const variantStyles = {
    default: 'bg-[color:var(--color-bg-primary)]',
    elevated: 'bg-[color:var(--color-bg-primary)] shadow-md',
    outlined: 'bg-[color:var(--color-bg-primary)] border border-[color:var(--color-border-light)]'
  };

  const paddingStyles = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  };

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${paddingStyles[padding]} ${className}`;

  return (
    <div className={combinedClassName}>
      {children}
    </div>
  );
};

export const Section: React.FC<SectionProps> = ({
  children,
  className = '',
  background = 'primary',
  padding = 'lg'
}) => {
  const baseStyles = 'min-h-screen';
  
  const backgroundStyles = {
    primary: 'bg-[color:var(--color-bg-primary)]',
    secondary: 'bg-[color:var(--color-bg-secondary)]',
    gradient: 'bg-gradient-to-br from-[color:var(--color-bg-gradient-from)] to-[color:var(--color-bg-gradient-to)]'
  };

  const paddingStyles = {
    sm: 'py-8',
    md: 'py-12',
    lg: 'py-16',
    xl: 'py-24'
  };

  const combinedClassName = `${baseStyles} ${backgroundStyles[background]} ${paddingStyles[padding]} ${className}`;

  return (
    <div className={combinedClassName}>
      {children}
    </div>
  );
};

export const Button: React.FC<ButtonProps> = ({
  children,
  className = '',
  variant = 'primary',
  size = 'md',
  onClick,
  type = 'button'
}) => {
  const baseStyles = 'font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variantStyles = {
    primary: 'bg-[color:var(--color-primary-600)] text-white hover:bg-[color:var(--color-primary-700)] focus:ring-[color:var(--color-primary-500)]',
    secondary: 'bg-[color:var(--color-secondary-600)] text-white hover:bg-[color:var(--color-secondary-700)] focus:ring-[color:var(--color-secondary-500)]',
    outline: 'border border-[color:var(--color-primary-600)] text-[color:var(--color-primary-600)] hover:bg-[color:var(--color-primary-50)] focus:ring-[color:var(--color-primary-500)]'
  };

  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  return (
    <button
      type={type}
      onClick={onClick}
      className={combinedClassName}
    >
      {children}
    </button>
  );
};