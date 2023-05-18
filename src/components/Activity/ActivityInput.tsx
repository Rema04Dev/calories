import { FC } from 'react';
import { FieldValues, UseFormRegister } from 'react-hook-form';

interface ActivityInputProps {
  id: string;
  value: string;
  label: string;
  description: string;
  register: UseFormRegister<FieldValues>;
}

const ActivityInput: FC<ActivityInputProps> = ({
  id,
  value,
  label,
  description,
  register,
}) => {
  return (
    <li className="radio">
      <div className="radio__wrapper">
        <input
          id={id}
          {...register('activity')}
          value={value}
          type="radio"
          required
        />
        <label htmlFor={id}> {label} </label>
      </div>
      <p className="radio__description">{description}</p>
    </li>
  );
};

export default ActivityInput;
