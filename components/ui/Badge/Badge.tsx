import { BadgeProps } from './Badge.types';
import { cn } from '@/lib/utils';

function Badge({ 
    children,
    variant = 'primary',
    className
}: BadgeProps) {
    const baseClasses = "px-3 py-1.5 rounded-full font-medium text-sm";
    
    const variantClasses = {
        'info': 'bg-info text-white',
        'primary': 'bg-primary text-white',
        'warning': 'bg-warning text-white',
        'success': 'bg-success text-white',
        "soft": "bg-[#F6F8FF] text-[#112053]"
    };

    return (
        <span className={cn(baseClasses, variantClasses[variant], className)}>
            {children}
        </span>
    );
}

export default Badge;
