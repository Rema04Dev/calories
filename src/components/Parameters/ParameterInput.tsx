import { FC } from 'react';
import { ParameterInputProps } from './types';
import { useTranslation } from 'react-i18next';
const ParameterInput: FC<ParameterInputProps> = ({
  id,
  name,
  label,
  sublabel,
  register,
  formState,
}) => {
  const { errors } = formState;
  const { t } = useTranslation();
  return (
    <div className="input">
      <div className="input__heading">
        <label className="heading" htmlFor={id}>
          {label}
        </label>
        <span className="input__heading-unit"> {sublabel} </span>
      </div>
      <div className="input__wrapper">
        <input
          {...register(name)}
          type="number"
          id={id}
          placeholder="0"
          inputMode="decimal"
          // maxLength="3"
          autoComplete="off"
          className={errors[name]?.message && 'invalid-input'}
        />
      </div>
      <span className="feedback">
        {errors[name]?.message && t(`form.errors.${errors[name]?.message}`)}
      </span>
    </div>
  );
};

export default ParameterInput;
