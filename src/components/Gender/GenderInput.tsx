import { FC } from 'react';
import { GenderIds } from './Gender';
import { UseFormRegister, FieldValues } from 'react-hook-form';

interface GenderInputProps {
  id: GenderIds;
  value: string;
  label: string;
  register: UseFormRegister<FieldValues>;
}
const GenderInput: FC<GenderInputProps> = ({ id, value, label, register }) => {
  return (
    <>
      <input
        {...register('gender')}
        id={id}
        type="radio"
        value={value}
        required
      />
      <label htmlFor={id}>{label}</label>
    </>
  );
};

export default GenderInput;
