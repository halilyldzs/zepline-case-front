'use client';

import HeaderLogo from '../HeaderLogo';
import IconButton from '@/components/ui/IconButton';
import './HeaderMobile.scss';

interface HeaderMobileProps {
  onMenuClick: () => void;
}

export default function HeaderMobile({ onMenuClick }: HeaderMobileProps) {
  return (
    <div className="header-mobile">
      <HeaderLogo />
      <IconButton
        icon="menu"
        variant="outline"
        color="default"
        onClick={onMenuClick}
        className="header-mobile__menu-button"
      />
    </div>
  );
}
