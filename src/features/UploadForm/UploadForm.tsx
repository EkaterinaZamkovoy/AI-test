'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import styles from './UploadForm.module.scss';
import { UploadItem } from './UploadItem';
import Image from 'next/image';
import WarningIcon from '/public/svg/WarningIcon.svg';
import { Button, Toast, useStep } from '@/shared';
import { useAppDispatch } from '@/store/hooks';
import { useUploadFilesMutation } from '@/store/api/uploadApi';
import { setTaskId } from '@/store/slices/taskSlice';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';

export const UploadForm = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [uploadFiles, { isLoading }] = useUploadFilesMutation();

  const [files, setFiles] = useState<(File | null)[]>([null, null, null]);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const { currentStep, totalSteps } = useStep();

  const allUploaded = files.every(Boolean);

  const MAX_FILE_SIZE_MB = 5;

  const handleChange = (index: number, file: File | null) => {
    if (file) {
      const maxBytes = MAX_FILE_SIZE_MB * 1024 * 1024;
      if (file.size > maxBytes) {
        setSubmitError(
          `Файл слишком большой. Максимум ${MAX_FILE_SIZE_MB} МБ.`
        );
        return;
      }
    }
    const newFiles = [...files];
    newFiles[index] = file;
    setFiles(newFiles);
    setSubmitError(null);
  };

  const handleSubmit = async () => {
    if (!allUploaded) return;

    const formData = new FormData();
    files.forEach((file) => {
      if (file) {
        formData.append('files', file);
      }
    });

    try {
      const result = await uploadFiles(formData).unwrap();
      dispatch(setTaskId(result.task_id));
      router.push('/questions');
    } catch (err) {
      const error = err as FetchBaseQueryError;
      console.log('Ошибка при отправке файлов', err);
      let errorMessage = 'Произошла ошибка при загрузке файлов';
      if (
        'status' in error &&
        typeof error.status === 'number' &&
        error.status >= 500
      ) {
        errorMessage = 'Сервер временно недоступен, попробуйте позже';
      }
      setSubmitError(errorMessage);
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
        <p>
          Шаг {currentStep}/{totalSteps}
        </p>
        <Button
          className={styles.button}
          disabled={!allUploaded || isLoading}
          onClick={handleSubmit}
        >
          {isLoading ? 'Загрузка...' : 'Далее →'}
        </Button>
      </div>
      {submitError && (
        <Toast message={submitError} onClose={() => setSubmitError(null)} />
      )}
    </div>
  );
};
