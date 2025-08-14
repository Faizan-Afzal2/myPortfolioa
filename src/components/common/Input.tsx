import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export const Input: React.FC<InputProps> = ({
  label,
  error,
  className = '',
  ...props
}) => {
  const baseStyles = 'w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 transition-colors';
  const normalStyles = 'border-[color:var(--color-border-light)] focus:ring-[color:var(--color-primary-500)]';
  const errorStyles = 'border-[color:var(--color-error)] focus:ring-[color:var(--color-error)]';
  
  const combinedClassName = `${baseStyles} ${error ? errorStyles : normalStyles} ${className}`;

  return (
    <div>
      {label && (
        <label className="block text-sm font-medium text-[color:var(--color-text-secondary)] mb-2">
          {label}
        </label>
      )}
      <input className={combinedClassName} {...props} />
      {error && (
        <p className="mt-1 text-sm text-[color:var(--color-error)]">{error}</p>
      )}
    </div>
  );
};

export const TextArea: React.FC<TextAreaProps> = ({
  label,
  error,
  className = '',
  ...props
}) => {
  const baseStyles = 'w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 transition-colors resize-vertical';
  const normalStyles = 'border-[color:var(--color-border-light)] focus:ring-[color:var(--color-primary-500)]';
  const errorStyles = 'border-[color:var(--color-error)] focus:ring-[color:var(--color-error)]';
  
  const combinedClassName = `${baseStyles} ${error ? errorStyles : normalStyles} ${className}`;

  return (
    <div>
      {label && (
        <label className="block text-sm font-medium text-[color:var(--color-text-secondary)] mb-2">
          {label}
        </label>
      )}
      <textarea className={combinedClassName} {...props} />
      {error && (
        <p className="mt-1 text-sm text-[color:var(--color-error)]">{error}</p>
      )}
    </div>
  );
};