import { FC } from 'react';

interface ParameterInputProps {
  id: string;
  name: string;
  label: string;
  sublabel: string;
}

const ParameterInput: FC<ParameterInputProps> = ({
  id,
  name,
  label,
  sublabel,
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
          type="text"
          id={id}
          name={name}
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
