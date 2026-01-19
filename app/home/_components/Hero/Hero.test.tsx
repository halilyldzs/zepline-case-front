import { render, screen } from '@testing-library/react';
import Hero from './Hero';

describe('Hero', () => {
  it('should render hero wrapper with correct classes', () => {
    const { container } = render(<Hero />);

    const wrapper = container.querySelector('.hero-wrapper');
    expect(wrapper).toBeInTheDocument();
  });

  it('should render hero element with correct classes', () => {
    const { container } = render(<Hero />);

    const hero = container.querySelector('.hero');
    expect(hero).toBeInTheDocument();
  });

  it('should render hero content wrapper', () => {
    const { container } = render(<Hero />);

    const contentWrapper = container.querySelector('.hero__content-wrapper');
    expect(contentWrapper).toBeInTheDocument();
  });

  it('should render HeroContent component', () => {
    render(<Hero />);

    const title = screen.getByText('Profuture Teknoloji Dergisi Son Sayı Yayında');
    expect(title).toBeInTheDocument();
  });

  it('should render HeroJournal component', () => {
    render(<Hero />);

    const journalTitle = screen.getByText('Profuture Teknoloji Dergisi');
    expect(journalTitle).toBeInTheDocument();
  });
});
