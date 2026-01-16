import Image from 'next/image';

export default function HeaderLogo() {
  return (
    <div
      className="flex items-center justify-center h-[135px]"
      style={{
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
