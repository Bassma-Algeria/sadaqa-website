import { useRouter } from 'next/router';

const useRTLDetector = () => {
    const router = useRouter();

    return router.locale === 'ar';
};

export { useRTLDetector };
