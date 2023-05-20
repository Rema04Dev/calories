import { FC } from 'react';
import ParameterInput from './ParameterInput';
import { ParametersProps } from './types';
import { useTranslation } from 'react-i18next';
import './style.css';
const Parameters: FC<ParametersProps> = ({ register, formState }) => {
  const { t } = useTranslation();

  return (
    <fieldset className="form__item form__parameters" name="parameters">
      <legend className="visually-hidden">Физические параметры</legend>
      <div className="inputs-group">
        <ParameterInput
          register={register}
          id="age"
          name="age"
          label={t('parameters.age.heading')}
          sublabel={t('parameters.age.suffix')}
          formState={formState}
        />
        <ParameterInput
          register={register}
          id="height"
          name="height"
          label={t('parameters.height.heading')}
          sublabel={t('parameters.height.suffix')}
          formState={formState}
        />
        <ParameterInput
          register={register}
          id="weight"
          name="weight"
          label={t('parameters.weight.heading')}
          sublabel={t('parameters.weight.suffix')}
          formState={formState}
        />
      </div>
    </fieldset>
  );
};

export default Parameters;
