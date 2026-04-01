import { cn } from '@/lib/utils';
import { ButtonHTMLAttributes, forwardRef } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center px-6 py-3 rounded-2xl font-semibold transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed',
          variant === 'primary' && 'bg-gradient-to-r from-primary to-primary-dark text-white shadow-md hover:shadow-lg hover:-translate-y-0.5',
          variant === 'secondary' && 'border-2 border-primary text-primary hover:bg-background-warm',
          variant === 'ghost' && 'text-text hover:bg-background-warm',
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';
