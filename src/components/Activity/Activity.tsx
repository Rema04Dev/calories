import { FC } from 'react';
import ActivityInput from './ActivityInput';
import { IActivityProps } from './types';

const Activity: FC<IActivityProps> = ({ register }) => {
  return (
    <fieldset className="form__item">
      <legend className="heading">Физическая активность</legend>
      <ul className="radios-group">
        <ActivityInput
          id="activity-minimal"
          value="min"
          label="Минимальная"
          description="Сидячая работа и нет физических нагрузок"
          register={register}
        />
        <ActivityInput
          id="activity-low"
          value="low"
          label="Низкая"
          description="Редкие, нерегулярные тренировки, активность в быту"
          register={register}
        />
        <ActivityInput
          id="activity-medium"
          value="medium"
          label="Средняя"
          description="Тренировки 3-5 раз в неделю"
          register={register}
        />
        <ActivityInput
          id="activity-high"
          value="high"
          label="Высокая"
          description="Тренировки 6-7 раз в неделю"
          register={register}
        />
        <ActivityInput
          id="activity-maximal"
          value="maximal"
          label="Очень высокая"
          description="Больше 6 тренировок в неделю и физическая работа"
          register={register}
        />
      </ul>
    </fieldset>
  );
};

export default Activity;
