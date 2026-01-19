import Link from 'next/link';
import Icon from '@/components/ui/Icon';
import Button from '@/components/ui/Button';
import './HeaderNavMobile.scss';

export default function HeaderNavMobile() {
  return (
    <div className="header-nav-mobile">
      <Link href="/" className="header-nav-mobile__home-link" aria-label="Ana sayfaya git">
        <div className="header-nav-mobile__home-icon-wrapper">
          <Icon name="home" className="header-nav-mobile__home-icon" aria-hidden={true} />
        </div>
        <span className="header-nav-mobile__home-text">Ana Sayfa</span>
      </Link>

      <nav className="header-nav-mobile__nav" aria-label="Ana navigasyon">
        <div className="header-nav-mobile__nav-title">Navigasyon</div>
        <Link href="#" className="header-nav-mobile__link">
          <span>Amaç ve Kapsam</span>
          <Icon name="arrow-right" className="header-nav-mobile__link-icon" aria-hidden={true} />
        </Link>
        <Link href="#" className="header-nav-mobile__link">
          <span>Etik İlkeler ve Yayın Politikası</span>
          <Icon name="arrow-right" className="header-nav-mobile__link-icon" aria-hidden={true} />
        </Link>
        <Link href="#" className="header-nav-mobile__link">
          <span>Makale Çağrıları</span>
          <Icon name="arrow-right" className="header-nav-mobile__link-icon" aria-hidden={true} />
        </Link>
        <Link href="#" className="header-nav-mobile__link">
          <span>Sayılar</span>
          <Icon name="arrow-right" className="header-nav-mobile__link-icon" aria-hidden={true} />
        </Link>
        <Link href="#" className="header-nav-mobile__link">
          <span>İletişim</span>
          <Icon name="arrow-right" className="header-nav-mobile__link-icon" aria-hidden={true} />
        </Link>
      </nav>

      <div className="header-nav-mobile__actions">
        <div className="header-nav-mobile__actions-title">Hızlı Erişim</div>
        <Button
          variant="filled"
          color="primary"
          leftIcon="kurul"
          className="header-nav-mobile__button"
        >
          Dergi Kurulu
        </Button>
        <Button
          variant="filled"
          color="success"
          leftIcon="author"
          className="header-nav-mobile__button"
        >
          Yazar Rehberi
        </Button>
        <Button
          variant="outline"
          color="primary"
          leftIcon="search"
          className="header-nav-mobile__button"
        >
          Ara
        </Button>
      </div>
    </div>
  );
}
