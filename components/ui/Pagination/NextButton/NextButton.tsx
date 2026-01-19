import React from 'react';
import { NextButtonProps } from './NextButton.types';
import Icon from '../../Icon';
import './NextButton.scss';

const baseClasses = 'pagination-button--next';
const unselectedClasses = 'unselected';

export default function NextButton({ onClick, disabled = false, className }: NextButtonProps) {
  const buttonClasses = [baseClasses, unselectedClasses, className].filter(Boolean).join(' ');

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={buttonClasses}
      aria-label="Sonraki sayfa"
    >
      <Icon name="right" className="pagination-button--next__icon" />
    </button>
  );
}
