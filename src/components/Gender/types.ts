import { UseFormRegister } from 'react-hook-form';
import { IFormValues } from '../../types';
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
