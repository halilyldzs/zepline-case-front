import { render, screen } from '@testing-library/react';
import JournalIssueCard from './JournalIssueCard';
import { JournalIssueCardData } from './JournalIssueCard.types';

const mockData: JournalIssueCardData = {
  image: '/images/journal-image.png',
  badge: 'Yeni',
  title: 'Teknoloji ve Dijital Dergisi',
  volume: 7,
  issue: 7,
  date: 'Haziran 2025',
  isLast: false,
};

describe('JournalIssueCard', () => {
  it('should render article with correct classes', () => {
    const { container } = render(<JournalIssueCard data={mockData} />);

    const article = container.querySelector('article');
    expect(article).toBeInTheDocument();
    expect(article).toHaveClass('journal-issue-card');
  });

  it('should render title', () => {
    render(<JournalIssueCard data={mockData} />);

    const title = screen.getByText('Teknoloji ve Dijital Dergisi');
    expect(title).toBeInTheDocument();
  });

  it('should render badge', () => {
    render(<JournalIssueCard data={mockData} />);

    const badge = screen.getByText('Yeni');
    expect(badge).toBeInTheDocument();
  });

  it('should render volume information', () => {
    render(<JournalIssueCard data={mockData} />);

    const volumeText = screen.getByText(/Cilt:/);
    expect(volumeText).toBeInTheDocument();
    expect(volumeText).toHaveTextContent('Cilt: 7');
  });

  it('should render issue information', () => {
    render(<JournalIssueCard data={mockData} />);

    const issueText = screen.getByText(/Sayı:/);
    expect(issueText).toBeInTheDocument();
    expect(issueText).toHaveTextContent('Sayı: 7');
  });

  it('should render date', () => {
    render(<JournalIssueCard data={mockData} />);

    const date = screen.getByText('Haziran 2025');
    expect(date).toBeInTheDocument();
  });

  it('should render image with correct attributes', () => {
    render(<JournalIssueCard data={mockData} />);

    const image = screen.getByAltText('Teknoloji ve Dijital Dergisi dergi kapağı');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', '/images/journal-image.png');
    expect(image).toHaveAttribute('width', '191.32');
    expect(image).toHaveAttribute('height', '285');
  });

  it('should render LastIssueBadge when isLast is true', () => {
    const lastIssueData: JournalIssueCardData = {
      ...mockData,
      isLast: true,
    };

    const { container } = render(<JournalIssueCard data={lastIssueData} />);

    const lastIssueBadge = container.querySelector('.last-issue-badge');
    expect(lastIssueBadge).toBeInTheDocument();
  });

  it('should not render LastIssueBadge when isLast is false', () => {
    const { container } = render(<JournalIssueCard data={mockData} />);

    const lastIssueBadge = container.querySelector('.last-issue-badge');
    expect(lastIssueBadge).not.toBeInTheDocument();
  });
});
