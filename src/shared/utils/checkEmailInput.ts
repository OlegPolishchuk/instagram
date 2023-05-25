import { FormValidation } from '@/shared/constants';

export const checkEmailInput = (value: string) => {
  return FormValidation.emailRegExp.test(value);
};
