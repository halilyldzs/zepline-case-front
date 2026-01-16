export interface ToggleButtonGroupProps {
  options: string[];
  value?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
  className?: string;
}
