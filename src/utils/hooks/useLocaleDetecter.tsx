import { useRouter } from 'next/router';

type SupportedLocales = 'ar' | 'en';

const useLocaleDetector = (): SupportedLocales => {
  const { locale } = useRouter();

  return locale as SupportedLocales;
};

export { useLocaleDetector };
