import { ButtonProps } from './Button.types';
import { cn } from '@/lib/utils';
import Icon from '../Icon';

const baseClasses = "h-[55px] px-4 rounded-full font-medium transition-colors duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed";
const circleClasses = "h-[55px] w-[55px] p-0";

const variantClasses = {
  outline: {
    primary: "bg-white border border-stroke text-primary hover:bg-primary hover:text-white",
    'primary-dark': "bg-white border border-primary-dark text-primary-dark hover:bg-primary-dark hover:text-white",
    success: "bg-white border border-success text-success hover:bg-success hover:text-white",
    'success-dark': "bg-white border border-success-dark text-success-dark hover:bg-success-dark hover:text-white",
    danger: "bg-white border border-danger text-danger hover:bg-danger hover:text-white",
    'danger-dark': "bg-white border border-danger-dark text-danger-dark hover:bg-danger-dark hover:text-white",
    warning: "bg-white border border-warning text-warning hover:bg-warning hover:text-white",
    info: "bg-white border border-info text-info hover:bg-info hover:text-white",
  },
  filled: {
    primary: "bg-primary text-white hover:opacity-90",
    'primary-dark': "bg-primary-dark text-white hover:opacity-90",
    success: "bg-success text-white hover:opacity-90",
    'success-dark': "bg-success-dark text-white hover:opacity-90",
    danger: "bg-danger text-white hover:opacity-90",
    'danger-dark': "bg-danger-dark text-white hover:opacity-90",
    warning: "bg-warning text-white hover:opacity-90",
    info: "bg-info text-white hover:opacity-90",
  },
};

const iconSizeClass = 'w-4 h-4';


function Button({
  children,
  variant = 'filled',
  shape = 'rounded',
  color = 'primary',
  leftIcon,
  rightIcon,
  disabled = false,
  className,
  onClick,
}: ButtonProps) {
  const isCircle = shape === 'circle';
  const shapeClass = isCircle ? circleClasses : '';
  const variantClass = variantClasses[variant][color];

  const iconColorClass = variant === 'filled' ? 'text-white' : '';

  const leftIconElement = leftIcon ? (
    <Icon name={leftIcon} className={cn(iconSizeClass, iconColorClass)} />
  ) : null;

  const rightIconElement = rightIcon ? (
    <Icon name={rightIcon} className={cn(iconSizeClass, iconColorClass)} />
  ) : null;

  const content = isCircle ? (
    leftIconElement || rightIconElement
  ) : (
    <>
      {leftIconElement}
      {children}
      {rightIconElement}
    </>
  );

  return (
    <button
      className={cn(
        baseClasses,
        shapeClass,
        variantClass,
        className
      )}
      disabled={disabled}
      onClick={onClick}
    >
      {content}
    </button>
  );
}

export default Button;
