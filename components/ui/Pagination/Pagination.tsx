import { PaginationProps } from './Pagination.types';
import { cn } from '@/lib/utils';
import { usePagination } from './hooks/usePagination';

const baseClasses = "h-10 w-10 rounded-[15px] font-medium transition-colors duration-200 flex items-center justify-center";
const selectedClasses = "bg-primary text-white";
const unselectedClasses = "bg-[#F5F7FF] text-[#666E8B]";
const hoverClasses = "hover:bg-primary hover:text-white";

function Pagination({ 
    currentPage,
    totalPages,
    onPageChange,
    className
}: PaginationProps) {
    const {
        handlePrevious,
        handleNext,
        pageNumbers,
        isPreviousDisabled,
        isNextDisabled,
    } = usePagination({ currentPage, totalPages, onPageChange });

    return (
        <div className={cn("flex gap-2 items-center", className)}>
            <button
                onClick={handlePrevious}
                disabled={isPreviousDisabled}
                className={cn(
                    baseClasses,
                    unselectedClasses,
                    hoverClasses,
                    "disabled:opacity-50 disabled:cursor-not-allowed"
                )}
            >
                ←
            </button>

            {pageNumbers.map((page, index) => {
                if (page === 'ellipsis') {
                    return (
                        <span key={`ellipsis-${index}`} className="text-primary px-2">
                            ...
                        </span>
                    );
                }

                const pageNum = page as number;
                const isSelected = pageNum === currentPage;

                return (
                    <button
                        key={pageNum}
                        onClick={() => onPageChange(pageNum)}
                        className={cn(
                            baseClasses,
                            isSelected ? selectedClasses : unselectedClasses,
                            !isSelected && hoverClasses
                        )}
                    >
                        {pageNum}
                    </button>
                );
            })}

            <button
                onClick={handleNext}
                disabled={isNextDisabled}
                className={cn(
                    baseClasses,
                    unselectedClasses,
                    hoverClasses,
                    "disabled:opacity-50 disabled:cursor-not-allowed"
                )}
            >
                →
            </button>
        </div>
    );
}

export default Pagination;
