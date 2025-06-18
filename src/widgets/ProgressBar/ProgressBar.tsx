'use client';

import styles from './ProgressBar.module.scss';
import { useStep } from '@/shared';

export const ProgressBar = () => {
  const { currentStep } = useStep();

  const stepClass = styles[`step${currentStep}`] || '';

  return (
    <div className={styles.wrapper}>
      <div className={`${styles.track} ${stepClass}`}>
        <div className={styles.fill} />
      </div>
    </div>
  );
};
