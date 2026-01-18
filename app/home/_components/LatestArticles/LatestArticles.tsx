import React from 'react';
import LatestJournalCard from './LatestJournalCard';

export default function LatestArticles() {
  return (
    <section className="latest-articles container">
      <div className="latest-articles__content-wrapper">
        <LatestJournalCard />
      </div>
    </section>
  );
}
