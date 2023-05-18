import { FC } from 'react';
import GenderInput from './GenderInput';
export enum GenderIds {
  GENDER_MALE = 'gender-male',
  GENDER_FEMALE = 'gender-female',
}
const Gender: FC = () => {
  return (
    <div className="form__item">
      <h2 className="heading">Пол</h2>
      <ul className="switcher">
        <li className="switcher__item">
          <GenderInput
            id={GenderIds.GENDER_MALE}
            name="gender"
            value="male"
            label="Мужчина"
          />
        </li>
        <li className="switcher__item">
          <GenderInput
            id={GenderIds.GENDER_MALE}
            name="female"
            value="female"
            label="Женщина"
          />
        </li>
      </ul>
    </div>
  );
};

export default Gender;
