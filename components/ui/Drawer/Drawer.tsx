'use client';

import { Offcanvas } from 'react-bootstrap';

import { DrawerProps } from './Drawer.types';
import './Drawer.scss';

export default function Drawer({ isOpen, onClose, children, title }: DrawerProps) {
  return (
    <Offcanvas show={isOpen} onHide={onClose} placement="start" className="drawer">
      <Offcanvas.Header closeButton={true} className="drawer__header">
        {title && <Offcanvas.Title className="drawer__title">{title}</Offcanvas.Title>}
      </Offcanvas.Header>
      <Offcanvas.Body className="drawer__body">{children}</Offcanvas.Body>
    </Offcanvas>
  );
}
