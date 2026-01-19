import { render, screen } from '@testing-library/react';
import LatestArticlesCard from './LatestArticlesCard';
import { LatestArticlesListData } from '../mocks/data';

const mockData: LatestArticlesListData = {
  id: '1',
  categories: ['İklim', 'Araştırma Makalesi'],
  title: "Türkiye'nin Teknoloji Politikaları ve Döngüsel Ekonomi",
  pageRange: {
    start: 12,
    end: 28,
  },
  authors: ['Elif Başkaya Acar', 'Emre Taran', 'Halil Başar'],
};

describe('LatestArticlesCard', () => {
  it('should render article with correct classes', () => {
    const { container } = render(<LatestArticlesCard data={mockData} />);

    const article = container.querySelector('article');
    expect(article).toBeInTheDocument();
    expect(article).toHaveClass('latest-articles-card');
  });

  it('should render title', () => {
    render(<LatestArticlesCard data={mockData} />);

    const title = screen.getByText("Türkiye'nin Teknoloji Politikaları ve Döngüsel Ekonomi");
    expect(title).toBeInTheDocument();
    expect(title.tagName).toBe('H3');
  });

  it('should render all categories as badges', () => {
    render(<LatestArticlesCard data={mockData} />);

    mockData.categories.forEach((category) => {
      const badge = screen.getByText(category);
      expect(badge).toBeInTheDocument();
    });
  });

  it('should render page range information', () => {
    render(<LatestArticlesCard data={mockData} />);

    const pageInfo = screen.getByLabelText(`Sayfa ${mockData.pageRange.start}-${mockData.pageRange.end}`);
    expect(pageInfo).toBeInTheDocument();
  });

  it('should render authors information', () => {
    render(<LatestArticlesCard data={mockData} />);

    const authorsInfo = screen.getByLabelText(`Yazarlar: ${mockData.authors.join(', ')}`);
    expect(authorsInfo).toBeInTheDocument();
  });

  it('should render button with correct text', () => {
    render(<LatestArticlesCard data={mockData} />);

    const button = screen.getByText('Görüntüle');
    expect(button).toBeInTheDocument();
  });

  it('should render content wrapper', () => {
    const { container } = render(<LatestArticlesCard data={mockData} />);

    const content = container.querySelector('.latest-articles-card__content');
    expect(content).toBeInTheDocument();
  });

  it('should render actions wrapper', () => {
    const { container } = render(<LatestArticlesCard data={mockData} />);

    const actions = container.querySelector('.latest-articles-card__actions');
    expect(actions).toBeInTheDocument();
  });
});
