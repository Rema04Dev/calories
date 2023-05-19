import { UseFormRegister } from 'react-hook-form';
import { IFormValues } from '../../types';

export interface IActivityProps {
  register: UseFormRegister<IFormValues>;
}

export interface IActivityInputProps {
  id: string;
  value: string;
  label: string;
  description: string;
  register: UseFormRegister<IFormValues>;
}
