import { FC } from 'react';
import { GenderInputProps } from './types';

const GenderInput: FC<GenderInputProps> = ({ id, value, label, register }) => {
  return (
    <>
      <input
        id={id}
        type="radio"
        value={value}
        required
        {...register('gender')}
      />
      <label htmlFor={id}>{label}</label>
    </>
  );
};

export default GenderInput;
