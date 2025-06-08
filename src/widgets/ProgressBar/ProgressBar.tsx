'use client';

import { usePathname } from 'next/navigation';
import styles from './ProgressBar.module.scss';

const steps = ['/upload-pictures', '/questions', '/result'];

export const ProgressBar = () => {
  const pathname = usePathname();
  const currentIndex = steps.findIndex((step) => pathname.startsWith(step));
  const stepClass = styles[`step${currentIndex + 1}`] || '';

  return (
    <div className={styles.wrapper}>
      <div className={`${styles.track} ${stepClass}`}>
        <div className={styles.fill} />
      </div>
    </div>
  );
};
