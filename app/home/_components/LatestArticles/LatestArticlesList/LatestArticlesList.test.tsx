import { render, screen } from '@testing-library/react';
import LatestArticlesList from './LatestArticlesList';
import { LatestArticlesCardProps } from './LatestArticlesCard/LatestArticlesCard.types';

jest.mock('./LatestArticlesCard', () => {
  return {
    __esModule: true,
    default: ({ data }: LatestArticlesCardProps) => (
      <div data-testid="latest-articles-card">{data.title}</div>
    ),
  };
});

describe('LatestArticlesList', () => {
  it('should render list wrapper with correct classes', () => {
    const { container } = render(<LatestArticlesList />);

    const list = container.querySelector('.latest-articles-list');
    expect(list).toBeInTheDocument();
  });

  it('should render header', () => {
    const { container } = render(<LatestArticlesList />);

    const header = container.querySelector('.latest-articles-list__header');
    expect(header).toBeInTheDocument();
  });

  it('should render title', () => {
    render(<LatestArticlesList />);

    const title = screen.getByText('Profuture Teknoloji Dergisi');
    expect(title).toBeInTheDocument();
    expect(title.tagName).toBe('H2');
  });

  it('should render subtitle', () => {
    render(<LatestArticlesList />);

    const subtitle = screen.getByText('Güncel Yazılar');
    expect(subtitle).toBeInTheDocument();
  });

  it('should render button with correct text', () => {
    render(<LatestArticlesList />);

    const button = screen.getByText('Tümünü Görüntüle');
    expect(button).toBeInTheDocument();
  });

  it('should render content wrapper', () => {
    const { container } = render(<LatestArticlesList />);

    const content = container.querySelector('.latest-articles-list__content');
    expect(content).toBeInTheDocument();
  });
});
