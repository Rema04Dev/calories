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
