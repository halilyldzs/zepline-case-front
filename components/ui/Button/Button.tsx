import { ButtonProps } from './Button.types';
import Icon from '../Icon';
import './Button.scss';

const baseClasses = 'btn-custom';

const variantClasses = {
  outline: {
    default: 'btn-outline-default',
    primary: 'btn-outline-primary',
    'primary-dark': 'btn-outline-primary-dark',
    success: 'btn-outline-success',
    'success-dark': 'btn-outline-success-dark',
    danger: 'btn-outline-danger',
    'danger-dark': 'btn-outline-danger-dark',
    warning: 'btn-outline-warning',
    info: 'btn-outline-info',
  },
  filled: {
    default: 'btn-filled-default',
    primary: 'btn-filled-primary',
    'primary-dark': 'btn-filled-primary-dark',
    success: 'btn-filled-success',
    'success-dark': 'btn-filled-success-dark',
    danger: 'btn-filled-danger',
    'danger-dark': 'btn-filled-danger-dark',
    warning: 'btn-filled-warning',
    info: 'btn-filled-info',
  },
};

const iconSizeClass = 'icon-size';

function Button({
  children,
  variant = 'filled',
  color = 'primary',
  leftIcon,
  rightIcon,
  disabled = false,
  className,
  onClick,
  ariaLabel,
  type = 'button',
}: ButtonProps) {
  const variantClass = variantClasses[variant][color];

  const iconColorClass = variant === 'filled' ? 'text-white' : '';

  const leftIconElement = leftIcon ? (
    <Icon
      name={leftIcon}
      className={`${iconSizeClass} ${iconColorClass}`.trim()}
      ariaHidden={true}
    />
  ) : null;

  const rightIconElement = rightIcon ? (
    <Icon
      name={rightIcon}
      className={`${iconSizeClass} ${iconColorClass}`.trim()}
      ariaHidden={true}
    />
  ) : null;

  const content = (
    <>
      {leftIconElement}
      {children}
      {rightIconElement}
    </>
  );

  const buttonClasses = [baseClasses, variantClass, className].filter(Boolean).join(' ');

  return (
    <button
      type={type}
      className={buttonClasses}
      disabled={disabled}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {content}
    </button>
  );
}

export default Button;
