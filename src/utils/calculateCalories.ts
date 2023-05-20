import { ICalories, IFormValues, Coefficients } from '../types/index';

const calculateCalories = (data: IFormValues): ICalories => {
  const { gender, age, height, weight, activity } = data;

  const genderMapping = {
    male: (baseN: number) => baseN + 5,
    female: (baseN: number) => baseN - 161,
  };

  const N = 10 * Number(weight) + 6.25 * Number(height) - 5 * Number(age);
  const NbyGender = genderMapping[gender](N);

  const normal = NbyGender * Coefficients[activity];

  const result = {
    weightMaintenance: Math.floor(normal),
    gainWeight: Math.floor(normal * 1.15),
    loseWeight: Math.floor(normal * 0.85),
  };

  return result;
};

export default calculateCalories;
