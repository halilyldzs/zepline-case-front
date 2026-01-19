import { IconName } from '@/components/ui/Icon';

export interface PageInfoButtonProps {
  iconName: IconName;
  label: string;
  value: string;
  onClick?: () => void;
  className?: string;
  ariaLabel?: string;
}
