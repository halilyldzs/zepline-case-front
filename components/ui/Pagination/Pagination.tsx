import { PaginationProps } from './Pagination.types';
import { usePagination } from './hooks/usePagination';
import Icon from '../Icon';
import './Pagination.scss';

const baseClasses = 'pagination-button';
const selectedClasses = 'selected';
const unselectedClasses = 'unselected';

function Pagination({ currentPage, totalPages, onPageChange, className }: PaginationProps) {
  const { handlePrevious, handleNext, pageNumbers, isPreviousDisabled, isNextDisabled } =
    usePagination({ currentPage, totalPages, onPageChange });

  const containerClasses = ['d-flex', 'align-items-center', className].filter(Boolean).join(' ');

  const buttonBaseClasses = [baseClasses, unselectedClasses].filter(Boolean).join(' ');

  return (
    <div className={containerClasses} style={{ gap: '0.5rem' }}>
      <button onClick={handlePrevious} disabled={isPreviousDisabled} className={buttonBaseClasses}>
        <Icon name="left" style={{ width: '20px', height: '20px' }} />
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

        const pageButtonClasses = [baseClasses, isSelected ? selectedClasses : unselectedClasses]
          .filter(Boolean)
          .join(' ');

        return (
          <button key={pageNum} onClick={() => onPageChange(pageNum)} className={pageButtonClasses}>
            {pageNum}
          </button>
        );
      })}

      <button onClick={handleNext} disabled={isNextDisabled} className={buttonBaseClasses}>
        <Icon name="right" style={{ width: '20px', height: '20px' }} />
      </button>
    </div>
  );
}

export default Pagination;
