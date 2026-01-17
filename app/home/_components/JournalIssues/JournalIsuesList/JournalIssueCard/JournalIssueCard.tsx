import Image from 'next/image';
import Badge from '@/components/ui/Badge';
import './JournalIssueCard.scss';
import Icon from '@/components/ui/Icon';
import IconButton from '@/components/ui/IconButton';
import { JournalIssueCardProps } from './JournalIssueCard.types';

export default function JournalIssueCard({ data }: JournalIssueCardProps) {
  return (
    <article className="journal-issue-card">
      {data.isLast && (
        <div className="journal-issue-card__last-item">
          <p className="journal-issue-card__last-item-text">Son Sayı</p>
        </div>
      )}
      <div className="journal-issue-card__wrapper">
        <Image
          src={data.image || '/images/journal-image.png'}
          alt={data.title || 'Journal Image'}
          width={191.32}
          height={285}
          priority
          className="journal-issue-card__image"
        />

        <div className="d-flex flex-column gap-3 w-100">
          <div className="d-flex align-items-center justify-content-between">
            <Icon name="pdf" className="journal-issue-card__pdf-icon" />
            <Badge variant="info">{data.badge}</Badge>
          </div>
          <Badge variant="soft">Dergi</Badge>

          <p className="journal-issue-card__title">{data.title}</p>

          <div className="d-flex align-items-center gap-4">
            <div className="d-flex align-items-center gap-2">
              <Icon name="cilt" className="journal-issue-card__icon" />
              <p className="journal-issue-card__info-text">
                Cilt: <strong>{data.volume}</strong>
              </p>
            </div>
            <div className="d-flex align-items-center gap-2">
              <Icon name="number" className="journal-issue-card__icon" />
              <p className="journal-issue-card__info-text">
                Sayı: <strong>{data.issue}</strong>
              </p>
            </div>
          </div>

          <div className="d-flex align-items-center gap-2">
            <Icon name="calendar" className="journal-issue-card__icon" />
            <p className="journal-issue-card__info-text">{data.date}</p>
          </div>

          <div className="journal-issue-card__buttons">
            <IconButton icon="eye" variant="filled" color="primary" />
            <IconButton icon="download" variant="outline" color="default" />
            <IconButton icon="right" variant="outline" color="default" />
          </div>
        </div>
      </div>
    </article>
  );
}
