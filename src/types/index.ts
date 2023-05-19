type TGender = 'male' | 'female';
type TActivity = 'min' | 'low' | 'medium' | 'high' | 'maximal';

export interface IFormValues {
  gender: TGender;
  age: string;
  height: string;
  weight: string;
  activity: TActivity;
}

export interface ICalories {
  weightMaintenance: number;
  gainWeight: number;
  loseWeight: number;
}

export enum Coefficients {
  min = 1.2,
  low = 1.375,
  medium = 1.55,
  high = 1.725,
  maximal = 1.9,
}
