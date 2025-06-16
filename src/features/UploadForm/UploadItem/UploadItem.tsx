'use client';

import styles from './UploadItem.module.scss';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import UploadIcon from '/public/svg/upload-btn.svg';
import FlipIcon from '/public/svg/flipBTN.svg';
import clsx from 'clsx';

type Props = {
  label: string;
  file: File | null;
  onChange: (file: File | null) => void;
};

export const UploadItem = ({ label, file, onChange }: Props) => {
  const [preview, setPreview] = useState<string | null>(null);
  const [angle, setAngle] = useState<number>(0);

  useEffect(() => {
    if (!file) return;
    const url = URL.createObjectURL(file);
    setPreview(url);
    setAngle(0);

    return () => {
      URL.revokeObjectURL(url);
    };
  }, [file]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0] || null;
    onChange(selected);
  };

  const rotate = () => {
    setAngle((prev) => (prev + 90) % 360);
  };

  return (
    <div className={styles.item}>
      <label className={styles.box}>
        {preview ? (
          <img
            src={preview}
            alt='preview'
            className={clsx(styles.preview, styles[`rotate${angle}`])}
          />
        ) : (
          <span className={styles.icon}>
            <Image src={UploadIcon} alt='Upload icon' />
          </span>
        )}
        <input
          type='file'
          accept='.jpg,.jpeg,.png,.pdf'
          onChange={handleFileChange}
          hidden
        />
      </label>
      {preview ? (
        <button type='button' className={styles.flipBtn} onClick={rotate}>
          <Image src={FlipIcon} alt='rotateIcon' />
        </button>
      ) : null}
      <p className={styles.label}>{label}</p>
    </div>
  );
};
