import HeroContent from './HeroContent';
import HeroJournal from './HeroJournal';
import './Hero.scss';

export default function Hero() {
  return (
    <div>
      <div className="hero">
        <div className="hero__content-wrapper">
          <HeroContent />
        </div>
      </div>
      <HeroJournal />
    </div>
  );
}
