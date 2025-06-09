'use client';

import { Controller, useForm } from 'react-hook-form';
import { Button, DatePicker, TextField } from '@/shared';
import styles from './QuestionsForm.module.scss';
import { RadioGroup } from '@/entities';
import Image from 'next/image';
import OKIcon from '/public/svg/OKIcon.svg';
import flagIcon from '/public/svg/flagIcon.svg';
import LeftArrowIcon from '/public/svg/Arrow-left.svg';
import RightArrowIcon from '/public/svg/Forward-right.svg';

type FormValues = {
  childName: string;
  birthDate: Date | undefined;
  gender: string;
  parentName: string;
  emotionalSphere_one: string;
  emotionalSphere_two: string;
  emotionalSphere_three: string;
  emotionalSphere_four: string;
  socialCommunication_one: string;
  socialCommunication_two: string;
  socialCommunication_three: string;
  socialCommunication_four: string;
  selfRegulation_one: string;
  selfRegulation_two: string;
  selfRegulation_three: string;
  selfRegulation_four: string;
  selfEsteem_one: string;
  selfEsteem_two: string;
  selfEsteem_three: string;
  selfEsteem_four: string;
  generalEmotionalState: string;
  developmentFeatures: string;
  talents: string;
  specialAttention: string;
  contactedSpecialists: string;
};

export const QuestionsForm = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm<FormValues>({
    mode: 'onChange',
  });

  const onSubmit = (data: FormValues) => {
    console.log('Form submitted:', data);
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
            name='birthDate'
            control={control}
            rules={{ required: 'Это поле обязательно для заполнения' }}
            render={({ field, fieldState }) => (
              <DatePicker
                label='Дата рождения ребенка'
                value={field.value}
                onChange={(date) => field.onChange(date)}
                error={fieldState.error?.message}
              />
            )}
          />

          <Controller
            name='gender'
            control={control}
            rules={{ required: 'Выберите один из вариантов' }}
            render={({ field, fieldState }) => (
              <RadioGroup
                label='Ребенок:'
                name='gender'
                value={field.value}
                onChange={(val) => field.onChange(val)}
                options={[
                  { label: 'Мальчик', value: 'boy' },
                  { label: 'Девочка', value: 'girl' },
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
            <Controller
              name='emotionalSphere_one'
              control={control}
              rules={{ required: 'Это поле обязательно для заполнения' }}
              render={({ field, fieldState }) => (
                <RadioGroup
                  label='Ребенок часто выражает радость и удовольствие:'
                  name={field.name}
                  value={field.value}
                  onChange={field.onChange}
                  options={[
                    { label: 'Очень редко', value: 'Очень редко' },
                    { label: 'Редко', value: 'Редко' },
                    { label: 'Иногда', value: 'Иногда' },
                    { label: 'Часто', value: 'Часто' },
                    { label: 'Всегда', value: 'Всегда' },
                  ]}
                  error={fieldState.error?.message}
                />
              )}
            />
            <Controller
              name='emotionalSphere_two'
              control={control}
              rules={{ required: 'Это поле обязательно для заполнения' }}
              render={({ field, fieldState }) => (
                <RadioGroup
                  label='Ребенок часто выражает радость и удовольствие:'
                  name='emotionalSphere_two'
                  value={field.value}
                  onChange={field.onChange}
                  options={[
                    { label: 'Очень редко', value: 'Очень редко' },
                    { label: 'Редко', value: 'Редко' },
                    { label: 'Иногда', value: 'Иногда' },
                    { label: 'Часто', value: 'Часто' },
                    { label: 'Всегда', value: 'Всегда' },
                  ]}
                  error={fieldState.error?.message}
                />
              )}
            />
            <Controller
              name='emotionalSphere_three'
              control={control}
              rules={{ required: 'Это поле обязательно для заполнения' }}
              render={({ field, fieldState }) => (
                <RadioGroup
                  label='Ребенок часто грустит или плачет без видимой причины:'
                  name='emotionalSphere_three'
                  value={field.value}
                  onChange={field.onChange}
                  options={[
                    { label: 'Очень редко', value: 'Очень редко' },
                    { label: 'Редко', value: 'Редко' },
                    { label: 'Иногда', value: 'Иногда' },
                    { label: 'Часто', value: 'Часто' },
                    { label: 'Всегда', value: 'Всегда' },
                  ]}
                  error={fieldState.error?.message}
                />
              )}
            />
            <Controller
              name='emotionalSphere_four'
              control={control}
              rules={{ required: 'Это поле обязательно для заполнения' }}
              render={({ field, fieldState }) => (
                <RadioGroup
                  label='Ребенок часто грустит или плачет без видимой причины:'
                  name='emotionalSphere_four'
                  value={field.value}
                  onChange={field.onChange}
                  options={[
                    { label: 'Очень редко', value: 'Очень редко' },
                    { label: 'Редко', value: 'Редко' },
                    { label: 'Иногда', value: 'Иногда' },
                    { label: 'Часто', value: 'Часто' },
                    { label: 'Всегда', value: 'Всегда' },
                  ]}
                  error={fieldState.error?.message}
                />
              )}
            />
          </div>
        </div>

        <div className={styles.Sphere}>
          <h2 className={styles.title}>Раздел 2. Социальное взаимодействие</h2>
          <div className={styles.radioButtonBlocks}>
            <Controller
              name='socialCommunication_one'
              control={control}
              rules={{ required: 'Это поле обязательно для заполнения' }}
              render={({ field, fieldState }) => (
                <RadioGroup
                  label='Ребенок легко заводит друзей:'
                  name='socialCommunication_one'
                  value={field.value}
                  onChange={field.onChange}
                  options={[
                    { label: 'Очень редко', value: 'Очень редко' },
                    { label: 'Редко', value: 'Редко' },
                    { label: 'Иногда', value: 'Иногда' },
                    { label: 'Часто', value: 'Часто' },
                    { label: 'Всегда', value: 'Всегда' },
                  ]}
                  error={fieldState.error?.message}
                />
              )}
            />
            <Controller
              name='socialCommunication_two'
              control={control}
              rules={{ required: 'Это поле обязательно для заполнения' }}
              render={({ field, fieldState }) => (
                <RadioGroup
                  label='Ребенок легко заводит друзей:'
                  name='socialCommunication_two'
                  value={field.value}
                  onChange={field.onChange}
                  options={[
                    { label: 'Очень редко', value: 'Очень редко' },
                    { label: 'Редко', value: 'Редко' },
                    { label: 'Иногда', value: 'Иногда' },
                    { label: 'Часто', value: 'Часто' },
                    { label: 'Всегда', value: 'Всегда' },
                  ]}
                  error={fieldState.error?.message}
                />
              )}
            />
            <Controller
              name='socialCommunication_three'
              control={control}
              rules={{ required: 'Это поле обязательно для заполнения' }}
              render={({ field, fieldState }) => (
                <RadioGroup
                  label='Ребенок предпочитает играть один, а не с другими детьми:'
                  name='socialCommunication_three'
                  value={field.value}
                  onChange={field.onChange}
                  options={[
                    { label: 'Очень редко', value: 'Очень редко' },
                    { label: 'Редко', value: 'Редко' },
                    { label: 'Иногда', value: 'Иногда' },
                    { label: 'Часто', value: 'Часто' },
                    { label: 'Всегда', value: 'Всегда' },
                  ]}
                  error={fieldState.error?.message}
                />
              )}
            />
            <Controller
              name='socialCommunication_four'
              control={control}
              rules={{ required: 'Это поле обязательно для заполнения' }}
              render={({ field, fieldState }) => (
                <RadioGroup
                  label='Ребенок предпочитает играть один, а не с другими детьми:'
                  name='socialCommunication_four'
                  value={field.value}
                  onChange={field.onChange}
                  options={[
                    { label: 'Очень редко', value: 'Очень редко' },
                    { label: 'Редко', value: 'Редко' },
                    { label: 'Иногда', value: 'Иногда' },
                    { label: 'Часто', value: 'Часто' },
                    { label: 'Всегда', value: 'Всегда' },
                  ]}
                  error={fieldState.error?.message}
                />
              )}
            />
          </div>
        </div>

        <div className={styles.Sphere}>
          <h2 className={styles.title}>Раздел 3. Саморегуляция и поведение</h2>
          <div className={styles.radioButtonBlocks}>
            <Controller
              name='selfRegulation_one'
              control={control}
              rules={{ required: 'Выберите вариант ответа' }}
              render={({ field, fieldState }) => (
                <RadioGroup
                  label='Ребенок умеет следовать правилам и инструкциям:'
                  value={field.value || ''}
                  onChange={field.onChange}
                  name={field.name}
                  error={fieldState.error?.message}
                  options={[
                    { label: 'Очень редко', value: 'Очень редко' },
                    { label: 'Редко', value: 'Редко' },
                    { label: 'Иногда', value: 'Иногда' },
                    { label: 'Часто', value: 'Часто' },
                    { label: 'Всегда', value: 'Всегда' },
                  ]}
                />
              )}
            />
            <Controller
              name='selfRegulation_two'
              control={control}
              rules={{ required: 'Выберите вариант ответа' }}
              render={({ field, fieldState }) => (
                <RadioGroup
                  label='Ребенок умеет следовать правилам и инструкциям:'
                  value={field.value || ''}
                  onChange={field.onChange}
                  name={field.name}
                  error={fieldState.error?.message}
                  options={[
                    { label: 'Очень редко', value: 'Очень редко' },
                    { label: 'Редко', value: 'Редко' },
                    { label: 'Иногда', value: 'Иногда' },
                    { label: 'Часто', value: 'Часто' },
                    { label: 'Всегда', value: 'Всегда' },
                  ]}
                />
              )}
            />
            <Controller
              name='selfRegulation_three'
              control={control}
              rules={{ required: 'Выберите вариант ответа' }}
              render={({ field, fieldState }) => (
                <RadioGroup
                  label='Ребенку трудно контролировать свои импульсы:'
                  value={field.value || ''}
                  onChange={field.onChange}
                  name={field.name}
                  error={fieldState.error?.message}
                  options={[
                    { label: 'Очень редко', value: 'Очень редко' },
                    { label: 'Редко', value: 'Редко' },
                    { label: 'Иногда', value: 'Иногда' },
                    { label: 'Часто', value: 'Часто' },
                    { label: 'Всегда', value: 'Всегда' },
                  ]}
                />
              )}
            />
            <Controller
              name='selfRegulation_four'
              control={control}
              rules={{ required: 'Выберите вариант ответа' }}
              render={({ field, fieldState }) => (
                <RadioGroup
                  label='Ребенку трудно контролировать свои импульсы:'
                  value={field.value || ''}
                  onChange={field.onChange}
                  name={field.name}
                  error={fieldState.error?.message}
                  options={[
                    { label: 'Очень редко', value: 'Очень редко' },
                    { label: 'Редко', value: 'Редко' },
                    { label: 'Иногда', value: 'Иногда' },
                    { label: 'Часто', value: 'Часто' },
                    { label: 'Всегда', value: 'Всегда' },
                  ]}
                />
              )}
            />
          </div>
        </div>

        <div className={styles.Sphere}>
          <h2 className={styles.title}>
            Раздел 4. Самооценка и уверенность в себе
          </h2>
          <div className={styles.radioButtonBlocks}>
            <Controller
              name='selfEsteem_one'
              control={control}
              rules={{ required: 'Выберите вариант ответа' }}
              render={({ field, fieldState }) => (
                <RadioGroup
                  label='Ребенок уверен в своих силах и способностях:'
                  value={field.value || ''}
                  onChange={field.onChange}
                  name={field.name}
                  error={fieldState.error?.message}
                  options={[
                    { label: 'Очень редко', value: 'Очень редко' },
                    { label: 'Редко', value: 'Редко' },
                    { label: 'Иногда', value: 'Иногда' },
                    { label: 'Часто', value: 'Часто' },
                    { label: 'Всегда', value: 'Всегда' },
                  ]}
                />
              )}
            />
            <Controller
              name='selfEsteem_two'
              control={control}
              rules={{ required: 'Выберите вариант ответа' }}
              render={({ field, fieldState }) => (
                <RadioGroup
                  label='Ребенок уверен в своих силах и способностях:'
                  value={field.value || ''}
                  onChange={field.onChange}
                  name={field.name}
                  error={fieldState.error?.message}
                  options={[
                    { label: 'Очень редко', value: 'Очень редко' },
                    { label: 'Редко', value: 'Редко' },
                    { label: 'Иногда', value: 'Иногда' },
                    { label: 'Часто', value: 'Часто' },
                    { label: 'Всегда', value: 'Всегда' },
                  ]}
                />
              )}
            />
            <Controller
              name='selfEsteem_three'
              control={control}
              rules={{ required: 'Выберите вариант ответа' }}
              render={({ field, fieldState }) => (
                <RadioGroup
                  label='Ребенок часто сомневается в себе:'
                  value={field.value || ''}
                  onChange={field.onChange}
                  name={field.name}
                  error={fieldState.error?.message}
                  options={[
                    { label: 'Очень редко', value: 'Очень редко' },
                    { label: 'Редко', value: 'Редко' },
                    { label: 'Иногда', value: 'Иногда' },
                    { label: 'Часто', value: 'Часто' },
                    { label: 'Всегда', value: 'Всегда' },
                  ]}
                />
              )}
            />
            <Controller
              name='selfEsteem_four'
              control={control}
              rules={{ required: 'Выберите вариант ответа' }}
              render={({ field, fieldState }) => (
                <RadioGroup
                  label='Ребенок часто сомневается в себе:'
                  value={field.value || ''}
                  onChange={field.onChange}
                  name={field.name}
                  error={fieldState.error?.message}
                  options={[
                    { label: 'Очень редко', value: 'Очень редко' },
                    { label: 'Редко', value: 'Редко' },
                    { label: 'Иногда', value: 'Иногда' },
                    { label: 'Часто', value: 'Часто' },
                    { label: 'Всегда', value: 'Всегда' },
                  ]}
                />
              )}
            />
          </div>
        </div>

        <div className={styles.Sphere}>
          <h2 className={styles.title}>Раздел 5. Общие вопросы</h2>
          <div className={styles.radioButtonBlocks}>
            <Controller
              name='generalEmotionalState'
              control={control}
              rules={{ required: 'Выберите вариант ответа' }}
              render={({ field, fieldState }) => (
                <RadioGroup
                  label='Как Вы оцениваете общее эмоциональное состояние вашего ребенка?'
                  value={field.value || ''}
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
                />
              )}
            />
            <TextField
              label='Есть ли у Вашего ребенка какие-либо особенности развития или поведения, о которых Вы хотели бы сообщить дополнительно?'
              as='textarea'
              {...register('developmentFeatures', {
                required: 'Это поле обязательно для заполнения',
              })}
              error={errors.developmentFeatures?.message}
            />
            <TextField
              label='Какие, на Ваш взгляд, сильные стороны и таланты есть у Вашего ребенка?'
              as='textarea'
              {...register('talents', {
                required: 'Это поле обязательно для заполнения',
              })}
              error={errors.talents?.message}
            />
            <TextField
              label='Какие, на Ваш взгляд, области требуют особого внимания и развития у Вашего ребенка?'
              as='textarea'
              {...register('specialAttention', {
                required: 'Это поле обязательно для заполнения',
              })}
              error={errors.specialAttention?.message}
            />
            <TextField
              label='Обращались ли Вы ранее к специалистам (психологу, неврологу, логопеду) по поводу развития или поведения Вашего ребенка?'
              as='textarea'
              {...register('contactedSpecialists', {
                required: 'Это поле обязательно для заполнения',
              })}
              error={errors.contactedSpecialists?.message}
            />
          </div>
        </div>

        <div className={styles.bottomform}>
          <p>Шаг 2/3</p>
          <div className={styles.buttonsBlock}>
            <Button className={styles.button} variant='secondary'>
              <Image
                src={LeftArrowIcon}
                alt='Left arrow icon'
                className={styles.iconLeft}
              />
              К загрузке рисунков
            </Button>
            <Button className={styles.button} disabled={!isValid}>
              Узнать результаты
              <Image
                src={RightArrowIcon}
                alt='Right arrow icon'
                className={styles.iconRight}
              />
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};
