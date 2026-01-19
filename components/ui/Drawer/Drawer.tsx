'use client';

import { forwardRef, useId, useImperativeHandle, useState } from 'react';
import { Offcanvas } from 'react-bootstrap';

import { DrawerHandle, DrawerProps } from './Drawer.types';
import './Drawer.scss';

const Drawer = forwardRef<DrawerHandle, DrawerProps>(({ children, title, onShowChange }, ref) => {
  const [isOpen, setIsOpen] = useState(false);
  const id = useId();
  const titleId = title ? `drawer-title-${id}` : undefined;

  useImperativeHandle(ref, () => ({
    open: () => {
      setIsOpen(true);
      onShowChange?.(true);
    },
    close: () => {
      setIsOpen(false);
      onShowChange?.(false);
    },
    toggle: () => {
      setIsOpen((prev) => {
        const newValue = !prev;
        onShowChange?.(newValue);
        return newValue;
      });
    },
    isOpen,
  }));

  const handleHide = () => {
    setIsOpen(false);
    onShowChange?.(false);
  };

  return (
    <Offcanvas
      show={isOpen}
      onHide={handleHide}
      placement="start"
      className="drawer"
      aria-modal="true"
      aria-labelledby={titleId}
      keyboard={true}
      restoreFocus={true}
    >
      <Offcanvas.Header closeButton={true} className="drawer__header">
        {title && (
          <Offcanvas.Title id={titleId} className="drawer__title">
            {title}
          </Offcanvas.Title>
        )}
      </Offcanvas.Header>
      <Offcanvas.Body className="drawer__body">{children}</Offcanvas.Body>
    </Offcanvas>
  );
});

Drawer.displayName = 'Drawer';

export default Drawer;
