import { FC } from 'react';
import GenderInput from './GenderInput';
import { GenderProps } from './types';
import { GenderIds } from './types';
import { useTranslation } from 'react-i18next';
import './style.css';

const Gender: FC<GenderProps> = ({ register }) => {
  const { t } = useTranslation();
  return (
    <div className="form__item">
      <h2 className="heading">{t('gender.heading')}</h2>
      <ul className="switcher">
        <li className="switcher__item">
          <GenderInput
            id={GenderIds.GENDER_MALE}
            value="male"
            label={t('gender.male')}
            register={register}
          />
        </li>
        <li className="switcher__item">
          <GenderInput
            id={GenderIds.GENDER_FEMALE}
            value="female"
            label={t('gender.female')}
            register={register}
          />
        </li>
      </ul>
    </div>
  );
};

export default Gender;
