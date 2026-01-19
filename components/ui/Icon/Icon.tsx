import React from 'react';
import { IconProps } from './Icon.types';
import { iconRegistry } from './iconRegistry';

function Icon({ name, className, ariaHidden, ariaLabel, style }: IconProps) {
  const IconComponent = iconRegistry[name];

  if (!IconComponent) {
    console.warn(`Icon "${name}" not found in registry`);
    return null;
  }

  const iconElement = <IconComponent className={className || ''} />;

  if (!ariaLabel && ariaHidden !== false && !style) {
    return iconElement;
  }

  const svgProps: React.SVGProps<SVGSVGElement> = {};

  if (style) {
    svgProps.style = style;
  }

  if (ariaLabel) {
    svgProps['aria-label'] = ariaLabel;
    svgProps.role = 'img';
  } else if (ariaHidden !== false) {
    svgProps['aria-hidden'] = true;
  }

  return React.cloneElement(iconElement as React.ReactElement, svgProps);
}

export default Icon;
