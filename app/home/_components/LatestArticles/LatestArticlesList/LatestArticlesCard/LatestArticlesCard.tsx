import Badge from '@/components/ui/Badge';
import Icon from '@/components/ui/Icon';
import IconButton from '@/components/ui/IconButton';
import Button from '@/components/ui/Button';
import { LatestArticlesCardProps } from './LatestArticlesCard.types';
import './LatestArticlesCard.scss';

export default function LatestArticlesCard({ data }: LatestArticlesCardProps) {
  return (
    <article className="latest-articles-card">
      <div className="latest-articles-card__content">
        <div className="latest-articles-card__left">
          <div className="latest-articles-card__badges">
            {data.categories.map((category, index) => (
              <Badge
                key={index}
                variant={index === 0 ? 'primary' : 'soft'}
                className="latest-articles-card__badge"
              >
                {category}
              </Badge>
            ))}
          </div>

          <div className="latest-articles-card__title-wrapper">
            <Icon name="pdf" className="latest-articles-card__pdf-icon" />
            <h3 className="latest-articles-card__title">{data.title}</h3>
          </div>

          <div className="latest-articles-card__info">
            <div className="latest-articles-card__info-item">
              <Icon name="number" className="latest-articles-card__info-icon" />
              <span className="latest-articles-card__info-text">
                Sayfa: {data.pageRange.start}-{data.pageRange.end}
              </span>
            </div>

            <div className="latest-articles-card__info-item">
              <Icon name="author" className="latest-articles-card__info-icon" />
              <span className="latest-articles-card__info-text">{data.authors.join(', ')}</span>
            </div>
          </div>
        </div>

        <div className="latest-articles-card__actions">
          <IconButton icon="email" variant="outline" color="default" />
          <IconButton icon="download" variant="outline" color="default" />
          <Button
            leftIcon="eye"
            variant="filled"
            color="primary"
            className="latest-articles-card__view-button"
          >
            Görüntüle
          </Button>
        </div>
      </div>
    </article>
  );
}
