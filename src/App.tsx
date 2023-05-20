import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useTranslation } from 'react-i18next';
import Activity from './components/Activity/Activity';
import Gender from './components/Gender/Gender';
import Parameters from './components/Parameters/Parameters';

import { Coefficients, ICalories, IFormValues } from './types';

const App = () => {
  const { t } = useTranslation();
  const [calories, setCalories] = useState<ICalories | null>(null);
  const schema = Yup.object({
    gender: Yup.string().required('Выберите пол'),
    age: Yup.string().required('Введите ваш возраст'),
    height: Yup.string().required('Введите ваш рост'),
    weight: Yup.string().required('Введите ваш вес'),
    activity: Yup.string().required(
      'Выберите уровень вашей физической активности'
    ),
  });
  const { register, handleSubmit, formState, watch } = useForm<IFormValues>({
    defaultValues: {
      gender: 'male',
      age: '',
      height: '',
      weight: '',
      activity: 'min',
    },
    resolver: yupResolver(schema),
  });

  const watchedFields = watch(['age', 'height', 'weight']);

  const onSubmitHandler = (data: IFormValues) => {
    const { gender, age, height, weight, activity } = data;
    const baseN = 10 * Number(weight) + 6.25 * Number(height) - 5 * Number(age);
    let N;
    switch (gender) {
      case 'male':
        N = baseN + 5;
        break;
      case 'female':
        N = baseN - 161;
        break;
      default:
        return null;
    }

    const normal = N * Coefficients[activity];
    const result = {
      weightMaintenance: Math.floor(normal),
      gainWeight: Math.floor(normal * 1.15),
      loseWeight: Math.floor(normal * 0.85),
    };

    setCalories(result);
  };
  console.log(watchedFields);

  const isNotDisable = watchedFields.every((field) => field);

  return (
    <main className="main">
      <div className="container">
        <article className="counter">
          <h1 className="counter__heading heading-main">{t('heading')}</h1>
          <form
            onSubmit={handleSubmit(onSubmitHandler)}
            className="counter__form form"
            name="counter"
          >
            <Gender register={register} />
            <Parameters register={register} formState={formState} />
            <Activity register={register} />
            <div className="form__submit">
              <button
                className="form__submit-button button"
                name="submit"
                type="submit"
                disabled={!isNotDisable}
              >
                {t('form.submit')}
              </button>
              <button className="form__reset-button" name="reset" type="reset">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="#FD3636"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M13.4143 12.0002L18.7072 6.70725C19.0982 6.31625 19.0982 5.68425 18.7072 5.29325C18.3162 4.90225 17.6842 4.90225 17.2933 5.29325L12.0002 10.5862L6.70725 5.29325C6.31625 4.90225 5.68425 4.90225 5.29325 5.29325C4.90225 5.68425 4.90225 6.31625 5.29325 6.70725L10.5862 12.0002L5.29325 17.2933C4.90225 17.6842 4.90225 18.3162 5.29325 18.7072C5.48825 18.9022 5.74425 19.0002 6.00025 19.0002C6.25625 19.0002 6.51225 18.9022 6.70725 18.7072L12.0002 13.4143L17.2933 18.7072C17.4882 18.9022 17.7443 19.0002 18.0002 19.0002C18.2562 19.0002 18.5122 18.9022 18.7072 18.7072C19.0982 18.3162 19.0982 17.6842 18.7072 17.2933L13.4143 12.0002Z"
                  />
                </svg>
                <span> {t('form.reset')} </span>
              </button>
            </div>
          </form>
          {/* counter__result--hidden */}
          {calories && (
            <section className="counter__result">
              <h2 className="heading">Ваша норма калорий</h2>
              <ul className="counter__result-list">
                <li className="counter__result-item">
                  <h3>
                    <span id="calories-norm">{calories.weightMaintenance}</span>
                    ккал
                  </h3>
                  <p>поддержание веса</p>
                </li>
                <li className="counter__result-item">
                  <h3>
                    <span id="calories-minimal">{calories.loseWeight}</span>{' '}
                    ккал
                  </h3>
                  <p>снижение веса</p>
                </li>
                <li className="counter__result-item">
                  <h3>
                    <span id="calories-maximal">{calories.gainWeight}</span>{' '}
                    ккал
                  </h3>
                  <p>набор веса</p>
                </li>
              </ul>
            </section>
          )}
        </article>
      </div>
    </main>
  );
};

export default App;
