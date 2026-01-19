import { Ref } from 'react';

export interface DrawerProps {
  children: React.ReactNode;
  title?: string;
  onShowChange?: (isOpen: boolean) => void;
  ref?: Ref<DrawerHandle>;
}

export interface DrawerHandle {
  open: () => void;
  close: () => void;
  toggle: () => void;
  isOpen: boolean;
}
