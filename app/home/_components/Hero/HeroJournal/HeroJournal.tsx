import Image from 'next/image';
import Button from '@/components/ui/Button';
import './HeroJournal.scss';

export default function HeroJournal() {
  return (
    <section className="hero-journal">
      <div className="container hero-journal__container">
        <div className="hero-journal__content">
          <h2 className="hero-journal__subtitle">Dergi Amacı ve Kapsamı</h2>
          <h3 className="hero-journal__title">Profuture Teknoloji Dergisi</h3>
          <p className="hero-journal__description">
            Profuture Teknoloji Dergisi, 2022 yılında yayın hayatına başlayan; teknoloji, inovasyon,
            dijital dönüşüm ve geleceğin üretim modelleri ekseninde sosyal bilimler ile mühendislik
            ve fen bilimlerini bir araya getiren, uluslararası hakemli ve açık erişimli bir akademik
            yayındır.
          </p>
          <Button
            variant="outline"
            color="primary"
            rightIcon="right"
            className="hero-journal__button"
          >
            Detay
          </Button>
        </div>

        <div className="hero-journal__image-wrapper">
          <Image
            src="/images/dergi.png"
            alt="Profuture Teknoloji Dergisi"
            width={739}
            height={696}
            className="hero-journal__image"
            priority
          />
        </div>
      </div>
    </section>
  );
}
