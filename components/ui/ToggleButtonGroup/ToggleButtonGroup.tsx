import { ToggleButtonGroupProps } from './ToggleButtonGroup.types';
import ToggleButton from '../ToggleButton';
import { cn } from '@/lib/utils';

function ToggleButtonGroup({ 
    options,
    value,
    onChange,
    disabled = false,
    className
}: ToggleButtonGroupProps) {
    return (
        <div className={cn("flex gap-2", className)}>
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
