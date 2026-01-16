export type BadgeVariant = 'info' | 'primary' | 'warning' | 'success' | 'soft';

export interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
}
