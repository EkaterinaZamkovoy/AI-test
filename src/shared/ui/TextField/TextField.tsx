import { InputHTMLAttributes, TextareaHTMLAttributes } from 'react';
import styles from './TextField.module.scss';
import clsx from 'clsx';

type CommonProps = {
  label?: string;
  error?: string;
  wrapperClassName?: string;
  as?: 'input' | 'textarea';
};

type InputProps = CommonProps & InputHTMLAttributes<HTMLInputElement>;
type TextareaProps = CommonProps & TextareaHTMLAttributes<HTMLTextAreaElement>;

type Props = InputProps | TextareaProps;

export const TextField = ({
  label,
  error,
  wrapperClassName,
  className,
  as = 'input',
  ...rest
}: Props) => {
  return (
    <div className={clsx(styles.wrapper, wrapperClassName)}>
      {label && <label className={styles.label}>{label}</label>}
      {as === 'textarea' ? (
        <textarea
          className={clsx(styles.textarea, className, error && styles.error)}
          {...(rest as TextareaHTMLAttributes<HTMLTextAreaElement>)}
        />
      ) : (
        <input
          className={clsx(styles.input, className, error && styles.error)}
          {...(rest as InputHTMLAttributes<HTMLInputElement>)}
        />
      )}
      {error && <span className={styles.helper}>{error}</span>}
    </div>
  );
};
