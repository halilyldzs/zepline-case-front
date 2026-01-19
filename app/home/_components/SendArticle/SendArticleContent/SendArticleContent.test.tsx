import { render, screen } from '@testing-library/react';
import SendArticleContent from './SendArticleContent';

describe('SendArticleContent', () => {
  it('should render content wrapper with correct classes', () => {
    const { container } = render(<SendArticleContent />);

    const content = container.querySelector('.send-article-content');
    expect(content).toBeInTheDocument();
  });

  it('should render title', () => {
    render(<SendArticleContent />);

    const title = screen.getByText('Makale Çağrısı');
    expect(title).toBeInTheDocument();
    expect(title.tagName).toBe('H2');
    expect(title).toHaveClass('send-article-content__title');
  });

  it('should render subtitle', () => {
    render(<SendArticleContent />);

    const subtitle = screen.getByText('Türkiye Ulusal Dijital Veri ve Altyapıları');
    expect(subtitle).toBeInTheDocument();
    expect(subtitle.tagName).toBe('P');
  });

  it('should render description', () => {
    render(<SendArticleContent />);

    const description = screen.getByText(
      /Bu dosya kapsamında; ulusal ölçekte dijital veri yönetimi/
    );
    expect(description).toBeInTheDocument();
  });

  it('should render button with correct text', () => {
    render(<SendArticleContent />);

    const button = screen.getByText('Makale Gönder');
    expect(button).toBeInTheDocument();
  });
});
