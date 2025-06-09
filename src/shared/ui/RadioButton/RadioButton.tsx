import { InputHTMLAttributes } from 'react';
import styles from './RadioButton.module.scss';
import clsx from 'clsx';

type Props = {
  label?: string;
  error?: string;
  wrapperClassName?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const RadioButton = ({
  label,
  error,
  wrapperClassName,
  className,
  ...rest
}: Props) => {
  return (
    <label className={clsx(styles.wrapper, wrapperClassName)}>
      <input type='radio' className={clsx(styles.input, className)} {...rest} />
      <span className={styles.customCircle} />
      {label && <span className={styles.label}>{label}</span>}
      {error && <span className={styles.helper}>{error}</span>}
    </label>
  );
};
