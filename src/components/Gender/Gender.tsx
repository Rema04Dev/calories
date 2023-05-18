import { FC } from 'react';
import GenderInput from './GenderInput';
import { UseFormRegister, FieldValues } from 'react-hook-form';
export enum GenderIds {
  GENDER_MALE = 'gender-male',
  GENDER_FEMALE = 'gender-female',
}

interface GenderProps {
  register: UseFormRegister<FieldValues>;
}
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
