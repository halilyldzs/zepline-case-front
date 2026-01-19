import { render } from '@testing-library/react';
import LatestArticles from './LatestArticles';

describe('LatestArticles', () => {
  it('should render section with correct classes', () => {
    const { container } = render(<LatestArticles />);

    const section = container.querySelector('section');
    expect(section).toHaveClass('latest-articles', 'container');
  });

  it('should render content wrapper', () => {
    const { container } = render(<LatestArticles />);

    const wrapper = container.querySelector('.latest-articles__content-wrapper');
    expect(wrapper).toBeInTheDocument();
  });
});
