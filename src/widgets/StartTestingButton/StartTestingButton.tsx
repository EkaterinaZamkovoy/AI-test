'use client';

import { Button } from '@/shared';
import { useRouter } from 'next/navigation';
import styles from './StartTestingButton.module.scss';

export const StartTestingButton = () => {
  const router = useRouter();

  const handleStart = () => {
    router.push('/upload-pictures');
  };

  return (
    <Button className={styles.button} onClick={handleStart}>
      Начать тест
    </Button>
  );
};
