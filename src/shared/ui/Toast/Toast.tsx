'use client';

import { useEffect, useState } from 'react';
import styles from './Toast.module.scss';
import { Button } from '../Button';

interface Props {
  message: string | null;
  type?: 'error' | 'success' | 'info';
  duration?: number;
  onClose?: () => void;
}

export const Toast = ({
  message,
  type = 'error',
  duration = 1115000,
  onClose,
}: Props) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (!duration) return;

    const timer = setTimeout(() => {
      handleClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  const handleClose = () => {
    setIsVisible(false);
    if (onClose) {
      setTimeout(onClose, 300);
    }
  };

  if (!isVisible) return null;

  return (
    <div className={`${styles.toast} ${styles[type]}`}>
      <div className={styles.content}>{message}</div>
      <Button
        variant='close'
        onClick={handleClose}
        aria-label='Закрыть уведомление'
      >
        x
      </Button>
    </div>
  );
};
