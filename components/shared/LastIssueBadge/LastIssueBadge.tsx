import { LastIssueBadgeProps } from './LastIssueBadge.types';
import './LastIssueBadge.scss';

export default function LastIssueBadge({ className }: LastIssueBadgeProps) {
  return (
    <div className={`last-issue-badge ${className || ''}`}>
      <p className="last-issue-badge__text">Son Sayı</p>
    </div>
  );
}
