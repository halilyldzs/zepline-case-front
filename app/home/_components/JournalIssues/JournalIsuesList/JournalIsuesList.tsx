import JournalIssueCard from './JournalIssueCard';
import './JournalIsuesList.scss';

export default function JournalIsuesList() {
  return (
    <section className="row journal-issues-list">
      <div className="col-12 col-md-6 col-lg-3">
        <JournalIssueCard />
      </div>
      <div className="col-12 col-md-6 col-lg-3">
        <JournalIssueCard />
      </div>
      <div className="col-12 col-md-6 col-lg-3">
        <JournalIssueCard />
      </div>
    </section>
  );
}
