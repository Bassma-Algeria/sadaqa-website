import { useLocaleDetector } from './useLocaleDetector';

const useRightToLeftDetector = (): { rightToLeft: boolean } => {
  const locale = useLocaleDetector();

  return { rightToLeft: locale === 'ar' };
};

export { useRightToLeftDetector };
