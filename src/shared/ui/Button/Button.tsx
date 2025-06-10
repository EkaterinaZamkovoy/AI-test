'use client';

import { ButtonHTMLAttributes, ReactNode } from 'react';
import styles from './Button.module.scss';
import clsx from 'clsx';

type Variant = 'primary' | 'secondary' | 'close';
type Direction = 'left' | 'right';

type Props = {
  variant?: Variant;
  icon?: ReactNode;
  iconPosition?: Direction;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
  children,
  variant = 'primary',
  icon,
  iconPosition,
  disabled,
  className,
  ...rest
}: Props) => {
  return (
    <button
      className={clsx(
        styles.button,
        styles[variant],
        disabled && styles.disabled,
        icon && styles.withIcon,
        styles[`icon-${iconPosition}`],
        variant === 'close' && styles.close,
        className
      )}
      disabled={disabled}
      {...rest}
    >
      {icon && iconPosition === 'left' && (
        <span className={styles.icon}>{icon}</span>
      )}
      <span className={styles.label}>{children}</span>
      {icon && iconPosition === 'right' && (
        <span className={styles.icon}>{icon}</span>
      )}
    </button>
  );
};
