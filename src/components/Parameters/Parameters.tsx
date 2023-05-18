import { FC } from 'react';
import ParameterInput from './ParameterInput';

const Parameters: FC = () => {
  return (
    <fieldset className="form__item form__parameters" name="parameters">
      <legend className="visually-hidden">Физические параметры</legend>
      <div className="inputs-group">
        <ParameterInput id="age" name="age" label="Возраст" sublabel="лет" />
        <ParameterInput id="height" name="height" label="Рост" sublabel="см" />
        <ParameterInput id="weight" name="weight" label="Вес" sublabel="кг" />
      </div>
    </fieldset>
  );
};

export default Parameters;
