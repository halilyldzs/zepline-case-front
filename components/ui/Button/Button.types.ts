import { IconName } from '../Icon/Icon.types';

export type ButtonVariant = 'outline' | 'filled';
export type ButtonColor =
  | 'primary'
  | 'primary-dark'
  | 'success'
  | 'success-dark'
  | 'danger'
  | 'danger-dark'
  | 'warning'
  | 'info'
  | 'default';

export interface ButtonProps {
  children?: React.ReactNode;
  variant?: ButtonVariant;
  color?: ButtonColor;
  leftIcon?: IconName;
  rightIcon?: IconName;
  disabled?: boolean;
  className?: string;
  onClick?: () => void;
  ariaLabel?: string;
  type?: 'button' | 'submit' | 'reset';
}
