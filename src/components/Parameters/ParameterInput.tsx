import { FC } from 'react';
import { FieldValues, UseFormRegister } from 'react-hook-form';

interface ParameterInputProps {
  id: string;
  name: string;
  label: string;
  sublabel: string;
  register: UseFormRegister<FieldValues>;
}

const ParameterInput: FC<ParameterInputProps> = ({
  id,
  name,
  label,
  sublabel,
  register,
}) => {
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
          type="text"
          id={id}
          placeholder="0"
          inputMode="decimal"
          // maxLength="3"
          required
          autoComplete="off"
        />
      </div>
    </div>
  );
};

export default ParameterInput;
