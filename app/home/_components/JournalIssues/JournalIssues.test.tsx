import { render } from '@testing-library/react';
import JournalIssues from './JournalIssues';


describe('JournalIssues', () => {
  it('should render section with correct classes', () => {
    const { container } = render(<JournalIssues />);

    const section = container.querySelector('section');
    expect(section).toHaveClass('journal-issues');
  });
});