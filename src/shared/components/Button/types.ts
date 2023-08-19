import { ReactNode } from 'react';

export type TButtonProps = {
  className?: string;
  children: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit';
  fullWidth?: boolean;
};
