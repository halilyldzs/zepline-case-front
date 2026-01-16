import { ToggleButtonProps } from './ToggleButton.types';
import './ToggleButton.scss';

const baseClasses = 'toggle-button';
const selectedClasses = 'selected';
const unselectedClasses = 'unselected';

function ToggleButton({
  children = 'Button',
  disabled = false,
  selected = false,
  onClick,
  className,
}: ToggleButtonProps) {
  const buttonClasses = [baseClasses, selected ? selectedClasses : unselectedClasses, className]
    .filter(Boolean)
    .join(' ');

  return (
    <button className={buttonClasses} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
}

export default ToggleButton;
