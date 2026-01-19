import { PaginationProps } from './Pagination.types';
import { usePagination } from './hooks/usePagination';
import PrevButton from './PrevButton';
import NextButton from './NextButton';
import './Pagination.scss';

const baseClasses = 'pagination-button';
const selectedClasses = 'selected';
const unselectedClasses = 'unselected';

function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  className,
  ariaLabel = 'Sayfa navigasyonu',
}: PaginationProps) {
  const { handlePrevious, handleNext, pageNumbers, isPreviousDisabled, isNextDisabled } =
    usePagination({ currentPage, totalPages, onPageChange });

  const containerClasses = ['d-flex', 'align-items-center', className].filter(Boolean).join(' ');

  const buttonBaseClasses = [baseClasses, unselectedClasses].filter(Boolean).join(' ');

  return (
    <nav className={containerClasses} style={{ gap: '0.5rem' }} aria-label={ariaLabel}>
      <PrevButton
        onClick={handlePrevious}
        disabled={isPreviousDisabled}
        className={buttonBaseClasses}
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

        const pageButtonClasses = [baseClasses, isSelected ? selectedClasses : unselectedClasses]
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

      <NextButton onClick={handleNext} disabled={isNextDisabled} className={buttonBaseClasses} />
    </nav>
  );
}

export default Pagination;
