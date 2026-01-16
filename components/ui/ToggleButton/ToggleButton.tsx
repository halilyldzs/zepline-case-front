import { ToggleButtonProps } from './ToggleButton.types';

function ToggleButton({ 
    children = 'Button',
    disabled = false,
    selected = false,
    onClick 
}: ToggleButtonProps) {
    return (
        <button 
            className={`h-[45px] px-[18px] rounded-[10px] font-medium transition-colors duration-200 
            ${selected ? 'bg-toggle-active border border-primary text-primary' : 'bg-white text-primary'}
            hover:bg-primary hover:text-white 
            active:bg-toggle-active active:border active:border-primary active:text-primary 
            disabled:bg-toggle-disabled disabled:text-toggle-disabled-text disabled:border-0 disabled:cursor-not-allowed`}
            disabled={disabled}
            onClick={onClick}
        >
            {children}
        </button>
    );
}

export default ToggleButton;