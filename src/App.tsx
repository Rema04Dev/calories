import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useTranslation } from 'react-i18next';
import Activity from './components/Activity/Activity';
import Gender from './components/Gender/Gender';
import Parameters from './components/Parameters/Parameters';
import ReactSwitch from 'react-switch';
import { ICalories, IFormValues } from './types';
import calculateCalories from './utils/calculateCalories';
import useTheme from './hooks/useTheme';

const App = () => {
  const { t } = useTranslation();
  const [calories, setCalories] = useState<ICalories | null>(null);
  const schema = Yup.object({
    gender: Yup.string().required('Выберите пол'),
    age: Yup.string().required('ageRequired'),
    height: Yup.string().required('heightRequired'),
    weight: Yup.string().required('weightRequired'),
    activity: Yup.string().required(
      'Выберите уровень вашей физической активности'
    ),
  });
  const { register, handleSubmit, formState, reset } = useForm<IFormValues>({
    defaultValues: {
      gender: 'male',
      age: '',
      height: '',
      weight: '',
      activity: 'min',
    },
    resolver: yupResolver(schema),
  });

  const onSubmitHandler = (data: IFormValues) => {
    const result = calculateCalories(data);
    setCalories(result);
  };

  const { theme, toggleTheme } = useTheme();
  console.log(useTheme());
  return (
    <main className="main" id={theme}>
      <div className="container">
        <div className="switch">
          <button onChange={() => toggleTheme()}>CHANGE</button>
        </div>

        <article className="counter">
          <h1 data-testid="title" className="counter__heading heading-main">
            {t('heading')}
          </h1>
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
              >
                {t('form.submit')}
              </button>
              <button className="form__reset-button" name="reset" type="button">
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
          {calories && (
            <section className="counter__result">
              {/* counter__result--hidden */}
              <h2 className="heading">{t('result.heading')}</h2>
              <ul className="counter__result-list">
                <li className="counter__result-item">
                  <h3>
                    <span id="calories-norm">
                      {calories.weightMaintenance}{' '}
                    </span>
                    {t('result.suffix')}
                  </h3>
                  <p>{t('result.weightMaintenance')}</p>
                </li>
                <li className="counter__result-item">
                  <h3>
                    <span id="calories-minimal">{calories.loseWeight}</span>{' '}
                    {t('result.suffix')}
                  </h3>
                  <p>{t('result.loseWeight')}</p>
                </li>
                <li className="counter__result-item">
                  <h3>
                    <span id="calories-maximal">{calories.gainWeight}</span>{' '}
                    {t('result.suffix')}
                  </h3>
                  <p>{t('result.gainWeight')}</p>
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
