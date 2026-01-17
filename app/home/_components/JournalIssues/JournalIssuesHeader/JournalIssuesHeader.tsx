'use client';
import './JournalIssuesHeader.scss';
import PrevButton from '@/components/ui/Pagination/PrevButton';
import NextButton from '@/components/ui/Pagination/NextButton';
import Button from '@/components/ui/Button';

export default function JournalIssuesHeader() {
  const handlePrevious = () => {
    console.log('Previous clicked');
  };

  const handleNext = () => {
    console.log('Next clicked');
  };

  return (
    <div className="journal-issues-header">
      <div className="journal-issues-header__title-container">
        <div className="journal-issues-header__title-wrapper">
          <h2 className="journal-issues-header__title">Sayılar</h2>
          <p className="journal-issues-header__subtitle">Dergi Sayıları</p>
        </div>
        <div className="journal-issues-header__pagination-buttons">
          <PrevButton onClick={handlePrevious} disabled={true} />
          <NextButton onClick={handleNext} />
        </div>
      </div>

      <Button
        variant="outline"
        color="default"
        rightIcon="right"
        className="journal-issues-header__button"
      >
        Tümünü Görüntüle
      </Button>
    </div>
  );
}
