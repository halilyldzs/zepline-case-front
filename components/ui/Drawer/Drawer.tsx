'use client';

import { Offcanvas } from 'react-bootstrap';
import Icon from '../Icon';
import IconButton from '../IconButton';
import { DrawerProps } from './Drawer.types';
import './Drawer.scss';

export default function Drawer({ isOpen, onClose, children, title }: DrawerProps) {
  return (
    <Offcanvas show={isOpen} onHide={onClose} placement="start" className="drawer">
      <Offcanvas.Header className="drawer__header">
        {title && <Offcanvas.Title className="drawer__title">{title}</Offcanvas.Title>}
        <IconButton icon="left-cross" variant="outline" color="default" onClick={onClose} className="drawer__close-button" />
      </Offcanvas.Header>
      <Offcanvas.Body className="drawer__body">{children}</Offcanvas.Body>
    </Offcanvas>
  );
}
