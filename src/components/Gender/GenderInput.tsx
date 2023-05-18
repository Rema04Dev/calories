import { FC } from 'react';
import { GenderIds } from './Gender';
interface GenderInputProps {
  id: GenderIds;
  name: string;
  value: string;
  label: string;
  checked?: boolean;
}
const GenderInput: FC<GenderInputProps> = ({ id, name, value, label }) => {
  return (
    <>
      <input id={id} name={name} type="radio" value={value} required />
      <label htmlFor={id}>{label}</label>
    </>
  );
};

export default GenderInput;
