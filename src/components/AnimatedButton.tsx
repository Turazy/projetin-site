
import { ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
}

const AnimatedButton = ({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'left',
  fullWidth = false,
  className,
  ...props
}: AnimatedButtonProps) => {
  const baseStyles = "relative overflow-hidden font-medium rounded-md inline-flex items-center justify-center transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]";
  
  const variantStyles = {
    primary: "bg-corpus-blue text-white hover:shadow-blue-glow",
    secondary: "bg-corpus-silver text-corpus-blue hover:bg-corpus-silver-dark",
    outline: "bg-transparent border-2 border-corpus-blue text-corpus-blue hover:bg-corpus-blue hover:text-white",
    ghost: "bg-transparent text-corpus-blue hover:bg-corpus-blue/10"
  };
  
  const sizeStyles = {
    sm: "text-sm px-3 py-1.5",
    md: "text-base px-4 py-2",
    lg: "text-lg px-6 py-3"
  };
  
  // Liquid animation effect
  const liquidEffect = (
    <span className="absolute inset-0 overflow-hidden rounded-md">
      <span className="absolute inset-0 bg-white/20 scale-[2.5] blur-md transform -translate-x-full -translate-y-full ease-out duration-700 transition-transform hover:translate-x-0 hover:translate-y-0"></span>
    </span>
  );

  return (
    <button
      className={cn(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        fullWidth ? "w-full" : "",
        className
      )}
      {...props}
    >
      {variant === 'primary' && liquidEffect}
      {icon && iconPosition === 'left' && <span className="mr-2">{icon}</span>}
      <span className="relative z-10">{children}</span>
      {icon && iconPosition === 'right' && <span className="ml-2">{icon}</span>}
    </button>
  );
};

export default AnimatedButton;
