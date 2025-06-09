'use client';

import { useState } from 'react';
import styles from './DatePicker.module.scss';
import 'react-day-picker/dist/style.css';
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
import { TextField } from '@/shared';

type Props = {
  label: string;
  value?: Date;
  onChange: (date: Date | undefined) => void;
  error?: string;
  placeholder?: string;
};

export const DatePicker = ({ label, value, onChange, error }: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.wrapper}>
      <label className={styles.label}>{label}</label>
      <div>
        <TextField
          value={value ? format(value, 'dd.MM.yyyy') : ''}
          onClick={() => setOpen((prev) => !prev)}
          readOnly
          placeholder='дд.мм.гггг'
          error={error}
          className={styles.input}
        />
        {open && (
          <div className={styles.popup}>
            <DayPicker
              mode='single'
              selected={value}
              onSelect={(date) => {
                onChange(date);
                setOpen(false);
              }}
              classNames={{
                caption_label: styles.captionLabel,
                nav: styles.nav,
                nav_button: styles.navButton,
                month_caption: styles.monthCaption,
                month: styles.month,
                day: styles.day,
                day_selected: styles.daySelected,
                chevron: styles.chevron,
              }}
              modifiersClassNames={{
                selected: styles.daySelected,
              }}
              locale={ru}
            />
          </div>
        )}
      </div>
    </div>
  );
};
