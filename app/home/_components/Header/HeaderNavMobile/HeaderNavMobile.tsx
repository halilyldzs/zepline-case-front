import Link from 'next/link';
import Icon from '@/components/ui/Icon';
import Button from '@/components/ui/Button';
import IconButton from '@/components/ui/IconButton';
import './HeaderNavMobile.scss';

export default function HeaderNavMobile() {
  return (
    <div className="header-nav-mobile">
      <Link href="/" className="header-nav-mobile__home-link">
        <Icon name="home" className="header-nav-mobile__home-icon" />
        <span>Ana Sayfa</span>
      </Link>

      <nav className="header-nav-mobile__nav">
        <Link href="#" className="header-nav-mobile__link">
          Amaç ve Kapsam
        </Link>
        <Link href="#" className="header-nav-mobile__link">
          Etik İlkeler ve Yayın Politikası
        </Link>
        <Link href="#" className="header-nav-mobile__link">
          Makale Çağrıları
        </Link>
        <Link href="#" className="header-nav-mobile__link">
          Sayılar
        </Link>
        <Link href="#" className="header-nav-mobile__link">
          İletişim
        </Link>
      </nav>

      <div className="header-nav-mobile__actions">
        <Button variant="filled" color="primary" leftIcon="kurul" className="header-nav-mobile__button">
          Dergi Kurulu
        </Button>
        <Button variant="filled" color="success" leftIcon="author" className="header-nav-mobile__button">
          Yazar Rehberi
        </Button>
        <IconButton icon="search" variant="outline" color="primary" className="header-nav-mobile__search-button" />
      </div>
    </div>
  );
}
