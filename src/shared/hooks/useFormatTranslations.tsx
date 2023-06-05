import { useTranslation } from 'next-i18next';

export const useFormatTranslations = (nameSpace: string, repeatablePart = '') => {
  const { t } = useTranslation(nameSpace);
  const prefix = repeatablePart ? `${repeatablePart}.` : '';

  return (stringPart: string) => {
    return t(`${prefix}${stringPart}`);
  };
};
