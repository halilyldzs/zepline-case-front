import HeaderLogo from './HeaderLogo';
import HeaderTop from './HeaderTop';
import HeaderNav from './HeaderNav';

export default function Header() {
  return (
    <header className="w-full bg-white fixed top-0 left-0 right-0 z-50 h-[135px]">
      <div className="flex flex-row h-full">
        <HeaderLogo />
        <div className="flex flex-col w-full h-full">
          <HeaderTop />
          <HeaderNav />
        </div>
      </div>
    </header>
  );
}
