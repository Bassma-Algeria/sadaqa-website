import HeroImage_1 from '../public/images/home_page_1.png';
import HeroImage_2 from '../public/images/home_page_2.png';
import HeroImage_3 from '../public/images/home_page_3.png';

export const heroData = [
  {
    title: 'Alms',
    desc: "Have things you didn't need, Donate them Now on sadaqa website.",
    btnLink: '/create_new_ad',
    btnText: 'DONATE NOW',
    imageAlt: 'hero image',
    imageUrl: HeroImage_1,
  },
  {
    title: 'Need Help',
    desc: 'Post a donation request now, maybe you will find some help.',
    btnLink: '/create_new_ad',
    btnText: 'REQUEST A DONATION',
    imageAlt: 'hero image',
    imageUrl: HeroImage_2,
    reverse: true,
  },
  {
    title: 'Give Help',
    desc: 'Find and help people in need from all around the country',
    btnLink: '/people_need_help/donation_request',
    btnText: 'BROWSE REQUESTS',
    imageAlt: 'hero image',
    imageUrl: HeroImage_3,
  },
];
