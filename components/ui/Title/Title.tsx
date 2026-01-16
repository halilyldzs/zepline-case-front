import { cn } from '@/lib/utils';

interface TitleProps {
  children: string;
  className?: string;
}

function Title({ children, className }: TitleProps) {
    return (
        <h1 className={cn("text-[40px] font-bold leading-[48px]", className)}>{children}</h1>
    );
}

export default Title;