import { render, screen } from '@testing-library/react';
import HeroJournal from './HeroJournal';

describe('HeroJournal', () => {
  it('should render section with correct classes', () => {
    const { container } = render(<HeroJournal />);

    const section = container.querySelector('section');
    expect(section).toHaveClass('hero-journal');
  });

  it('should render container with correct classes', () => {
    const { container } = render(<HeroJournal />);

    const containerElement = container.querySelector('.hero-journal__container');
    expect(containerElement).toBeInTheDocument();
    expect(containerElement).toHaveClass('container', 'hero-journal__container');
  });

  it('should render content wrapper', () => {
    const { container } = render(<HeroJournal />);

    const content = container.querySelector('.hero-journal__content');
    expect(content).toBeInTheDocument();
  });

  it('should render subtitle', () => {
    render(<HeroJournal />);

    const subtitle = screen.getByText('Dergi Amacı ve Kapsamı');
    expect(subtitle).toBeInTheDocument();
    expect(subtitle.tagName).toBe('H2');
  });

  it('should render title', () => {
    render(<HeroJournal />);

    const title = screen.getByText('Profuture Teknoloji Dergisi');
    expect(title).toBeInTheDocument();
    expect(title.tagName).toBe('H3');
  });

  it('should render description', () => {
    render(<HeroJournal />);

    const description = screen.getByText(
      /Profuture Teknoloji Dergisi, 2022 yılında yayın hayatına başlayan/
    );
    expect(description).toBeInTheDocument();
  });

  it('should render button with correct text', () => {
    render(<HeroJournal />);

    const button = screen.getByText('Detay');
    expect(button).toBeInTheDocument();
  });

  it('should render image with correct attributes', () => {
    render(<HeroJournal />);

    const image = screen.getByAltText('Profuture Teknoloji Dergisi');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', '/images/dergi.png');
    expect(image).toHaveAttribute('width', '739');
    expect(image).toHaveAttribute('height', '696');
  });

  it('should render image wrapper', () => {
    const { container } = render(<HeroJournal />);

    const imageWrapper = container.querySelector('.hero-journal__image-wrapper');
    expect(imageWrapper).toBeInTheDocument();
  });
});
