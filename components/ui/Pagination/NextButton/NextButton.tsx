import React from 'react';
import { NextButtonProps } from './NextButton.types';
import Icon from '../../Icon';
import './NextButton.scss';

const baseClasses = 'pagination-button';
const unselectedClasses = 'unselected';

export default function NextButton({ onClick, disabled = false, className }: NextButtonProps) {
  const buttonClasses = [baseClasses, unselectedClasses, className].filter(Boolean).join(' ');

  return (
    <button onClick={onClick} disabled={disabled} className={buttonClasses} aria-label="Next">
      <Icon name="right" className="pagination-button__icon" />
    </button>
  );
}
