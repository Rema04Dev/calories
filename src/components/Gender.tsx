import { FC } from 'react';

const Gender: FC = () => {
  return (
    <div className="form__item">
      <h2 className="heading">Пол</h2>
      <ul className="switcher">
        <li className="switcher__item">
          <input
            id="gender-male"
            name="gender"
            type="radio"
            value="male"
            required
          />
          <label htmlFor="gender-male"> Мужчина </label>
        </li>
        <li className="switcher__item">
          <input
            id="gender-female"
            name="gender"
            type="radio"
            value="female"
            required
          />
          <label htmlFor="gender-female"> Женщина </label>
        </li>
      </ul>
    </div>
  );
};

export default Gender;
