import { IconName } from '../Icon/Icon.types';

export type IconButtonVariant = 'outline' | 'filled';
export type IconButtonColor =
  | 'primary'
  | 'primary-dark'
  | 'success'
  | 'success-dark'
  | 'danger'
  | 'danger-dark'
  | 'warning'
  | 'info'
  | 'default';

export interface IconButtonProps {
  icon: IconName;
  variant?: IconButtonVariant;
  color?: IconButtonColor;
  disabled?: boolean;
  className?: string;
  onClick?: () => void;
}
