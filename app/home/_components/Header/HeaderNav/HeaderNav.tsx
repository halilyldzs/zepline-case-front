import Link from 'next/link';
import Icon from '@/components/ui/Icon';
import Button from '@/components/ui/Button';
import './HeaderNav.scss';

export default function HeaderNav() {
  return (
    <div className="flex-grow-1 d-flex align-items-center justify-content-between h-100 px-4">
      <Link href="/" className="d-flex align-items-center justify-content-center">
        <Icon name="home" className="home-icon" />
      </Link>

      <nav className="d-flex align-items-center" style={{ gap: '1.5rem' }}>
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

      <div className="d-flex align-items-center" style={{ gap: '0.5rem' }}>
        <Button variant="filled" color="primary" leftIcon="kurul">
          Dergi Kurulu
        </Button>
        <Button variant="filled" color="success" leftIcon="author">
          Yazar Rehberi
        </Button>
        <Button variant="outline" color="primary" shape="circle" leftIcon="search" />
      </div>
    </div>
  );
}
