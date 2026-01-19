'use client';

import { useRef, useState } from 'react';
import HeaderLogo from './HeaderLogo';
import HeaderTop from './HeaderTop';
import HeaderNav from './HeaderNav';
import HeaderMobile from './HeaderMobile';
import HeaderNavMobile from './HeaderNavMobile';
import Drawer, { DrawerHandle } from '@/components/ui/Drawer';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import './Header.scss';

export default function Header() {
  const { isDesktopLg } = useMediaQuery();
  const drawerRef = useRef<DrawerHandle>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleMenuClick = () => {
    drawerRef.current?.open();
  };

  const handleDrawerShowChange = (isOpen: boolean) => {
    setIsDrawerOpen(isOpen);
  };

  return (
    <>
      <header
        className={`header ${isDesktopLg ? 'header--desktop' : 'header--mobile'}`}
        style={{ zIndex: 50 }}
      >
        {isDesktopLg ? (
          <div className="header__desktop-content d-flex flex-row h-100">
            <HeaderLogo />
            <div className="d-flex flex-column w-100 h-100">
              <HeaderTop />
              <HeaderNav />
            </div>
          </div>
        ) : (
          <HeaderMobile onMenuClick={handleMenuClick} isDrawerOpen={isDrawerOpen} />
        )}
      </header>

      {!isDesktopLg && (
        <Drawer ref={drawerRef} title="Menü" onShowChange={handleDrawerShowChange}>
          <HeaderNavMobile />
        </Drawer>
      )}
    </>
  );
}
