import { IconButtonProps } from './IconButton.types';
import Icon from '../Icon';
import './IconButton.scss';

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

function IconButton({
  icon,
  variant = 'filled',
  color = 'primary',
  disabled = false,
  className,
  onClick,
}: IconButtonProps) {
  const baseClasses = 'btn-custom btn-circle icon-button';
  const variantClass = variantClasses[variant][color];
  const iconColorClass = variant === 'filled' ? 'text-white' : '';

  const iconElement = <Icon name={icon} className={`icon-button__icon ${iconColorClass}`.trim()} />;

  const buttonClasses = [baseClasses, variantClass, className].filter(Boolean).join(' ');

  return (
    <button className={buttonClasses} disabled={disabled} onClick={onClick}>
      {iconElement}
    </button>
  );
}

export default IconButton;
