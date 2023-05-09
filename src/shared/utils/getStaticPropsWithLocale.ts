import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export const getStaticPropsWithLocale = () => {
  return async ({ locale }: { locale?: string | undefined }) => {
    return {
      props: {
        ...(await serverSideTranslations(locale ?? 'en')),
      },
    };
  };
};
