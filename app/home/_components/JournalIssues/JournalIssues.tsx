import React from 'react';
import JournalIssuesHeader from './JournalIssuesHeader';
import './JournalIssues.scss';
import JournalIsuesList from './JournalIsuesList';

export default function JournalIssues() {
  return (
    <section className="journal-issues">
      <div className="container journal-issues__container">
        <JournalIssuesHeader />
        <JournalIsuesList />
      </div>
    </section>
  );
}
