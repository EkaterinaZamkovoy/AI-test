'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import styles from './UploadForm.module.scss';
import { UploadItem } from './UploadItem';
import Image from 'next/image';
import WarningIcon from '/public/svg/WarningIcon.svg';
import { Button } from '@/shared';

const initialState = [null, null, null];

export const UploadForm = () => {
  const [files, setFiles] = useState<(File | null)[]>(initialState);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleChange = (index: number, file: File | null) => {
    const copy = [...files];
    copy[index] = file;
    setFiles(copy);
  };

  const allUploaded = files.every(Boolean);

  const handleSubmit = async () => {
    if (!allUploaded) return;

    const formData = new FormData();
    files.forEach((file, index) => {
      if (file) {
        formData.append('files', file);
      }
    });

    setIsLoading(true);

    try {
      const response = await fetch(
        'https://sirius-draw-test-94500a1b4a2f.herokuapp.com/upload',
        {
          method: 'POST',
          body: formData,
        }
      );

      const data = await response.json();

      if (data?.task_id) {
        localStorage.setItem('task_id', data.task_id);
        router.push('/questions');
      } else {
        console.log('Не удалось получить task_id');
      }
    } catch (err) {
      console.log('Ошибка при отправке файлов');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.form}>
      <div className={styles.title}>
        <h2>Загрузите фотографии рисунков</h2>
        <p className={styles.hint}>
          <span className={styles.icon}>
            <Image src={WarningIcon} alt='Upload icon' />
          </span>
          Допустимые форматы файлов: jpg, jpeg, png, pdf. Размер не более 5 МБ
        </p>
      </div>

      <div className={styles.uploads}>
        <UploadItem
          label='Дом, дерево, человек'
          onChange={(file) => handleChange(0, file)}
          file={files[0]}
        />
        <UploadItem
          label='Несуществующее животное'
          onChange={(file) => handleChange(1, file)}
          file={files[1]}
        />
        <UploadItem
          label='Автопортрет'
          onChange={(file) => handleChange(2, file)}
          file={files[2]}
        />
      </div>
      <div className={styles.buttonBlock}>
        <p>Шаг 1/3</p>
        <Button
          className={styles.button}
          disabled={!allUploaded || isLoading}
          onClick={handleSubmit}
        >
          {isLoading ? 'Загрузка...' : 'Далее →'}
        </Button>
      </div>
    </div>
  );
};
