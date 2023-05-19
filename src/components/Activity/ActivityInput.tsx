import { FC } from 'react';
import { IActivityInputProps } from './types';

const ActivityInput: FC<IActivityInputProps> = ({
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
