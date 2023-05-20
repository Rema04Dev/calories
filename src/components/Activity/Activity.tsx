import { FC } from 'react';
import ActivityInput from './ActivityInput';
import { IActivityProps } from './types';
import { useTranslation } from 'react-i18next';
import './style.css';
const Activity: FC<IActivityProps> = ({ register }) => {
  const { t } = useTranslation();

  return (
    <fieldset className="form__item">
      <legend className="heading">{t('activity.heading')}</legend>
      <ul className="radios-group">
        <ActivityInput
          id="activity-minimal"
          value="min"
          label={t('activity.min.heading')}
          description={t('activity.min.description')}
          register={register}
        />
        <ActivityInput
          id="activity-low"
          value="low"
          label={t('activity.low.heading')}
          description={t('activity.low.description')}
          register={register}
        />
        <ActivityInput
          id="activity-medium"
          value="medium"
          label={t('activity.medium.heading')}
          description={t('activity.medium.description')}
          register={register}
        />
        <ActivityInput
          id="activity-high"
          value="high"
          label={t('activity.high.heading')}
          description={t('activity.high.description')}
          register={register}
        />
        <ActivityInput
          id="activity-maximal"
          value="maximal"
          label={t('activity.maximal.heading')}
          description={t('activity.maximal.description')}
          register={register}
        />
      </ul>
    </fieldset>
  );
};

export default Activity;
