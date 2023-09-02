// /** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        extend: {
            fontSize: {
                'display-large': ['64px', '68px'],
                'display-small': ['48px', '52px'],

                h1: ['44px', '52px'],
                h2: ['36px', '44px'],
                h3: ['32px', '40px'],
                h4: ['28px', '36px'],
                h5: ['24px', '32px'],
                h6: ['16px', '28px'],

                'p-large': ['18px', '28px'],
                'p-regular': ['16px', '24px'],
                'p-small': ['14px', '20px'],
                'p-xsmall': ['12px', '20px'],

                'overline-large': ['14px', '20px'],
                'overline-small': ['10px', '20px'],
            },

            colors: {
                white: '#FFFFFF',
                error: '#F34E4E',
                overlay: '#00000080',

                primay: '#2F856E',
                primay1: '#E4FAF4',
                primay2: '#C1F0E3',
                primay3: '#7CD6BC',
                primay4: '#54A78F',
                primay5: '#1D5A48',

                orange: '#FFA802',
                orange1: '#FFFACC',
                orange2: '#FFF27D',
                orange3: '#FFE26C',
                orange4: '#F7C530',
                orange5: '#DF6C02',

                red: '#EE6F4E',
                red1: '#FFE6DB',
                red2: '#FEC8B6',
                red3: '#FBB09D',
                red4: '#F58D72',
                red5: '#BD3F1E',

                blue: '#2C7FB1',
                blue1: '#D2F2FF',
                blue2: '#A3E2FE',
                blue3: '#59BDF9',
                blue4: '#3399D6',
                blue5: '#0D4667',

                text: '#2D2D2D',
                gray1: '#EFF1F1',
                gray2: '#DBDFE1',
                gray3: '#C3C7C8',
                gray4: '#B1B6B8',
                gray5: '#9DA2A4',
                gray6: '#727779',
                gray7: '#4F5152',
                gray8: '#1F1F1F',
            },
        },
    },
    plugins: [],
};
