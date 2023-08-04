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
            path: '../assets/fonts/IBMPlexSansArabic-Thin.ttf',
            weight: '100',
            style: 'normal',
        },
        {
            path: '../assets/fonts/IBMPlexSansArabic-ExtraLight.ttf',
            weight: '200',
            style: 'normal',
        },
        {
            path: '../assets/fonts/IBMPlexSansArabic-Light.ttf',
            weight: '300',
            style: 'normal',
        },
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
            path: '../assets/fonts/IBMPlexSansArabic-Medium.ttf',
            weight: '500',
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
            path: '../assets/fonts/MyriadPro-Light.otf',
            weight: '300',
            style: 'normal',
        },
        {
            path: '../assets/fonts/MyriadPro-Regular.otf',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../assets/fonts/MyriadPro-SemiBold.otf',
            weight: '600',
            style: 'normal',
        },
        {
            path: '../assets/fonts/MyriadPro-Bold.otf',
            weight: '700',
            style: 'normal',
        },
    ],
});

export default appWithTranslation(App);
