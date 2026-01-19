'use client';

import { useEffect, useRef } from 'react';
import { Offcanvas } from 'react-bootstrap';

import { DrawerProps } from './Drawer.types';
import './Drawer.scss';

export default function Drawer({ isOpen, onClose, children, title }: DrawerProps) {
  const drawerRef = useRef<HTMLDivElement>(null);
  const previousActiveElementRef = useRef<HTMLElement | null>(null);
  const titleId = title ? `drawer-title-${Math.random().toString(36).substr(2, 9)}` : undefined;

  useEffect(() => {
    if (isOpen) {
      previousActiveElementRef.current = document.activeElement as HTMLElement;

      const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
          onClose();
        }
      };

      document.addEventListener('keydown', handleKeyDown);

      setTimeout(() => {
        const drawerElement = drawerRef.current;
        if (drawerElement) {
          const focusableElements = drawerElement.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
          );
          const firstFocusable = focusableElements[0] as HTMLElement;
          if (firstFocusable) {
            firstFocusable.focus();
          }
        }
      }, 100);

      return () => {
        document.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      if (previousActiveElementRef.current) {
        previousActiveElementRef.current.focus();
      }
    }
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      const handleTabKey = (event: KeyboardEvent) => {
        if (event.key !== 'Tab') return;

        const drawerElement = drawerRef.current;
        if (!drawerElement) return;

        const focusableElements = Array.from(
          drawerElement.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
          )
        ) as HTMLElement[];

        if (focusableElements.length === 0) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (event.shiftKey) {
          if (document.activeElement === firstElement) {
            event.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            event.preventDefault();
            firstElement.focus();
          }
        }
      };

      document.addEventListener('keydown', handleTabKey);
      return () => {
        document.removeEventListener('keydown', handleTabKey);
      };
    }
  }, [isOpen]);

  return (
    <Offcanvas
      show={isOpen}
      onHide={onClose}
      placement="start"
      className="drawer"
      aria-modal="true"
      aria-labelledby={titleId}
    >
      <div ref={drawerRef}>
        <Offcanvas.Header closeButton={true} className="drawer__header">
          {title && (
            <Offcanvas.Title id={titleId} className="drawer__title">
              {title}
            </Offcanvas.Title>
          )}
        </Offcanvas.Header>
        <Offcanvas.Body className="drawer__body">{children}</Offcanvas.Body>
      </div>
    </Offcanvas>
  );
}
