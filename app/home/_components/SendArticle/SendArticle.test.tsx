import { render, screen } from "@testing-library/react";
import SendArticle from "./SendArticle";

describe('SendArticle', () => {
  it('should render first image with correct attributes', () => {
    render(<SendArticle />);

    const image = screen.getByTestId('send-article-image');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', '/images/article-journals.png');
    expect(image).toHaveAttribute('alt', 'Makale gönderme bölümü dekoratif görsel');
    expect(image).toHaveAttribute('width', '514');
    expect(image).toHaveAttribute('height', '439');
    expect(image).toHaveAttribute('role', 'presentation');
  });

  it('should render second image with correct attributes', () => {
    render(<SendArticle />);

    const images = screen.getAllByRole('presentation');
    const secondImage = images[1];
    expect(secondImage).toBeInTheDocument();
    expect(secondImage).toHaveAttribute('src', '/images/send-article2.png');
    expect(secondImage).toHaveAttribute('alt', 'Makale gönderme bölümü dekoratif görsel');
    expect(secondImage).toHaveAttribute('width', '306');
    expect(secondImage).toHaveAttribute('height', '465');
  });

  it('should render section with correct classes', () => {
    const { container } = render(<SendArticle />);

    const section = container.querySelector('section');
    expect(section).toHaveClass('send-article', 'container');
  });

  it('should render content wrapper', () => {
    const { container } = render(<SendArticle />);

    const wrapper = container.querySelector('.send-article__content-wrapper');
    expect(wrapper).toBeInTheDocument();
  });
});
