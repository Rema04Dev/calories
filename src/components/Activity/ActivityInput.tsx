import { FC } from 'react';

interface ActivityInputProps {
  id: string;
  value: string;
  label: string;
  description: string;
}

const ActivityInput: FC<ActivityInputProps> = ({
  id,
  value,
  label,
  description,
}) => {
  return (
    <li className="radio">
      <div className="radio__wrapper">
        <input id={id} name="activity" value={value} type="radio" required />
        <label htmlFor={id}> {label} </label>
      </div>
      <p className="radio__description">{description}</p>
    </li>
  );
};

export default ActivityInput;
