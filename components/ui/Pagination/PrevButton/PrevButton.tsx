import React from 'react';
import { PrevButtonProps } from './PrevButton.types';
import Icon from '../../Icon';
import './PrevButton.scss';

const baseClasses = 'pagination-button--prev';
const unselectedClasses = 'unselected';

export default function PrevButton({ onClick, disabled = false, className }: PrevButtonProps) {
  const buttonClasses = [baseClasses, unselectedClasses, className].filter(Boolean).join(' ');

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={buttonClasses}
      aria-label="Önceki sayfa"
    >
      <Icon name="left" className="pagination-button--prev__icon" />
    </button>
  );
}
