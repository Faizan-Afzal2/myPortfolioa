import React from 'react';

interface HeadingProps {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary' | 'muted';
}

interface TextProps {
  children: React.ReactNode;
  className?: string;
  size?: 'sm' | 'base' | 'lg' | 'xl';
  variant?: 'primary' | 'secondary' | 'muted';
  weight?: 'normal' | 'medium' | 'semibold' | 'bold';
}

export const Heading: React.FC<HeadingProps> = ({
  level,
  children,
  className = '',
  variant = 'primary'
}) => {
  const baseStyles = 'font-bold leading-tight';
  
  const variantStyles = {
    primary: 'text-[color:var(--color-text-primary)]',
    secondary: 'text-[color:var(--color-text-secondary)]',
    muted: 'text-[color:var(--color-text-muted)]'
  };

  const sizeStyles = {
    1: 'text-5xl mb-6',
    2: 'text-4xl mb-5',
    3: 'text-3xl mb-4',
    4: 'text-2xl mb-3',
    5: 'text-xl mb-2',
    6: 'text-lg mb-2'
  };

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[level]} ${className}`;

  const Tag = `h${level}` as keyof React.JSX.IntrinsicElements;

  return (
    <Tag className={combinedClassName}>
      {children}
    </Tag>
  );
};

export const Text: React.FC<TextProps> = ({
  children,
  className = '',
  size = 'base',
  variant = 'primary',
  weight = 'normal'
}) => {
  const baseStyles = 'leading-relaxed';
  
  const variantStyles = {
    primary: 'text-[color:var(--color-text-primary)]',
    secondary: 'text-[color:var(--color-text-secondary)]',
    muted: 'text-[color:var(--color-text-muted)]'
  };

  const sizeStyles = {
    sm: 'text-sm',
    base: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl'
  };

  const weightStyles = {
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold'
  };

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${weightStyles[weight]} ${className}`;

  return (
    <p className={combinedClassName}>
      {children}
    </p>
  );
};