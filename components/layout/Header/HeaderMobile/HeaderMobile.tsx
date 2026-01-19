'use client';

import HeaderLogo from '../HeaderLogo';
import IconButton from '@/components/ui/IconButton';
import './HeaderMobile.scss';

interface HeaderMobileProps {
  onMenuClick: () => void;
  isDrawerOpen: boolean;
}

export default function HeaderMobile({ onMenuClick, isDrawerOpen }: HeaderMobileProps) {
  return (
    <div className="header-mobile">
      <HeaderLogo />
      <IconButton
        icon="menu"
        variant="outline"
        color="default"
        onClick={onMenuClick}
        className="header-mobile__menu-button"
        ariaLabel="Menüyü aç"
        ariaExpanded={isDrawerOpen}
      />
    </div>
  );
}
