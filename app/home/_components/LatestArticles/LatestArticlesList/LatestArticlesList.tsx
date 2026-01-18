import Button from '@/components/ui/Button';
import './LatestArticlesList.scss';

export default function LatestArticlesList() {
  return (
    <div className="latest-articles-list">
      <div className="latest-articles-list__header">
        <div className="latest-articles-list__title-wrapper">
          <h2 className="latest-articles-list__title">Profuture Teknoloji Dergisi</h2>
          <p className="latest-articles-list__subtitle">Güncel Yazılar</p>
        </div>
        <Button variant="outline" color="default" rightIcon="right">
          Tümünü Görüntüle
        </Button>
      </div>
    </div>
  );
}
