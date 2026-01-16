export type CategoryBadgeVariant = 'info' | 'primary' | 'warning' | 'success' | 'soft';

export interface CategoryBadgeProps {
  children: React.ReactNode;
  variant?: CategoryBadgeVariant;
}
