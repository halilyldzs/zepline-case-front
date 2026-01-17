import Image from 'next/image';
import Badge from '@/components/ui/Badge';
import './JournalIssueCard.scss';
import Icon from '@/components/ui/Icon';
import Button from '@/components/ui/Button';

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

        <div className="d-flex flex-column gap-3 w-100">
          <div className="d-flex align-items-center justify-content-between">
            <Icon name="pdf" className="journal-issue-card__pdf-icon" />
            <Badge variant="info">Yeni</Badge>
          </div>
          <Badge variant="soft">Dergi</Badge>

          <p className="journal-issue-card__title">Teknoloji ve Dijital Dergisi</p>

          <div className="d-flex align-items-center gap-4">
            <div className="d-flex align-items-center gap-2">
              <Icon name="cilt" className="journal-issue-card__icon" />
              <p className="journal-issue-card__info-text">
                Cilt: <strong>7</strong>
              </p>
            </div>
            <div className="d-flex align-items-center gap-2">
              <Icon name="number" className="journal-issue-card__icon" />
              <p className="journal-issue-card__info-text">
                Sayı: <strong>7</strong>
              </p>
            </div>
          </div>

          <div className="d-flex align-items-center gap-2">
            <Icon name="calendar" className="journal-issue-card__icon" />
            <p className="journal-issue-card__info-text">Haziran 2025</p>
          </div>

          <div className="d-flex align-items-center justify-content-end gap-2 mt-auto">
            <Button variant="filled" color="primary" shape="circle" rightIcon="eye" />
            <Button variant="outline" color="default" shape="circle" rightIcon="download" />
            <Button variant="outline" color="default" shape="circle" rightIcon="arrow-right" />
          </div>
        </div>
      </div>
    </article>
  );
}
