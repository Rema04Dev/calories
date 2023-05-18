import { FC } from 'react';
import ParameterInput from './ParameterInput';
import { UseFormRegister, FieldValues } from 'react-hook-form';

interface ParametersProps {
  register: UseFormRegister<FieldValues>;
}
const Parameters: FC<ParametersProps> = ({ register }) => {
  return (
    <fieldset className="form__item form__parameters" name="parameters">
      <legend className="visually-hidden">Физические параметры</legend>
      <div className="inputs-group">
        <ParameterInput
          register={register}
          id="age"
          name="age"
          label="Возраст"
          sublabel="лет"
        />
        <ParameterInput
          register={register}
          id="height"
          name="height"
          label="Рост"
          sublabel="см"
        />
        <ParameterInput
          register={register}
          id="weight"
          name="weight"
          label="Вес"
          sublabel="кг"
        />
      </div>
    </fieldset>
  );
};

export default Parameters;
