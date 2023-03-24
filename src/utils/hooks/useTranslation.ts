import { useTranslation as useI18Translation } from 'next-i18next';

const useTranslation = (namespace: string) => {
    const { t } = useI18Translation(namespace);

    return { t };
};

export { useTranslation };
