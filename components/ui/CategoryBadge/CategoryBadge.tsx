import { CategoryBadgeProps } from './CategoryBadge.types';

function CategoryBadge({ 
    children,
    variant = 'primary'
}: CategoryBadgeProps) {
    const baseClasses = "px-3 py-1.5 rounded-full font-medium text-sm";
    
    const variantClasses = {
        'info': 'bg-info text-white',
        'primary': 'bg-primary text-white',
        'warning': 'bg-warning text-white',
        'success': 'bg-success text-white',
        "soft": "bg-[#F6F8FF] text-[#112053]"
    };

    return (
        <span className={`${baseClasses} ${variantClasses[variant]}`}>
            {children}
        </span>
    );
}

export default CategoryBadge;
