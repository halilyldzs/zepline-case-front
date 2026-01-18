'use client';

import { useState, useEffect } from 'react';
import HeaderLogo from './HeaderLogo';
import HeaderTop from './HeaderTop';
import HeaderNav from './HeaderNav';
import HeaderMobile from './HeaderMobile';
import HeaderNavMobile from './HeaderNavMobile';
import Drawer from '@/components/ui/Drawer';
import './Header.scss';

export default function Header() {
  const [isMobile, setIsMobile] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1025);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleMenuClick = () => {
    setIsDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  return (
    <>
      <header
        className={`header ${isMobile ? 'header--mobile' : 'header--desktop'}`}
        style={{ zIndex: 50, height: '8.4375rem' }}
      >
        {isMobile ? (
          <HeaderMobile onMenuClick={handleMenuClick} />
        ) : (
          <div className="header__desktop-content d-flex flex-row h-100">
            <HeaderLogo />
            <div className="d-flex flex-column w-100 h-100">
              <HeaderTop />
              <HeaderNav />
            </div>
          </div>
        )}
      </header>

      {isMobile && (
        <Drawer isOpen={isDrawerOpen} onClose={handleDrawerClose}>
          <HeaderNavMobile />
        </Drawer>
      )}
    </>
  );
}
