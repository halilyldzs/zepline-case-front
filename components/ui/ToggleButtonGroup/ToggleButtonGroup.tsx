import { ToggleButtonGroupProps } from './ToggleButtonGroup.types';
import ToggleButton from '../ToggleButton';

function ToggleButtonGroup({ 
    options,
    value,
    onChange,
    disabled = false,
    className
}: ToggleButtonGroupProps) {
    const containerClasses = ['d-flex', className]
      .filter(Boolean)
      .join(' ');

    return (
        <div className={containerClasses} style={{ gap: '0.5rem' }}>
            {options.map((option) => (
                <ToggleButton
                    key={option}
                    selected={value === option}
                    disabled={disabled}
                    onClick={() => onChange?.(option)}
                >
                    {option}
                </ToggleButton>
            ))}
        </div>
    );
}

export default ToggleButtonGroup;
