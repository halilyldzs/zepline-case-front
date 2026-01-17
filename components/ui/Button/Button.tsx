import { ButtonProps } from './Button.types';
import Icon from '../Icon';
import './Button.scss';

const baseClasses = 'btn-custom';
const circleClasses = 'btn-circle';

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
    <Icon name={leftIcon} className={`${iconSizeClass} ${iconColorClass}`.trim()} />
  ) : null;

  const rightIconElement = rightIcon ? (
    <Icon name={rightIcon} className={`${iconSizeClass} ${iconColorClass}`.trim()} />
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

  const buttonClasses = [baseClasses, shapeClass, variantClass, className]
    .filter(Boolean)
    .join(' ');

  return (
    <button className={buttonClasses} disabled={disabled} onClick={onClick}>
      {content}
    </button>
  );
}

export default Button;
