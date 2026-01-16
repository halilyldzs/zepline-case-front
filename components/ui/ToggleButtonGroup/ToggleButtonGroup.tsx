import { ToggleButtonGroupProps } from './ToggleButtonGroup.types';
import ToggleButton from '../ToggleButton';

function ToggleButtonGroup({ 
    options,
    value,
    onChange,
    disabled = false
}: ToggleButtonGroupProps) {
    return (
        <div className="flex gap-2">
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
