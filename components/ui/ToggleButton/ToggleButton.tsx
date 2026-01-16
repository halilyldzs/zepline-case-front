import { ToggleButtonProps } from './ToggleButton.types';
import { cn } from '@/lib/utils';

const baseClasses = "h-[45px] px-[18px] rounded-[10px] font-medium transition-colors duration-200";
const selectedClasses = "bg-toggle-active border border-primary text-primary";
const unselectedClasses = "bg-white text-primary";
const hoverClasses = "hover:bg-primary hover:text-white";
const activeClasses = "active:bg-toggle-active active:border active:border-primary active:text-primary";
const disabledClasses = "disabled:bg-toggle-disabled disabled:text-toggle-disabled-text disabled:border-0 disabled:cursor-not-allowed";

function ToggleButton({ 
    children = 'Button',
    disabled = false,
    selected = false,
    onClick,
    className
}: ToggleButtonProps) {
    return (
        <button 
            className={cn(
                baseClasses,
                selected ? selectedClasses : unselectedClasses,
                hoverClasses,
                activeClasses,
                disabledClasses,
                className
            )}
            disabled={disabled}
            onClick={onClick}
        >
            {children}
        </button>
    );
}

export default ToggleButton;