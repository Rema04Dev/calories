import { FC } from 'react';
import ParameterInput from './ParameterInput';
import { ParametersProps } from './types';

const Parameters: FC<ParametersProps> = ({ register, formState }) => {
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
          formState={formState}
        />
        <ParameterInput
          register={register}
          id="height"
          name="height"
          label="Рост"
          sublabel="см"
          formState={formState}
        />
        <ParameterInput
          register={register}
          id="weight"
          name="weight"
          label="Вес"
          sublabel="кг"
          formState={formState}
        />
      </div>
    </fieldset>
  );
};

export default Parameters;
