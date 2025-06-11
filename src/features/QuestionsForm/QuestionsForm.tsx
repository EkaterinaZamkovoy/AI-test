'use client';

import { Controller, useForm } from 'react-hook-form';
import { Button, DatePicker, TextField, Toast } from '@/shared';
import styles from './QuestionsForm.module.scss';
import { RadioGroup } from '@/entities';
import Image from 'next/image';
import OKIcon from '/public/svg/OKIcon.svg';
import flagIcon from '/public/svg/flagIcon.svg';
import LeftArrowIcon from '/public/svg/Arrow-left.svg';
import RightArrowIcon from '/public/svg/Forward-right.svg';
import { useAppSelector } from '@/store/hooks';
import { format } from 'date-fns';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

type FormValues = {
  childName: string;
  childDOB: string | null;
  childGender: string;
  parentName: string;

  q1_1: string;
  q1_2: string;
  q1_3: string;
  q1_4: string;
  q1_5: string;
  q1_6: string;
  q1_7: string;
  q1_8: string;
  q1_9: string;
  q1_10: string;

  q2_1: string;
  q2_2: string;
  q2_3: string;
  q2_4: string;
  q2_5: string;
  q2_6: string;
  q2_7: string;
  q2_8: string;
  q2_9: string;
  q2_10: string;

  q3_1: string;
  q3_2: string;
  q3_3: string;
  q3_4: string;
  q3_5: string;
  q3_6: string;
  q3_7: string;
  q3_8: string;
  q3_9: string;
  q3_10: string;
  q4_1: string;
  q4_2: string;
  q4_3: string;
  q4_4: string;
  q4_5: string;
  q4_6: string;
  q4_7: string;
  q4_8: string;
  q4_9: string;
  q4_10: string;
  emotionalState: string;
};

export const QuestionsForm = () => {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors, isValid },
  } = useForm<FormValues>({
    mode: 'onChange',
    defaultValues: {
      childName: '',
      childDOB: null,
      childGender: '',
      parentName: '',

      q1_1: '',
      q1_2: '',
      q1_3: '',
      q1_4: '',
      q1_5: '',
      q1_6: '',
      q1_7: '',
      q1_8: '',
      q1_9: '',
      q1_10: '',

      q2_1: '',
      q2_2: '',
      q2_3: '',
      q2_4: '',
      q2_5: '',
      q2_6: '',
      q2_7: '',
      q2_8: '',
      q2_9: '',
      q2_10: '',

      q3_1: '',
      q3_2: '',
      q3_3: '',
      q3_4: '',
      q3_5: '',
      q3_6: '',
      q3_7: '',
      q3_8: '',
      q3_9: '',
      q3_10: '',
      q4_1: '',
      q4_2: '',
      q4_3: '',
      q4_4: '',
      q4_5: '',
      q4_6: '',
      q4_7: '',
      q4_8: '',
      q4_9: '',
      q4_10: '',
      emotionalState: '',
    },
  });

  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const taskId = useAppSelector((state) => state.task.taskId);

  const onSubmit = async (data: FormValues) => {
    if (!taskId) {
      setSubmitError(
        'Пользователь не идентифицирован, вернитесь к загрузке рисунков'
      );
      return;
    }

    setIsLoading(true);
    setSubmitError(null);

    const payload = {
      task_id: taskId,
      survey: {
        childName: data.childName,
        childDOB: data.childDOB
          ? format(new Date(data.childDOB), 'yyyy-MM-dd')
          : '',
        childGender: data.childGender,
        parentName: data.parentName,

        q1_1: data.q1_1,
        q1_2: data.q1_2,
        q1_3: data.q1_3,
        q1_4: data.q1_4,
        q1_5: data.q1_5 || '1', // значения по умолчанию для скрытых полей
        q1_6: data.q1_6 || '1',
        q1_7: data.q1_7 || '1',
        q1_8: data.q1_8 || '1',
        q1_9: data.q1_9 || '1',
        q1_10: data.q1_10 || '1',

        q2_1: data.q2_1,
        q2_2: data.q2_2,
        q2_3: data.q2_3,
        q2_4: data.q2_4,
        q2_5: data.q2_5 || '1',
        q2_6: data.q2_6 || '1',
        q2_7: data.q2_7 || '1',
        q2_8: data.q2_8 || '1',
        q2_9: data.q2_9 || '1',
        q2_10: data.q2_10 || '1',

        q3_1: data.q3_1,
        q3_2: data.q3_2,
        q3_3: data.q3_3,
        q3_4: data.q3_4,
        q3_5: data.q3_5 || '1',
        q3_6: data.q3_6 || '1',
        q3_7: data.q3_7 || '1',
        q3_8: data.q3_8 || '1',
        q3_9: data.q3_9 || '1',
        q3_10: data.q3_10 || '1',

        q4_1: data.q4_1,
        q4_2: data.q4_2,
        q4_3: data.q4_3,
        q4_4: data.q4_4,
        q4_5: data.q4_5 || '1',
        q4_6: data.q4_6 || '1',
        q4_7: data.q4_7 || '1',
        q4_8: data.q4_8 || '1',
        q4_9: data.q4_9 || '1',
        q4_10: data.q4_10 || '1',

        emotionalState: data.emotionalState,
      },
    };

    try {
      const res = await fetch(
        'https://sirius-draw-test-94500a1b4a2f.herokuapp.com/submit-survey',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        }
      );

      if (!res.ok) {
        if (res.status === 404) {
          setSubmitError(
            'Пользователь не идентифицирован, вернитесь к загрузке рисунков'
          );
        } else if (res.status >= 500) {
          setSubmitError('Сервер временно недоступен, попробуйте позже');
        } else {
          setSubmitError('Произошла ошибка при отправке данных');
        }
        return;
      }
      reset();
      router.push(`/result?taskId=${taskId}`);
    } catch (err) {
      console.error('Ошибка при отправке анкеты:', err);
      setSubmitError(
        err instanceof Error ? err.message : 'Произошла непредвиденная ошибка'
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Общая информация о ребенке</h1>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.generalInfo}>
          <TextField
            label='Имя ребенка'
            {...register('childName', {
              required: 'Это поле обязательно для заполнения',
            })}
            error={errors.childName?.message}
          />

          <Controller
            name='childDOB'
            control={control}
            rules={{ required: 'Это поле обязательно для заполнения' }}
            render={({ field, fieldState }) => (
              <DatePicker
                label='Дата рождения ребенка'
                value={field.value ? new Date(field.value) : undefined}
                onChange={(date) =>
                  field.onChange(date ? format(date, 'yyyy-MM-dd') : null)
                }
                maxDate={new Date()}
                error={fieldState.error?.message}
              />
            )}
          />

          <Controller
            name='childGender'
            control={control}
            rules={{ required: 'Выберите один из вариантов' }}
            render={({ field, fieldState }) => (
              <RadioGroup
                label='Ребенок:'
                name='childGender'
                value={field.value}
                onChange={(val) => field.onChange(val)}
                options={[
                  { label: 'Мальчик', value: 'male' },
                  { label: 'Девочка', value: 'female' },
                ]}
                error={fieldState.error?.message}
              />
            )}
          />
          <TextField
            label='Имя родителя, заполняющего анкету'
            {...register('parentName', {
              required: 'Это поле обязательно для заполнения',
            })}
            error={errors.parentName?.message}
          />
        </div>

        <div className={styles.warningBlocks}>
          <div className={styles.block}>
            <span className={styles.icon}>
              <Image src={OKIcon} alt='OK icon' />
            </span>
            <p>
              Пожалуйста, внимательно прочитайте каждый вопрос и выберите
              наиболее подходящий вариант ответа, отражающий поведение и
              эмоциональное состояние вашего ребенка в течение последних 2-4
              недель. Отвечайте максимально честно и искренне, так как от этого
              зависит точность оценки психоэмоционального развития Вашего
              ребенка.
            </p>
          </div>
          <div className={styles.block}>
            <span className={styles.icon}>
              <Image src={flagIcon} alt='flag icon' />
            </span>
            <p>Все вопросы обязательны к заполнению</p>
          </div>
        </div>

        <div className={styles.Sphere}>
          <h2 className={styles.title}>Раздел 1. Эмоциональная сфера</h2>
          <div className={styles.radioButtonBlocks}>
            {[
              {
                name: 'q1_1' as const,
                label: 'Ребенок часто выражает радость и удовольствие:',
              },
              {
                name: 'q1_2' as const,
                label: 'Ребенок часто выражает радость и удовольствие:',
              },
              {
                name: 'q1_3' as const,
                label: 'Ребенок часто грустит или плачет без видимой причины:',
              },
              {
                name: 'q1_4' as const,
                label: 'Ребенок часто грустит или плачет без видимой причины:',
              },
            ].map(({ name, label }) => (
              <Controller
                key={name}
                name={name}
                control={control}
                rules={{ required: 'Это поле обязательно для заполнения' }}
                render={({ field, fieldState }) => (
                  <RadioGroup
                    label={label}
                    name={field.name}
                    value={field.value}
                    onChange={field.onChange}
                    options={[
                      { label: 'Очень редко', value: '1' },
                      { label: 'Редко', value: '2' },
                      { label: 'Иногда', value: '3' },
                      { label: 'Часто', value: '4' },
                      { label: 'Всегда', value: '5' },
                    ]}
                    error={fieldState.error?.message}
                  />
                )}
              />
            ))}
            {/* q1_5 — q1_10 */}
            {['q1_5', 'q1_6', 'q1_7', 'q1_8', 'q1_9', 'q1_10'].map((key) => (
              <input
                key={key}
                type='hidden'
                {...register(key as keyof FormValues)}
                defaultValue='1'
              />
            ))}
          </div>
        </div>

        <div className={styles.Sphere}>
          <h2 className={styles.title}>Раздел 2. Социальное взаимодействие</h2>
          <div className={styles.radioButtonBlocks}>
            {[
              {
                name: 'q2_1' as const,
                label: 'Ребенок легко заводит друзей:',
              },
              {
                name: 'q2_2' as const,
                label: 'Ребенок легко заводит друзей:',
              },
              {
                name: 'q2_3' as const,
                label:
                  'Ребенок предпочитает играть один, а не с другими детьми:',
              },
              {
                name: 'q2_4' as const,
                label:
                  'Ребенок предпочитает играть один, а не с другими детьми:',
              },
            ].map(({ name, label }) => (
              <Controller
                key={name}
                name={name}
                control={control}
                rules={{ required: 'Это поле обязательно для заполнения' }}
                render={({ field, fieldState }) => (
                  <RadioGroup
                    label={label}
                    name={field.name}
                    value={field.value}
                    onChange={field.onChange}
                    options={[
                      { label: 'Очень редко', value: '1' },
                      { label: 'Редко', value: '2' },
                      { label: 'Иногда', value: '3' },
                      { label: 'Часто', value: '4' },
                      { label: 'Всегда', value: '5' },
                    ]}
                    error={fieldState.error?.message}
                  />
                )}
              />
            ))}
            {/* q2_5 — q2_10 */}
            {['q2_5', 'q2_6', 'q2_7', 'q2_8', 'q2_9', 'q2_10'].map((key) => (
              <input
                key={key}
                type='hidden'
                {...register(key as keyof FormValues)}
                defaultValue='1'
              />
            ))}
          </div>
        </div>

        <div className={styles.Sphere}>
          <h2 className={styles.title}>Раздел 3. Саморегуляция и поведение</h2>
          <div className={styles.radioButtonBlocks}>
            {[
              {
                name: 'q3_1' as const,
                label: 'Ребенок умеет следовать правилам и инструкциям:',
              },
              {
                name: 'q3_2' as const,
                label: 'Ребенок умеет следовать правилам и инструкциям:',
              },
              {
                name: 'q3_3' as const,
                label: 'Ребенку трудно контролировать свои импульсы:',
              },
              {
                name: 'q3_4' as const,
                label: 'Ребенку трудно контролировать свои импульсы:',
              },
            ].map(({ name, label }) => (
              <Controller
                key={name}
                name={name}
                control={control}
                rules={{ required: 'Это поле обязательно для заполнения' }}
                render={({ field, fieldState }) => (
                  <RadioGroup
                    label={label}
                    name={field.name}
                    value={field.value}
                    onChange={field.onChange}
                    options={[
                      { label: 'Очень редко', value: '1' },
                      { label: 'Редко', value: '2' },
                      { label: 'Иногда', value: '3' },
                      { label: 'Часто', value: '4' },
                      { label: 'Всегда', value: '5' },
                    ]}
                    error={fieldState.error?.message}
                  />
                )}
              />
            ))}
            {/* q3_5 — q3_10 */}
            {['q3_5', 'q3_6', 'q3_7', 'q3_8', 'q3_9', 'q3_10'].map((key) => (
              <input
                key={key}
                type='hidden'
                {...register(key as keyof FormValues)}
                defaultValue='—'
              />
            ))}
          </div>
        </div>

        <div className={styles.Sphere}>
          <h2 className={styles.title}>
            Раздел 4. Самооценка и уверенность в себе
          </h2>
          <div className={styles.radioButtonBlocks}>
            {[
              {
                name: 'q4_1' as const,
                label: 'Ребенок уверен в своих силах и способностях:',
              },
              {
                name: 'q4_2' as const,
                label: 'Ребенок уверен в своих силах и способностях:',
              },
              {
                name: 'q4_3' as const,
                label: 'Ребенок часто сомневается в себе:',
              },
              {
                name: 'q4_4' as const,
                label: 'Ребенок часто сомневается в себе:',
              },
            ].map(({ name, label }) => (
              <Controller
                key={name}
                name={name}
                control={control}
                rules={{ required: 'Это поле обязательно для заполнения' }}
                render={({ field, fieldState }) => (
                  <RadioGroup
                    label={label}
                    name={field.name}
                    value={field.value}
                    onChange={field.onChange}
                    options={[
                      { label: 'Очень редко', value: '1' },
                      { label: 'Редко', value: '2' },
                      { label: 'Иногда', value: '3' },
                      { label: 'Часто', value: '4' },
                      { label: 'Всегда', value: '5' },
                    ]}
                    error={fieldState.error?.message}
                  />
                )}
              />
            ))}
          </div>
        </div>

        <div className={styles.Sphere}>
          <h2 className={styles.title}>Раздел 5. Общие вопросы</h2>
          <div className={styles.radioButtonBlocks}>
            <Controller
              name='emotionalState'
              control={control}
              rules={{ required: 'Выберите вариант ответа' }}
              render={({ field, fieldState }) => (
                <RadioGroup
                  label='Как Вы оцениваете общее эмоциональное состояние вашего ребенка?'
                  value={field.value}
                  onChange={field.onChange}
                  name={field.name}
                  error={fieldState.error?.message}
                  options={[
                    { label: 'Отличное', value: 'Отличное' },
                    { label: 'Хорошее', value: 'Хорошее' },
                    {
                      label: 'Удовлетворительное',
                      value: 'Удовлетворительное',
                    },
                    {
                      label: 'Неудовлетворительное',
                      value: 'Неудовлетворительное',
                    },
                    { label: 'Очень плохое', value: 'Очень плохое' },
                  ]}
                  columnLayout
                />
              )}
            />
            {[
              {
                name: 'q4_5',
                label:
                  'Есть ли у Вашего ребенка какие-либо особенности развития или поведения, о которых Вы хотели бы сообщить дополнительно?',
              },
              {
                name: 'q4_6',
                label:
                  'Какие, на Ваш взгляд, сильные стороны и таланты есть у Вашего ребенка?',
              },
              {
                name: 'q4_7',
                label:
                  'Какие, на Ваш взгляд, области требуют особого внимания и развития у Вашего ребенка?',
              },
              {
                name: 'q4_8',
                label:
                  'Обращались ли Вы ранее к специалистам (психологу, неврологу, логопеду) по поводу развития или поведения Вашего ребенка?',
              },
            ].map(({ name, label }) => (
              <TextField
                key={name}
                label={label}
                as='textarea'
                {...register(name as keyof FormValues, {
                  required: 'Это поле обязательно для заполнения',
                })}
                error={errors[name as keyof FormValues]?.message}
              />
            ))}
            {/* q4_9 — q4_10 */}
            {['q4_9', 'q4_10'].map((key) => (
              <input
                key={key}
                type='hidden'
                {...register(key as keyof FormValues)}
                defaultValue='1'
              />
            ))}
          </div>
        </div>

        <div className={styles.bottomform}>
          <p>Шаг 2/3</p>
          <div className={styles.buttonsBlock}>
            <Button
              className={styles.button}
              variant='secondary'
              onClick={() => router.push('/upload-pictures')}
            >
              <Image
                src={LeftArrowIcon}
                alt='Left arrow icon'
                className={styles.iconLeft}
              />
              К загрузке рисунков
            </Button>
            <Button
              type='submit'
              className={styles.button}
              disabled={!isValid || !!submitError}
            >
              {isLoading ? 'Загрузка...' : 'Узнать результаты'}
              {isLoading ? (
                ''
              ) : (
                <Image
                  src={RightArrowIcon}
                  alt='Right arrow icon'
                  className={styles.iconRight}
                />
              )}
            </Button>
          </div>
        </div>
      </form>
      {submitError && (
        <Toast message={submitError} onClose={() => setSubmitError(null)} />
      )}
    </div>
  );
};
