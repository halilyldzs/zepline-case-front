import { IconName } from '../Icon/Icon.types';

export type ButtonVariant = 'outline' | 'filled';
export type ButtonShape = 'rounded' | 'circle';
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
  shape?: ButtonShape;
  color?: ButtonColor;
  leftIcon?: IconName;
  rightIcon?: IconName;
  disabled?: boolean;
  className?: string;
  onClick?: () => void;
}
