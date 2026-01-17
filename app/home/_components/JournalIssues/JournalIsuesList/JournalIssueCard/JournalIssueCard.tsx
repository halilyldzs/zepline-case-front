import Image from 'next/image';
import Badge from '@/components/ui/Badge';
import './JournalIssueCard.scss';
import Icon from '@/components/ui/Icon';

export default function JournalIssueCard() {
  return (
    <article className="journal-issue-card">
      <div className="journal-issue-card__wrapper">
        <Image
          src="/images/journal-image.png"
          alt="Journal Image"
          width={191.32}
          height={285}
          priority
          className="journal-issue-card__image"
        />

        <div className="d-flex flex-column gap-2 w-100">
          <div className="d-flex align-items-center justify-content-between">
            <Icon name="pdf" className="journal-issue-card__icon" />
            <Badge variant="info">Yeni</Badge>
          </div>
        </div>
      </div>
    </article>
  );
}
