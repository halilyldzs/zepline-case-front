import Image from 'next/image';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import { JournalIssueCardProps } from './JournalIssueCard.types';
import './JournalIssueCard.scss';

export default function JournalIssueCard({
  image = '/images/journal-image.png',
  badge = 'Sayı 1',
  title = 'Profuture Teknoloji Dergisi',
  description = 'Dergi içeriği ve makaleler hakkında detaylı bilgiler...',
  date = '2024',
  issueNumber = 'Vol. 1',
  className,
}: JournalIssueCardProps) {
  return (
    <article className={`journal-issue-card ${className || ''}`}>
      <Image
        src={image}
        alt={title}
        width={300}
        height={400}
        className="journal-issue-card__image"
      />
    </article>
  );
}
