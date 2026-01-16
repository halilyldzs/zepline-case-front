import { IconProps } from './Icon.types';
import { iconRegistry } from './iconRegistry';
import { cn } from '@/lib/utils';

function Icon({ name, className }: IconProps) {
  const IconComponent = iconRegistry[name];

  if (!IconComponent) {
    console.warn(`Icon "${name}" not found in registry`);
    return null;
  }

  return <IconComponent className={cn(className)} />;
}

export default Icon;
