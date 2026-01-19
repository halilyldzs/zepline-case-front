'use client';

import { useEffect, useState } from 'react';
import HeaderLogo from './HeaderLogo';
import HeaderTop from './HeaderTop';
import HeaderNav from './HeaderNav';
import HeaderMobile from './HeaderMobile';
import HeaderNavMobile from './HeaderNavMobile';
import Drawer from '@/components/ui/Drawer';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import './Header.scss';

export default function Header() {
  const { isMobile, isTablet, isDesktopLg } = useMediaQuery();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleMenuClick = () => {
    setIsDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  const showDesktopHeader = isMounted ? isDesktopLg : false;

  return (
    <>
      <header
        className={`header ${showDesktopHeader ? 'header--desktop' : 'header--mobile'}`}
        style={{ zIndex: 50 }}
      >
        {showDesktopHeader ? (
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

      {!showDesktopHeader && (
        <Drawer isOpen={isDrawerOpen} onClose={handleDrawerClose} title="Menü">
          <HeaderNavMobile />
        </Drawer>
      )}
    </>
  );
}
