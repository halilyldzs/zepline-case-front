import { BadgeProps } from './Badge.types';
import './Badge.scss';

function Badge({ children, variant = 'primary', className }: BadgeProps) {
  const baseClasses = 'badge-custom';

  const variantClasses = {
    info: 'badge-info',
    primary: 'badge-primary',
    warning: 'badge-warning',
    success: 'badge-success',
    soft: 'badge-soft',
  };

  const badgeClasses = [baseClasses, variantClasses[variant], className].filter(Boolean).join(' ');

  return <span className={badgeClasses}>{children}</span>;
}

export default Badge;
