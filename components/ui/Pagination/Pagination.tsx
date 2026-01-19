import { PaginationProps } from './Pagination.types';
import { usePagination } from './hooks/usePagination';
import PrevButton from './PrevButton';
import NextButton from './NextButton';
import './Pagination.scss';

const baseClasses = 'pagination__button';
const selectedClasses = 'pagination__button--selected';
const unselectedClasses = 'pagination__button--unselected';

function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  className,
  ariaLabel = 'Sayfa navigasyonu',
}: PaginationProps) {
  const { handlePrevious, handleNext, pageNumbers, isPreviousDisabled, isNextDisabled } =
    usePagination({ currentPage, totalPages, onPageChange });

  const containerClasses = ['pagination', className].filter(Boolean).join(' ');

  return (
    <nav className={containerClasses} aria-label={ariaLabel}>
      <PrevButton
        onClick={handlePrevious}
        disabled={isPreviousDisabled}
      />

      {pageNumbers.map((page, index) => {
        if (page === 'ellipsis') {
          return (
            <span key={`ellipsis-${index}`} className="text-primary px-2" aria-hidden="true">
              ...
            </span>
          );
        }

        const pageNum = page as number;
        const isSelected = pageNum === currentPage;

        const pageButtonClasses = [
          baseClasses,
          isSelected ? selectedClasses : unselectedClasses
        ]
          .filter(Boolean)
          .join(' ');

        return (
          <button
            key={pageNum}
            onClick={() => onPageChange(pageNum)}
            className={pageButtonClasses}
            aria-label={`Sayfa ${pageNum}`}
            aria-current={isSelected ? 'page' : undefined}
          >
            {pageNum}
          </button>
        );
      })}

      <NextButton onClick={handleNext} disabled={isNextDisabled} />
    </nav>
  );
}

export default Pagination;
