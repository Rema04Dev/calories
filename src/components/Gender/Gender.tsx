import { FC } from 'react';
import GenderInput from './GenderInput';
import { GenderProps } from './types';
import { GenderIds } from './types';

const Gender: FC<GenderProps> = ({ register }) => {
  return (
    <div className="form__item">
      <h2 className="heading">Пол</h2>
      <ul className="switcher">
        <li className="switcher__item">
          <GenderInput
            id={GenderIds.GENDER_MALE}
            value="male"
            label="Мужчина"
            register={register}
          />
        </li>
        <li className="switcher__item">
          <GenderInput
            id={GenderIds.GENDER_FEMALE}
            value="female"
            label="Женщина"
            register={register}
          />
        </li>
      </ul>
    </div>
  );
};

export default Gender;
