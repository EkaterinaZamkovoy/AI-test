'use client';

import { useEffect, useState } from 'react';
import styles from './ResultStatus.module.scss';
import { Button } from '@/shared';
import DownloadIcon from '/public/svg/downloadIcon.svg';
import Image from 'next/image';

type Props = {
  taskId: string;
};

export const ResultStatus = ({ taskId }: Props) => {
  const [status, setStatus] = useState<'processing' | 'ready' | 'error'>(
    'processing'
  );
  const [resultUrl, setResultUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!taskId) {
      setError(
        'Пользователь не идентифицирован, вернитесь к загрузке рисунков'
      );
      setStatus('error');
      return;
    }

    const checkStatus = async () => {
      try {
        const res = await fetch(
          `https://sirius-draw-test-94500a1b4a2f.herokuapp.com/report/${taskId}`
        );
        if (!res.ok) throw new Error('Ошибка при запросе');

        const data = await res.json();

        if (data.status === 'ready' && data.url) {
          setStatus('ready');
          setResultUrl(data.url);
        } else {
          setStatus('processing');
        }
      } catch (err) {
        console.error('Fetch error:', err);
        setError('Не удалось получить статус отчета');
        setStatus('error');
      }
    };

    checkStatus(); // сразу вызвать при монтировании
    const intervalId = setInterval(checkStatus, 10000); // повторять каждые 10 сек
    return () => clearInterval(intervalId);
  }, [taskId]);

  if (status === 'error') {
    return (
      <div className={styles.container}>
        <p className={styles.error}>{error}</p>
      </div>
    );
  }

  if (status === 'processing') {
    return (
      <div className={styles.container}>
        <p className={styles.processing}>Анализ в процессе...</p>
        <span className={styles.loader}></span>
      </div>
    );
  }

  return (
    <div className={styles.ready}>
      <p className={styles.title}>Анализ завершён!</p>
      <div className={styles.linksform}>
        <p>Шаг 3/3</p>
        <div className={styles.links}>
          <Button
            as='a'
            className={styles.link}
            href={resultUrl!}
            target='_blank'
            rel='noopener noreferrer'
          >
            Просмотреть отчёт
          </Button>
          <Button as='a' className={styles.link} href={resultUrl!} download>
            Скачать отчет PDF
            <Image
              src={DownloadIcon}
              alt='Download Icon'
              className={styles.DownloadIcon}
            />
          </Button>
        </div>
      </div>
    </div>
  );
};
