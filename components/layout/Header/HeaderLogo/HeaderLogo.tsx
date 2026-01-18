import Image from 'next/image';
import './HeaderLogo.scss';

export default function HeaderLogo() {
  return (
    <div
      className="header-logo d-flex align-items-center justify-content-center"
      style={{
        height: '8.4375rem',
        aspectRatio: '381 / 135',
        backgroundImage: "url('/svg/header-reactangle.svg')",
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'left top',
      }}
    >
      <Image
        src="/images/header-logo.png"
        alt="Profuture Logo"
        width={281}
        height={91}
        className="object-contain"
        style={{ aspectRatio: '281 / 91' }}
        quality={100}
        priority
      />
    </div>
  );
}
