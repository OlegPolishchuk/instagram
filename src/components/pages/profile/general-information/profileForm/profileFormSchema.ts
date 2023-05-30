import * as yap from 'yup';

import { FormValidation } from '@/shared/constants';

export const ProfileFormSchema = yap
  .object({
    userName: yap.string().required().min(FormValidation.minUsernameLength),
    firstName: yap.string(),
    lastName: yap.string(),
    city: yap.string(),
    dateOfBirth: yap.string().required(),
    aboutMe: yap.string().required().min(FormValidation.aboutMe),
  })
  .required();

export type ProfileFormData = yap.InferType<typeof ProfileFormSchema>;
