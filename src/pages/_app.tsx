import { AppProps } from 'next/app';
import localFont from '@next/font/local';
import { appWithTranslation } from 'next-i18next';

import '../styles/globals.scss';

function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <style jsx global>{`
                html[lang='en'] {
                    font-family: ${MyriadProFont.style.fontFamily};
                    direction: ltr;
                }

                html[lang='ar'] {
                    font-family: ${IbmPlexSansArabicFont.style.fontFamily};
                    direction: rtl;
                }
            `}</style>
            <Component {...pageProps} />
        </>
    );
}

const IbmPlexSansArabicFont = localFont({
    src: [
        {
            path: '../assets/fonts/IBMPlexSansArabic-Light.ttf',
            weight: '300',
            style: 'normal',
        },
        {
            path: '../assets/fonts/IBMPlexSansArabic-Regular.ttf',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../assets/fonts/IBMPlexSansArabic-SemiBold.ttf',
            weight: '600',
            style: 'normal',
        },
        {
            path: '../assets/fonts/IBMPlexSansArabic-Bold.ttf',
            weight: '700',
            style: 'normal',
        },
    ],
});

const MyriadProFont = localFont({
    src: [
        {
            path: '../assets/fonts/MyriadPro-Light.woff',
            weight: '300',
            style: 'normal',
        },
        {
            path: '../assets/fonts/MyriadPro-Regular.woff',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../assets/fonts/MyriadPro-SemiBold.woff',
            weight: '600',
            style: 'normal',
        },
        {
            path: '../assets/fonts/MyriadPro-SemiBoldItalic.woff',
            weight: '600',
            style: 'italic',
        },
        {
            path: '../assets/fonts/MyriadPro-Bold.woff',
            weight: '700',
            style: 'normal',
        },
    ],
});

export default appWithTranslation(App);
