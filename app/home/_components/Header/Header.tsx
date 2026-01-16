import HeaderLogo from './HeaderLogo';
import HeaderTop from './HeaderTop';
import HeaderNav from './HeaderNav';

export default function Header() {
  return (
    <header
      className="w-100 bg-white position-fixed top-0 start-0 end-0"
      style={{ zIndex: 50, height: '135px' }}
    >
      <div className="d-flex flex-row h-100">
        <HeaderLogo />
        <div className="d-flex flex-column w-100 h-100">
          <HeaderTop />
          <HeaderNav />
        </div>
      </div>
    </header>
  );
}
