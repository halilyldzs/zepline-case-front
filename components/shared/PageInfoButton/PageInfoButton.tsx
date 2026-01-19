'use client';

import Icon from '@/components/ui/Icon';
import { PageInfoButtonProps } from './PageInfoButton.types';
import './PageInfoButton.scss';

export default function PageInfoButton({
  iconName,
  label,
  value,
  onClick,
  className,
  ariaLabel,
}: PageInfoButtonProps) {
  return (
    <button
      type="button"
      className={`page-info-button ${className || ''}`.trim()}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      <div className="page-info-button__icon-wrapper">
        <Icon name={iconName} className="page-info-button__icon" ariaHidden={true} />
      </div>
      <span className="page-info-button__text">
        {label}{' '}
        <strong>{value}</strong>
      </span>
    </button>
  );
}
