import React from 'react';
import Image from 'next/image';

export default function LatestJournalCard() {
  return (
    <article className="latest-journal-card">
      <Image src="/images/latest-journal.png" alt="Latest Journal Card" width={428} height={641} />
    </article>
  );
}
