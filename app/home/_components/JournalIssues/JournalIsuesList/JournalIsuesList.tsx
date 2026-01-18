import JournalIssueCard from './JournalIssueCard';
import './JournalIsuesList.scss';
import { journalIssuesData } from './_mocks/journalIssuesData';

export default function JournalIsuesList() {
  return (
    <section className="row journal-issues-list">
      {journalIssuesData.map((data, index) => (
        <div key={index} className="col-12 col-md-6 col-lg-6 col-xl-4">
          <JournalIssueCard data={data} />
        </div>
      ))}
    </section>
  );
}
