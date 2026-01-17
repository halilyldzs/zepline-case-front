export interface JournalIssueCardData {
  image?: string;
  badge?: string;
  title: string;
  volume?: number;
  issue?: number;
  date?: string;
  isLast?: boolean;
}

export interface JournalIssueCardProps {
  data: JournalIssueCardData;
}
