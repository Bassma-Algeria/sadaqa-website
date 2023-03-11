module.exports = {
    i18n: {
        locales: ['en', 'ar'],
        defaultLocale: 'ar',
    },
    localePath:
        typeof window === 'undefined'
            ? require('path').resolve('./src/assets/locales')
            : './src/assets/locales',
};
