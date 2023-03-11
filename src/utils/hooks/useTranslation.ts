import { useTranslation as useI8Translation } from 'next-i18next';

const useTranslation = (namespace: string) => {
    const { t } = useI8Translation(namespace);

    return { t };
};

export { useTranslation };
