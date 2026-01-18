import React from 'react';
import LatestJournalCard from './LatestJournalCard';
import LatestArticlesList from './LatestArticlesList';
import './LatestArticles.scss';

export default function LatestArticles() {
  return (
    <section className="latest-articles container">
      <div className="latest-articles__content-wrapper">
        <LatestJournalCard />
        <LatestArticlesList />
      </div>
    </section>
  );
}
