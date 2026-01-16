import Button from '@/components/ui/Button';
import Icon from '@/components/ui/Icon';
import './HeroContent.scss';

export default function HeroContent() {
  return (
    <div className="hero-content">
      <h1 className="hero-content__title">Profuture Teknoloji Dergisi Son Sayı Yayında</h1>
      <p className="hero-content__description">
        Protufure teknoloji mekanizmaları değişikliği alanlarında özgün akademik çalışmalar içeren
        yeni sayıya şimdi erişin.
      </p>

      <div className="hero-content__info-group">
        <div className="hero-content__info-item">
          <Icon name="cilt" className="hero-content__icon" />
          <p className="hero-content__info-text">
            Cilt: <strong>2</strong>
          </p>
        </div>
        <div className="hero-content__info-item">
          <Icon name="cilt" className="hero-content__icon" />
          <p className="hero-content__info-text">
            Sayı: <strong>7</strong>
          </p>
        </div>
        <div className="hero-content__info-item">
          <Icon name="calendar" className="hero-content__icon" />
          <p className="hero-content__date-text">Haziran 2025</p>
        </div>
      </div>

      <Button variant="filled" color="primary" rightIcon="right" className="hero-content__button">
        Dergi Görüntüle
      </Button>
    </div>
  );
}
