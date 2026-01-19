import { render } from '@testing-library/react';
import JournalIsuesList from './JournalIsuesList';
import { JournalIssueCardProps } from './JournalIssueCard/JournalIssueCard.types';
import { journalIssuesData } from './_mocks/journalIssuesData';

jest.mock('./JournalIssueCard', () => {
  return {
    __esModule: true,
    default: ({ data }: JournalIssueCardProps) => (
      <div data-testid="journal-issue-card">{data.title}</div>
    ),
  };
});

describe('JournalIsuesList', () => {
  it('should render section with correct classes', () => {
    const { container } = render(<JournalIsuesList />);

    const section = container.querySelector('section');
    expect(section).toHaveClass('journal-issues-list');
  });

  it('should render all journal issues', () => {
    const { container } = render(<JournalIsuesList />);

    const journalIssues = container.querySelectorAll('[data-testid="journal-issue-card"]');
    expect(journalIssues).toHaveLength(journalIssuesData.length);
    
    journalIssues.forEach((journalIssue, index) => {
      expect(journalIssue).toBeInTheDocument();
      expect(journalIssue).toHaveTextContent(journalIssuesData[index].title);
    });
  });
});