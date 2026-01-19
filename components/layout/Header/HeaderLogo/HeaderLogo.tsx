import Image from 'next/image';
import './HeaderLogo.scss';

export default function HeaderLogo() {
  return (
    <div className="header-logo d-flex align-items-center justify-content-center">
      <Image
        src="/images/header-logo.png"
        alt="Profuture Logo"
        width={281}
        height={91}
        className="header-logo__image"
        quality={100}
        priority
      />
    </div>
  );
}
