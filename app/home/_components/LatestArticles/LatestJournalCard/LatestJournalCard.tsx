'use client';

import React from 'react';
import Image from 'next/image';
import './LatestJournal.scss';
import IconButton from '@/components/ui/IconButton';
import Button from '@/components/ui/Button';
import LastIssueBadge from '@/components/shared/LastIssueBadge';

export default function LatestJournalCard() {
  return (
    <article className="latest-journal-card">
      <LastIssueBadge className="latest-journal-card__last-issue-badge" />
      <div className="latest-journal-card__content-wrapper">
        <Image
          src="/images/last-journal-image.png"
          alt="Son dergi sayısı kapağı"
          width={428}
          height={641}
          priority
          className="latest-journal-card__image"
        />

        <div className="latest-journal-card__buttons">
          <IconButton icon="download" variant="outline" color="default" ariaLabel="İndir" />
          <Button leftIcon="eye" variant="filled" color="primary">
            Görüntüle
          </Button>
        </div>
      </div>
    </article>
  );
}
