import { render, screen } from '@testing-library/react';
import HeroContent from './HeroContent';

describe('HeroContent', () => {
  it('should render hero content with correct classes', () => {
    const { container } = render(<HeroContent />);

    const heroContent = container.querySelector('.hero-content');
    expect(heroContent).toBeInTheDocument();
  });

  it('should render title', () => {
    render(<HeroContent />);

    const title = screen.getByText('Profuture Teknoloji Dergisi Son Sayı Yayında');
    expect(title).toBeInTheDocument();
    expect(title.tagName).toBe('H1');
    expect(title).toHaveClass('hero-content__title');
  });

  it('should render description', () => {
    render(<HeroContent />);

    const description = screen.getByText(
      /Protufure teknoloji mekanizmaları değişikliği alanlarında özgün akademik çalışmalar içeren/
    );
    expect(description).toBeInTheDocument();
    expect(description.tagName).toBe('P');
  });

  it('should render info group', () => {
    const { container } = render(<HeroContent />);

    const infoGroup = container.querySelector('.hero-content__info-group');
    expect(infoGroup).toBeInTheDocument();
  });

  it('should render cilt info item', () => {
    render(<HeroContent />);

    const ciltText = screen.getByText(/Cilt:/);
    expect(ciltText).toBeInTheDocument();
    expect(ciltText).toHaveTextContent('Cilt: 2');
  });

  it('should render sayı info item', () => {
    render(<HeroContent />);

    const sayiText = screen.getByText(/Sayı:/);
    expect(sayiText).toBeInTheDocument();
    expect(sayiText).toHaveTextContent('Sayı: 7');
  });

  it('should render date info item', () => {
    render(<HeroContent />);

    const dateText = screen.getByText('Haziran 2025');
    expect(dateText).toBeInTheDocument();
  });

  it('should render all info items', () => {
    const { container } = render(<HeroContent />);

    const infoItems = container.querySelectorAll('.hero-content__info-item');
    expect(infoItems).toHaveLength(3);
  });

  it('should render button with correct text', () => {
    render(<HeroContent />);

    const button = screen.getByText('Dergi Görüntüle');
    expect(button).toBeInTheDocument();
  });
});
