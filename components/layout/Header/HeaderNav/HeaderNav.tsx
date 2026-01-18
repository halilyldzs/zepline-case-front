import Link from 'next/link';
import Icon from '@/components/ui/Icon';
import Button from '@/components/ui/Button';
import IconButton from '@/components/ui/IconButton';
import './HeaderNav.scss';

export default function HeaderNav() {
  return (
    <div className="header-nav flex-grow-1 d-flex align-items-center justify-content-between h-100 px-4">
      <Link href="/" className="d-flex align-items-center justify-content-center">
        <Icon name="home" className="home-icon" />
      </Link>

      <nav className="header-nav__links d-flex align-items-center">
        <Link href="#" className="header-nav-link">
          Amaç ve Kapsam
        </Link>
        <Link href="#" className="header-nav-link">
          Etik İlkeler ve Yayın Politikası
        </Link>
        <Link href="#" className="header-nav-link">
          Makale Çağrıları
        </Link>
        <Link href="#" className="header-nav-link">
          Sayılar
        </Link>
        <Link href="#" className="header-nav-link">
          İletişim
        </Link>
      </nav>

      <div className="header-nav__actions d-flex align-items-center">
        <Button variant="filled" color="primary" leftIcon="kurul">
          Dergi Kurulu
        </Button>
        <Button variant="filled" color="success" leftIcon="author">
          Yazar Rehberi
        </Button>
        <IconButton icon="search" variant="outline" color="primary" />
      </div>
    </div>
  );
}
