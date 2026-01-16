import Icon from '@/components/ui/Icon';

export default function HeaderTop() {
  return (
    <div
      className="flex items-center justify-between px-8 text-white text-[17px] -ml-8"
      style={{
        aspectRatio: '1380.84 / 44',
        backgroundImage: "url('/svg/header-subtract.svg')",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="flex items-center gap-3 px-4">
        <Icon name="email" className="w-5 h-5" />
        <span>profuture@gmail.com</span>
      </div>

      <div className="flex items-center gap-5">
        <span>
          <span className="font-normal">ISSN: </span>
          <span className="font-bold">345-255</span>
        </span>
        <span>
          <span className="font-normal">Başlangıç </span>
          <span className="font-bold">2025</span>
        </span>
        <span>
          <span className="font-normal">Periyot: </span>
          <span className="font-bold">Yılda 2 Sayı</span>
        </span>
      </div>
    </div>
  );
}
