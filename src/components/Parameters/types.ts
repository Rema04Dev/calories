import { UseFormRegister, FormState } from 'react-hook-form';
import { IFormValues } from '../../App';

export interface ParametersProps {
  register: UseFormRegister<IFormValues>;
  formState: FormState<IFormValues>;
}

export interface ParameterInputProps {
  id: string;
  name: string;
  label: string;
  sublabel: string;
  register: UseFormRegister<IFormValues>;
  formState: FormState<IFormValues>;
}
