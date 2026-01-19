import { render, screen } from '@testing-library/react';
import LatestJournalCard from './LatestJournalCard';

describe('LatestJournalCard', () => {
  it('should render article with correct classes', () => {
    const { container } = render(<LatestJournalCard />);

    const article = container.querySelector('article');
    expect(article).toHaveClass('latest-journal-card');
  });

  it('should render image with correct attributes', () => {
    render(<LatestJournalCard />);

    const image = screen.getByAltText('Son dergi sayısı kapağı');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', '/images/last-journal-image.png');
    expect(image).toHaveAttribute('width', '428');
    expect(image).toHaveAttribute('height', '641');
  });

  it('should render button with correct text', () => {
    render(<LatestJournalCard />);

    const button = screen.getByText('Görüntüle');
    expect(button).toBeInTheDocument();
  });

  it('should render content wrapper', () => {
    const { container } = render(<LatestJournalCard />);

    const wrapper = container.querySelector('.latest-journal-card__content-wrapper');
    expect(wrapper).toBeInTheDocument();
  });
});
