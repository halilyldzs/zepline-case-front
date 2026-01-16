import HeroContent from './HeroContent';

export default function Hero() {
  return (
    <div
      className="w-100 position-relative"
      style={{
        height: '750px',
        aspectRatio: '1728 / 750',
        backgroundImage: "url('/images/hero.png')",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'bottom top',
      }}
    >
      <div className="position-absolute" style={{ top: '265px', left: '144px' }}>
        <HeroContent />
      </div>
    </div>
  );
}
