import type { AppProps } from 'next/app';
import localFont from '@next/font/local';

import '@nextjs/styles/globals.scss';
import '@nextjs/styles/variables.scss';

const IbmPlexSansArabicFont = localFont({
    src: [
        {
            path: '../framework/nextjs/assets/fonts/IBMPlexSansArabic-Regular.ttf',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../framework/nextjs/assets/fonts/IBMPlexSansArabic-SemiBold.ttf',
            weight: '600',
            style: 'normal',
        },
        {
            path: '../framework/nextjs/assets/fonts/IBMPlexSansArabic-Bold.ttf',
            weight: '700',
            style: 'normal',
        },
    ],
});

const MyriadProFont = localFont({
    src: [
        {
            path: '../framework/nextjs/assets/fonts/MyriadPro-Light.woff',
            weight: '300',
            style: 'normal',
        },
        {
            path: '../framework/nextjs/assets/fonts/MyriadPro-Regular.woff',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../framework/nextjs/assets/fonts/MyriadPro-SemiBold.woff',
            weight: '600',
            style: 'normal',
        },
        {
            path: '../framework/nextjs/assets/fonts/MyriadPro-SemiBoldItalic.woff',
            weight: '600',
            style: 'italic',
        },
        {
            path: '../framework/nextjs/assets/fonts/MyriadPro-Bold.woff',
            weight: '700',
            style: 'normal',
        },
    ],
});

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <style jsx global>{`
                html[lang='en'] {
                    font-family: ${MyriadProFont.style.fontFamily};
                }

                html[lang='ar'] {
                    font-family: ${IbmPlexSansArabicFont.style.fontFamily};
                }
            `}</style>
            <Component {...pageProps} />
        </>
    );
}
