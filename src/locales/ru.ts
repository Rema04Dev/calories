const ru = {
  translation: {
    heading: 'Счётчик калорий',
    gender: {
      heading: 'Пол',
      male: 'Мужчина',
      female: 'Женщина',
    },
    parameters: {
      age: {
        heading: 'Возраст',
        suffix: 'лет',
      },
      height: {
        heading: 'Рост',
        suffix: 'см',
      },
      weight: {
        heading: 'Вес',
        suffix: 'кг',
      },
    },
    activity: {
      heading: 'Физическая активность',
      min: {
        heading: 'Минимальная',
        description: 'Сидячая работа и нет физических нагрузок',
      },
      low: {
        heading: 'Низкая',
        description: 'Редкие, нерегулярные тренировки, активность в быту',
      },
      medium: {
        heading: 'Средняя',
        description: 'Тренировки 3-5 раз в неделю',
      },
      high: {
        heading: 'Высокая',
        description: 'Тренировки 6-7 раз в неделю',
      },
      maximal: {
        heading: 'Очень высокая',
        description: 'Больше 6 тренировок в неделю и физическая работа',
      },
    },
    form: {
      submit: 'Рассчитать',
      reset: 'Очистить поля и расчёт',
      errors: {
        ageRequired: 'Введите ваш возраст',
        heightRequired: 'Введите ваш рост',
        weightRequired: 'Введите ваш вес',
      },
    },
    result: {
      heading: 'Ваша норма калорий',
      suffix: 'ккал',
      weightMaintenance: 'поддержание веса',
      loseWeight: 'снижение веса',
      gainWeight: 'набор веса',
    },
  },
};

export default ru;
