import { UseFormRegister } from 'react-hook-form';
import { IFormValues } from '../../App';
export enum GenderIds {
  GENDER_MALE = 'gender-male',
  GENDER_FEMALE = 'gender-female',
}

export interface GenderProps {
  register: UseFormRegister<IFormValues>;
}

export interface GenderInputProps {
  id: GenderIds;
  value: string;
  label: string;
  register: UseFormRegister<IFormValues>;
}
