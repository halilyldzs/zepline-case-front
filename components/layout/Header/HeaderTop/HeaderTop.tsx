import Icon from '@/components/ui/Icon';
import './HeaderTop.scss';

export default function HeaderTop() {
  return (
    <div
      className="header-top d-flex align-items-center justify-content-between px-4 text-white"
      style={{
        fontSize: '1.0625rem',
        marginLeft: '-2rem',
        aspectRatio: '1380.84 / 44',
        backgroundImage: "url('/svg/header-subtract.svg')",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="d-flex align-items-center px-4" style={{ gap: '0.75rem' }}>
        <Icon name="email" className="text-white" style={{ width: '1.25rem', height: '1.25rem' }} />
        <span>profuture@gmail.com</span>
      </div>

      <div className="d-flex align-items-center" style={{ gap: '1.25rem' }}>
        <span>
          <span className="fw-normal">ISSN: </span>
          <span className="fw-bold">345-255</span>
        </span>
        <span>
          <span className="fw-normal">Başlangıç </span>
          <span className="fw-bold">2025</span>
        </span>
        <span>
          <span className="fw-normal">Periyot: </span>
          <span className="fw-bold">Yılda 2 Sayı</span>
        </span>
      </div>
    </div>
  );
}
