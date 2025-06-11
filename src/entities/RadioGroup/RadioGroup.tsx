import { RadioButton } from '@/shared';
import styles from './RadioGroup.module.scss';
import clsx from 'clsx';

type Option = {
  label: string;
  value: string;
};

type Props = {
  label?: string;
  name: string;
  value: string;
  onChange: (value: string) => void;
  options: Option[];
  error?: string;
  className?: string;
  columnLayout?: boolean;
};

export const RadioGroup = ({
  label,
  name,
  value,
  onChange,
  options,
  error,
  columnLayout,
}: Props) => {
  return (
    <div className={styles.group}>
      {label && <p className={styles.groupLabel}>{label}</p>}
      <div
        className={clsx(styles.options, columnLayout && styles.columnLayout)}
      >
        {options.map((option) => (
          <RadioButton
            key={option.value}
            name={name}
            label={option.label}
            value={option.value}
            checked={value === option.value}
            onChange={() => onChange(option.value)}
          />
        ))}
      </div>
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};
