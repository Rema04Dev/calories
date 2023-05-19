import { FC } from 'react';
import { ParameterInputProps } from './types';

const ParameterInput: FC<ParameterInputProps> = ({
  id,
  name,
  label,
  sublabel,
  register,
  formState,
}) => {
  const { errors } = formState;
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
        />
      </div>
      {errors[name]?.message}
    </div>
  );
};

export default ParameterInput;
