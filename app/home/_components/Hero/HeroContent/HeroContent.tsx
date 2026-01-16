import Button from '@/components/ui/Button';
import Icon from '@/components/ui/Icon';

export default function HeroContent() {
  return (
    <div className="w-[397px] h-[316px] flex flex-col gap-[17px] container">
      <h1 className="text-hero-title text-[32px] leading-[40px] font-bold">
        Profuture Teknoloji Dergisi Son Sayı Yayında
      </h1>
      <p className="text-white text-lg leading-[25px] font-medium">
        Protufure teknoloji mekanizmaları değişikliği alanlarında özgün akademik çalışmalar içeren
        yeni sayıya şimdi erişin.
      </p>

      <div className="flex items-center gap-10">
        <div className="flex items-center gap-2">
          <Icon name="cilt" className="w-[17px] h-[17px] text-white" />
          <p className="text-white text-base leading-[18px] font-medium">
            Cilt: <strong>2</strong>
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Icon name="cilt" className="w-[17px] h-[17px] text-white" />
          <p className="text-white text-base leading-[18px] font-medium">
            Sayı: <strong>7</strong>
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Icon name="calendar" className="w-[17px] h-[17px] text-white" />
          <p className="text-white text-base leading-[18px] font-bold">Haziran 2025</p>
        </div>
      </div>

      <Button variant="filled" color="primary" rightIcon="right" className="mt-auto">
        Dergi Görüntüle
      </Button>
    </div>
  );
}
