import { IconProps } from './Icon.types';
import { iconRegistry } from './iconRegistry';

function Icon({ name, className, style }: IconProps) {
  const IconComponent = iconRegistry[name];

  if (!IconComponent) {
    console.warn(`Icon "${name}" not found in registry`);
    return null;
  }

  return <IconComponent className={className || ''} style={style} />;
}

export default Icon;
