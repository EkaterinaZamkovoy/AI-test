'use client';

import { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';
import styles from './Button.module.scss';
import clsx from 'clsx';

type Variant = 'primary' | 'secondary' | 'close';
type Direction = 'left' | 'right';

type BaseProps = {
  variant?: Variant;
  icon?: ReactNode;
  iconPosition?: Direction;
  disabled?: boolean;
};

type ButtonProps = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    as?: 'button';
    type?: 'button' | 'submit' | 'reset';
  };

type LinkProps = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    as: 'a';
  };

type Props = ButtonProps | LinkProps;

export const Button = ({
  children,
  variant = 'primary',
  icon,
  iconPosition,
  disabled,
  className,
  type = 'button',
  as = 'button',
  ...rest
}: Props) => {
  const Classes = clsx(
    styles.button,
    styles[variant],
    disabled && styles.disabled,
    icon && styles.withIcon,
    iconPosition && styles[`icon-${iconPosition}`],
    variant === 'close' && styles.close,
    className
  );

  const content = (
    <>
      {icon && iconPosition === 'left' && (
        <span className={styles.icon}>{icon}</span>
      )}
      <span className={styles.label}>{children}</span>
      {icon && iconPosition === 'right' && (
        <span className={styles.icon}>{icon}</span>
      )}
    </>
  );

  if (as === 'a') {
    const { href, ...linkProps } = rest as LinkProps;
    return (
      <a
        className={Classes}
        href={disabled ? undefined : href}
        aria-disabled={disabled}
        {...linkProps}
      >
        {content}
      </a>
    );
  }

  const { ...buttonProps } = rest as ButtonProps;

  return (
    <button className={Classes} disabled={disabled} {...buttonProps}>
      {content}
    </button>
  );
};
